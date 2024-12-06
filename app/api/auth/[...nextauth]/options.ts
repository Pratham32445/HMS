import { client } from "@/app/client";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authoptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      // @ts-expect-error: Necessary due to type mismatch between custom and library types
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;
        const User = await client.guest.findFirst({ where: { email } });
        if (User) {
          const isPassword = User.password == password;
          console.log(isPassword);
          if (isPassword) return User;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const User = await client.guest.findFirst({
          where: { email: user.email! },
        });
        token.isAdmin = User?.accountRole == "ADMIN";
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-expect-error: Necessary due to type mismatch between custom and library types
      session.user.isAdmin = token.isAdmin as boolean;
      return session;
    },
    // @ts-expect-error: Necessary due to type mismatch between custom and library types
    async signIn({ user }) {
      const isUser = await client.guest.findFirst({
        where: { email: user.email! },
      });
      if (isUser) return { email: user.email, role: "admin" };
      const User = await client.guest.create({ data: { email: user.email! } });
      return User;
    },
  },
};

declare module "next-auth" {
  interface Session {
    user: {
      email: string | null;
      name: string | null;
      isAdmin: string | null;
      image: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin?: boolean;
  }
}
