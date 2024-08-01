import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_Sk6Ph4qQ_Pt3ebXocWyx1GG4zpooGVGKa"
);

export async function POST(req: { json: () => any }) {
  const body = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["esteban.r1905@gmail.com"],
      subject: "Alguien quiere contactarte 👨🏼‍💻",
      react: EmailTemplate({
        firstName: body.firstName || "empty",
        lastName: body.lastName || "empty",
        email: body.email || "empty",
        phone: body.phone || "empty",
        reason: body.reason || "empty",
      }),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
