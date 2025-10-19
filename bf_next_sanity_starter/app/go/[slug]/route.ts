// app/go/[slug]/route.ts
import { NextResponse } from 'next/server';
import { client } from '../../../lib/sanity.client';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = await client.fetch(
    `*[_type=="affiliateRedirect" && slug.current==$slug][0]{targetUrl}`,
    { slug }
  );
  const target = data?.targetUrl ?? '/';
  return NextResponse.redirect(target, 302);
}
