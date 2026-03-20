import { Resend } from 'resend';

const FROM_EMAIL = 'Mindcare of America <noreply@mindcareofamerica.com>';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'Mindcareofamerica@gmail.com';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendConfirmationEmail(data: {
  email: string;
  firstName: string;
  type: 'lead' | 'appointment';
}) {
  const subject = data.type === 'appointment'
    ? 'Your Appointment Request — Mindcare of America'
    : 'We Received Your Message — Mindcare of America';

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject,
    html: `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <img src="${process.env.NEXT_PUBLIC_SITE_URL}/logo.png" alt="Mindcare of America" style="height: 60px; margin-bottom: 24px;" />
        <h1 style="color: #00838F; font-size: 24px; margin-bottom: 16px;">Thank you, ${data.firstName}!</h1>
        <p style="color: #1A2332; font-size: 16px; line-height: 1.6;">
          ${data.type === 'appointment'
            ? 'We have received your appointment request. Our team will review your information and reach out within 1 business day to confirm your appointment.'
            : 'We have received your message. A member of our team will get back to you within 1 business day.'}
        </p>
        <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin-top: 24px;">
          If you need immediate assistance, please call us at <strong>(561) 797-0724</strong>.
        </p>
        <hr style="border: none; border-top: 1px solid #E0F7FA; margin: 32px 0;" />
        <p style="color: #6B7280; font-size: 12px;">
          Mindcare of America — Your Wellness is Our Passion<br />
          5813 South Congress Avenue, Atlantis, FL 33462
        </p>
      </div>
    `,
  });
}

export async function sendNotificationEmail(data: {
  type: 'lead' | 'appointment';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  insurance: string;
  conditions: string[];
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  visitType?: string;
}) {
  const subject = data.type === 'appointment'
    ? `New Appointment Request: ${data.firstName} ${data.lastName}`
    : `New Lead: ${data.firstName} ${data.lastName}`;

  const appointmentDetails = data.type === 'appointment'
    ? `
      <tr><td style="padding: 8px; font-weight: bold;">Preferred Date</td><td style="padding: 8px;">${data.preferredDate}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Preferred Time</td><td style="padding: 8px;">${data.preferredTime}</td></tr>
      <tr><td style="padding: 8px; font-weight: bold;">Visit Type</td><td style="padding: 8px;">${data.visitType}</td></tr>
    ` : '';

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: NOTIFICATION_EMAIL,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #00838F;">${subject}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${data.phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Insurance</td><td style="padding: 8px;">${data.insurance}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Conditions</td><td style="padding: 8px;">${data.conditions.join(', ')}</td></tr>
          ${appointmentDetails}
          <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${data.message || 'N/A'}</td></tr>
        </table>
      </div>
    `,
  });
}
