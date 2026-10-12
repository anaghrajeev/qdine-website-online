import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Call the external centralized login API
    const response = await fetch('https://test.getqdine.com/api/auth/centralized-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    const nextResponse = NextResponse.json(data, { status: response.status });

    // Temporarily log the success payload to a file so we can inspect its schema
    const fs = require('fs');
    fs.writeFileSync('./scratch/centralized_login_payload.json', JSON.stringify(data, null, 2));

    // Forward Set-Cookie headers so the client receives the auth cookies
    const setCookieHeader = response.headers.getSetCookie();
    if (setCookieHeader && setCookieHeader.length > 0) {
      setCookieHeader.forEach((cookie) => {
        nextResponse.headers.append('Set-Cookie', cookie);
      });
    }

    return nextResponse;
  } catch (error: any) {
    console.error('Centralized login proxy error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
