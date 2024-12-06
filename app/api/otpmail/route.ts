// import { render } from "@react-email/render";
// import { Resend } from "resend";
// import { NextRequest, NextResponse } from "next/server";
// import sendOtpEmail from "@/emails/otp";

// const resend = new Resend(process.env.RESEND_KEY!);

// export const POST = async (req: NextRequest) => {
//   const { email, otp } = await req.json();

//   const {  error } = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",
//     to: [email],
//     subject: "hello world",
//     html: await render(
//       sendOtpEmail({
//         otp,
//       })
//     ),
//   });
//   if (error) return NextResponse.json({ messge: error }, { status: 401 });

//   return NextResponse.json({ message: "sent successfully" }, { status: 200 });
// };
