import type { Metadata } from "next";
import "./globals.css";
import FooterSection from "@/components/layout/footer";
import Navbar from "@/components/ui/nav-bar";

export const metadata: Metadata = {
  title: "SEO Expert - Boost Your Online Visibility",
  description:
    "Transform your digital presence with our cutting-edge SEO solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
