import * as contentful from 'contentful';
import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

// ---------------------------------------------------------------------------
// Client — runs at build time (static site). Read-only Delivery API token.
// ---------------------------------------------------------------------------
const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'Missing Contentful credentials. Set CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN ' +
      '(in .env locally, or as repository secrets in CI).',
  );
}

export const contentfulClient = contentful.createClient({ space, accessToken });

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
    role?: EntryFieldTypes.Symbol;
    credentials?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    twitter?: EntryFieldTypes.Symbol;
    linkedin?: EntryFieldTypes.Symbol;
    github?: EntryFieldTypes.Symbol;
    website?: EntryFieldTypes.Symbol;
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
    // SEO / GEO
    description?: EntryFieldTypes.Symbol;
    updatedDate?: EntryFieldTypes.Date;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    draft?: EntryFieldTypes.Boolean;
    canonicalUrl?: EntryFieldTypes.Symbol;
    noindex?: EntryFieldTypes.Boolean;
    ogType?: EntryFieldTypes.Symbol;
  };
}

export interface ImpressumSkeleton extends EntrySkeletonType {
  contentTypeId: 'impressum';
  fields: {
    companyName: EntryFieldTypes.Symbol;
    street?: EntryFieldTypes.Symbol;
    postalCode?: EntryFieldTypes.Symbol;
    city?: EntryFieldTypes.Symbol;
    country?: EntryFieldTypes.Symbol;
    managingDirector?: EntryFieldTypes.Symbol;
    email?: EntryFieldTypes.Symbol;
    phone?: EntryFieldTypes.Symbol;
    registerCourt?: EntryFieldTypes.Symbol;
    registerNumber?: EntryFieldTypes.Symbol;
    vatId?: EntryFieldTypes.Symbol;
    responsiblePerson?: EntryFieldTypes.Symbol;
  };
}

export interface ContactPageSkeleton extends EntrySkeletonType {
  contentTypeId: 'contactPage';
  fields: {
    titleDe: EntryFieldTypes.Symbol;
    titleEn: EntryFieldTypes.Symbol;
    introDe?: EntryFieldTypes.Text;
    introEn?: EntryFieldTypes.Text;
    email?: EntryFieldTypes.Symbol;
    phone?: EntryFieldTypes.Symbol;
    headquarters?: EntryFieldTypes.Text;
    web3formsAccessKey?: EntryFieldTypes.Symbol;
  };
}

export type BlogPostEntry = contentful.Entry<BlogPostSkeleton, undefined, string>;
export type ImpressumEntry = contentful.Entry<ImpressumSkeleton, undefined, string>;
export type ContactPageEntry = contentful.Entry<ContactPageSkeleton, undefined, string>;

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------
export async function getBlogPosts(): Promise<BlogPostEntry[]> {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
  });
  // Hide drafts in production builds
  return entries.items.filter((p) => p.fields.draft !== true);
}

export async function getBlogPost(slug: string): Promise<BlogPostEntry | undefined> {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0];
}

export async function getImpressum(): Promise<ImpressumEntry | undefined> {
  const entries = await contentfulClient.getEntries<ImpressumSkeleton>({
    content_type: 'impressum',
    limit: 1,
  });
  return entries.items[0];
}

export async function getContactPage(): Promise<ContactPageEntry | undefined> {
  const entries = await contentfulClient.getEntries<ContactPageSkeleton>({
    content_type: 'contactPage',
    limit: 1,
  });
  return entries.items[0];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
/** Contentful asset URLs are protocol-relative (//images.ctfassets.net/...). */
export function assetUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.startsWith('//') ? `https:${url}` : url;
}

/** Format an ISO date in the given UI language. */
export function formatDate(iso: string, lang: 'de' | 'en' = 'de'): string {
  return new Date(iso).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
