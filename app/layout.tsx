import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vagisha Anand · Product Manager",
  description: "Product Manager specializing in AI-native products, enterprise SaaS, and diagnostic product strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900 font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
