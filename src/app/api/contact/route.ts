import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured (missing RESEND_API_KEY).' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const body = await request.json();

    const { name, email, phone, eventDate, eventLocation, eventType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !eventDate || !eventLocation || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Booking request received:', {
      name,
      email,
      phone,
      eventDate,
      eventLocation,
      eventType,
      message,
      timestamp: new Date().toISOString(),
    });

    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const to = process.env.RESEND_TO_EMAIL || 'Prehistoricpartiesandevents@gmail.com';

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Inquiry from website - ${name}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'N/A'}</p>
      `,
    });

    if (error) {
      console.error('Resend delivery error:', error);
      return NextResponse.json(
        { error: 'Unable to send inquiry email right now. Please try again.' },
        { status: 502 }
      );
    }

    console.log('Resend accepted email:', data?.id);

    return NextResponse.json(
      { success: true, message: 'Booking request received! We will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking request:', error);

    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
