import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeOT — Premium Web Development Studio",
  description:
    "CodeOT is a premium web development agency crafting exceptional digital experiences for ambitious founders and growing businesses.",
  keywords: [
    "web development",
    "Next.js",
    "full-stack",
    "e-commerce",
    "web design",
    "TypeScript",
  ],
  openGraph: {
    title: "CodeOT — Digital Craft, Elevated",
    description:
      "Premium web development studio for founders and brands who refuse to settle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
