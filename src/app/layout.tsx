import type { Metadata } from "next";
import { Caudex } from "next/font/google";
import "./globals.css";

const caudex = Caudex({ 
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Arav",
  description: "Personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caudex.className}>{children}</body>
    </html>
  );
}
