import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://test.getqdine.com/api/auth/send-verification-otp', {
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

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Send verification OTP proxy error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send verification code. Please check your network and try again.' },
      { status: 500 }
    );
  }
}

