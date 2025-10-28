import { NextRequest, NextResponse } from 'next/server';
import { loadDataURL } from '@/lib/indexing';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    try {
      new URL(url);
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    await loadDataURL(url);

    return NextResponse.json(
      { 
        success: true, 
        message: `Successfully loaded and indexed data from ${url}`,
        url 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error loading data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to load data', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}