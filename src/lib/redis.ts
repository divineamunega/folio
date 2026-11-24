import Redis from 'ioredis';

// Create Redis client
// If you have Redis credentials, add them to your .env file
const redis = new Redis(import.meta.env.folio_REDIS_URL || 'redis://localhost:6379', {
  // Add retryStrategy for better error handling
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

redis.on('error', (err) => {
  console.error('Redis Client Error', err);
});

redis.on('connect', () => {
  console.log('✅ Redis connected successfully');
});

export default redis;
