import type { APIRoute } from 'astro';
import redis from '../../../lib/redis';

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get like count for this post
    const likeCount = await redis.get(`post:${slug}:likes`);
    
    return new Response(
      JSON.stringify({ 
        slug,
        likes: parseInt(likeCount || '0') 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching likes:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch likes' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export const POST: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { fingerprint } = body;

    if (!fingerprint) {
      return new Response(
        JSON.stringify({ error: 'Fingerprint is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Check if this fingerprint has already liked this post
    const hasLiked = await redis.sismember(
      `post:${slug}:fingerprints`,
      fingerprint
    );

    let likes: number;

    if (hasLiked) {
      // Unlike: remove fingerprint and decrement count
      await redis.srem(`post:${slug}:fingerprints`, fingerprint);
      likes = await redis.decr(`post:${slug}:likes`);
      
      // Ensure likes don't go below 0
      if (likes < 0) {
        await redis.set(`post:${slug}:likes`, 0);
        likes = 0;
      }
    } else {
      // Like: add fingerprint and increment count
      await redis.sadd(`post:${slug}:fingerprints`, fingerprint);
      likes = await redis.incr(`post:${slug}:likes`);
    }

    return new Response(
      JSON.stringify({
        slug,
        likes,
        hasLiked: !hasLiked,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error toggling like:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to toggle like' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export const prerender = false;
