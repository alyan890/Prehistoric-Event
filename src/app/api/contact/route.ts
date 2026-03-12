import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, eventDate, eventLocation, eventType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !eventDate || !eventLocation || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with SendGrid or your email service
    // For now, we'll just log the data and return success
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

    // TODO: Integrate with SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //
    // const msg = {
    //   to: 'admin@velociraptorents.com',
    //   from: 'noreply@velociraptorents.com',
    //   subject: `New Booking Request from ${name}`,
    //   html: `
    //     <h2>New Event Booking Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Event Date:</strong> ${eventDate}</p>
    //     <p><strong>Event Location:</strong> ${eventLocation}</p>
    //     <p><strong>Event Type:</strong> ${eventType}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // };
    //
    // await sgMail.send(msg);

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
