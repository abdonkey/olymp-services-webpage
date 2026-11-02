import * as contentful from 'contentful';
import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------
// The site is built statically, so these calls run at build time on the server.
// CONTENTFUL_DELIVERY_TOKEN is a read-only Content Delivery API token.
const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'Missing Contentful credentials. Set CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN ' +
      '(in .env locally, or as repository secrets in CI).',
  );
}

export const contentfulClient = contentful.createClient({
  space,
  accessToken,
  // For draft/preview content, swap in a Preview API token and set:
  // host: 'preview.contentful.com',
});

// ---------------------------------------------------------------------------
// Content model types (mirrors content-model.json)
// ---------------------------------------------------------------------------
export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: 'author';
  fields: {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    avatar?: EntryFieldTypes.AssetLink;
    bio?: EntryFieldTypes.Text;
  };
}

export interface CategorySkeleton extends EntrySkeletonType {
  contentTypeId: 'category';
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
  };
}

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    publishDate: EntryFieldTypes.Date;
    featuredImage?: EntryFieldTypes.AssetLink;
    excerpt?: EntryFieldTypes.Text;
    author?: EntryFieldTypes.EntryLink<AuthorSkeleton>;
    category?: EntryFieldTypes.EntryLink<CategorySkeleton>;
    content: EntryFieldTypes.RichText;
  };
}

export type BlogPostEntry = contentful.Entry<
  BlogPostSkeleton,
  undefined,
  string
>;

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------
export async function getBlogPosts(): Promise<BlogPostEntry[]> {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
  });
  return entries.items;
}

export async function getBlogPost(
  slug: string,
): Promise<BlogPostEntry | undefined> {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0];
}

/** Contentful asset URLs are protocol-relative (//images.ctfassets.net/...). */
export function assetUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.startsWith('//') ? `https:${url}` : url;
}

/** Format an ISO date as a German long date, e.g. "2. November 2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
