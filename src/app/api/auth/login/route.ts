import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://test.getqdine.com/api/auth/admin-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
        return NextResponse.json(data, { status: response.status });
    }

    // Temporarily log the success payload to a file so we can inspect its schema
    const fs = require('fs');
    fs.writeFileSync('./scratch/login_success_payload.json', JSON.stringify(data, null, 2));

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Login proxy error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error (Proxy)' },
      { status: 500 }
    );
  }
}
