import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./styles/global.scss";

const publicSans = Public_Sans({ subsets: ["latin"], weight: ["300", "400", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Frontend Mentor | Easybank Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
