import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) =>
  new Response(
    JSON.stringify({
      path: params.path,
    })
  )

export const prerender = false
