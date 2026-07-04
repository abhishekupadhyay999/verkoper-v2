import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, location, message } = await req.json();

    const data = await resend.emails.send({
      from: "Verkoper Website <onboarding@resend.dev>",
      to: ["verkoperpropertysolutions@gmail.com"],
      subject: `New Website Inquiry from ${name}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:30px">
          <h2 style="color:#081B33">
            New Project Inquiry
          </h2>

          <hr>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Location:</strong> ${location}</p>

          <h3>Project Details</h3>

          <p>${message}</p>

        </div>
      `,
    });

    return NextResponse.json(data);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Unable to send email." },
      { status: 500 }
    );
  }
}