import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Sends the contact form via Resend.
 *
 * Needs RESEND_API_KEY set as an environment variable (Vercel project
 * settings, and .env.local for local dev) — never hardcode it here.
 * Sending from Resend's shared onboarding@resend.dev address, which only
 * delivers to the email the Resend account was signed up with — hence
 * CONTACT_TO below, not hello@bozezAI.com (no inbox there yet). Once the
 * bozezai.com domain is verified in Resend and hello@ has a real inbox,
 * switch both CONTACT_TO and CONTACT_FROM over.
 */
const CONTACT_TO = "khushalsethia26@gmail.com";
const CONTACT_FROM = "Bozez Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { error: "Contact form isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const {
    name,
    business,
    email,
    phone,
    interests,
    situation,
    budget,
    problem,
  } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Business", business || "—"],
    ["Email", email],
    ["Phone / WhatsApp", phone || "—"],
    ["Interested in", interests || "—"],
    ["Current situation", situation || "—"],
    ["Budget range", budget || "—"],
    ["Problem", problem || "—"],
  ];

  const html = `
    <h2>New enquiry from bozezai.com</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:600;vertical-align:top">${label}</td><td>${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
  `;

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: `New enquiry from ${name}${business ? ` (${business})` : ""}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
