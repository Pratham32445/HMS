import { client } from "@/app/client";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authoptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      // @ts-ignore
      async authorize(credentials) {},
    }),
  ],
  callbacks: {
    // @ts-ignore
    async signIn({ user, account }) {
      const isUser = await client.guest.findFirst({
        where: { email: user.email! },
      });
      if (isUser) return { email: user.email, role: "admin" };
      const User = await client.guest.create({ data: { email: user.email! } });
      return User;
    },
  },
};
