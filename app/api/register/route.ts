import { Resend } from "resend";

const NOTIFICATION_EMAIL = "hello.bootcamp@aodzn.com";

const paymentPlanLabels: Record<string, string> = {
  full: "Pay in full",
  instalments: "Instalments",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_FROM_EMAIL environment variable");
    return Response.json(
      { error: "Registration is temporarily unavailable. Please try again later." },
      { status: 500 }
    );
  }

  let body: { fullName?: unknown; email?: unknown; paymentPlan?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const paymentPlan = typeof body.paymentPlan === "string" ? body.paymentPlan.trim() : "";

  if (!fullName || !email || !paymentPlan) {
    return Response.json(
      { error: "Full name, email, and payment plan are required." },
      { status: 400 }
    );
  }

  const planLabel = paymentPlanLabels[paymentPlan] ?? paymentPlan;
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New Bootcamp Enrollment: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="margin-bottom: 4px;">New enrollment on the AODZN Product Design Bootcamp site</h2>
          <p style="color: #555; margin-top: 0;">
            A prospective student just submitted the enrollment form on the website.
            Reach out to confirm payment and share Cohort 01 details.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tbody>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 160px;">Full name</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(fullName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">Payment plan</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${escapeHtml(planLabel)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Submitted at</td>
                <td style="padding: 8px 0;">${escapeHtml(submittedAt)}</td>
              </tr>
            </tbody>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            This notification was sent automatically from the AODZN Bootcamp enrollment form.
          </p>
        </div>
      `,
      text: [
        "New enrollment on the AODZN Product Design Bootcamp site",
        "",
        "A prospective student just submitted the enrollment form on the website.",
        "Reach out to confirm payment and share Cohort 01 details.",
        "",
        `Full name: ${fullName}`,
        `Email: ${email}`,
        `Payment plan: ${planLabel}`,
        `Submitted at: ${submittedAt}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error.name, error.message);
      return Response.json(
        { error: "We couldn't send your registration. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Failed to send registration email:", err);
    return Response.json(
      { error: "We couldn't send your registration. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
