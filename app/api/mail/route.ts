import { render } from "@react-email/render";
import DropboxResetPasswordEmail from "@/emails";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_KEY!);

export const POST = async (req: NextRequest) => {
  const { email } = await req.json();

  const { error } = await resend.emails.send({    
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "hello world",
    html: await render(
      DropboxResetPasswordEmail({
        userFirstname: "ashwin",
        resetPasswordLink: "new link",
      })
    ),
  });
  if (error) return NextResponse.json({ messge: error }, { status: 401 });

  return NextResponse.json({ message: "sent successfully" }, { status: 200 });
};
