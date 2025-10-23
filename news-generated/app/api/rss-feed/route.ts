import Parser from 'rss-parser';
import { NextResponse } from 'next/server';

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media'],
      ['media:thumbnail', 'thumbnail'],
      ['enclosure', 'enclosure'],
    ]
  }
});

export async function GET() {
  try {
    // Stuff.co.nz RSS feed
    const feed = await parser.parseURL('https://www.stuff.co.nz/rss');
    
    const articles = feed.items.slice(0, 5).map(item => ({
      title: item.title || '',
      author: item.creator || 'Stuff reporters',
      link: item.link || '',
      imageUrl: extractImageUrl(item),
      pubDate: item.pubDate || '',
    }));

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json({ error: 'Failed to fetch RSS feed' }, { status: 500 });
  }
}

function extractImageUrl(item: any): string {
  // Try different possible image sources
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }
  if (item.media?.$ && item.media.$.url) {
    return item.media.$.url;
  }
  if (item.thumbnail?.$ && item.thumbnail.$.url) {
    return item.thumbnail.$.url;
  }
  // Fallback to placeholder
  return '/placeholder.svg?height=200&width=300';
}