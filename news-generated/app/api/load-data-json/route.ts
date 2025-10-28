import { NextRequest, NextResponse } from 'next/server';
import { loadDataJson } from '@/lib/indexing';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filePath } = body;

    // Validate file path
    if (!filePath) {
      return NextResponse.json(
        { error: 'File path is required' },
        { status: 400 }
      );
    }

    // Check if file exists
    const fs = require('fs');
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found', path: filePath },
        { status: 404 }
      );
    }

    console.log(`Loading data from JSON file: ${filePath}`);

    // Load data into vector store
    await loadDataJson(filePath);

    return NextResponse.json(
      { 
        success: true, 
        message: `Successfully loaded and indexed data from ${filePath}`,
        filePath 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error loading JSON data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to load JSON data', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}