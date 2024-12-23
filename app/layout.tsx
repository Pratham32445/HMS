import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/providers/Provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className={montserrat.className}>
          <Navbar/>
          <Provider>{children}</Provider>
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
