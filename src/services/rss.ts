import RSS from 'rss';
import RSSParser from 'rss-parser';
import fs from 'fs';

const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

function getFeed() {
  const rss = new RSSParser();

  return rss.parseURL('https://feeds.libsyn.com/104268/spotify');
}

async function createFeed() {
  const options = {
    title: 'My RSS feed',
    site_url: NEXT_PUBLIC_SITE_URL,
    feed_url: `${NEXT_PUBLIC_SITE_URL}/feed.xml`,
    image_url: `${NEXT_PUBLIC_SITE_URL}/favicon.ico`,
    pubDate: new Date().toISOString(),
  };

  return new RSS(options);
}

export async function generateRSSFeed() {
  const feed = await getFeed();
  const isExist = await fs.existsSync('./public/feed.xml');

  if (isExist) {
    await createFeed();
  }

  if (isExist) {
    const feed = await getFeed();
    const isUpdated = feed.items[0].pubDate !== new Date().toISOString();

    if (isUpdated) {
      await createFeed();
    }
  }
}
