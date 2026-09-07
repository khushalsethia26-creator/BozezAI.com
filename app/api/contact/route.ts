import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Sends the contact form to hello@bozezAI.com via Resend.
 *
 * Needs RESEND_API_KEY set as an environment variable (Vercel project
 * settings, and .env.local for local dev) — never hardcode it here.
 * Until the bozezai.com domain is verified in Resend, mail sends from
 * Resend's shared onboarding@resend.dev address; verify the domain in
 * the Resend dashboard and switch CONTACT_FROM below once that's done.
 */
const CONTACT_TO = "hello@bozezAI.com";
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
