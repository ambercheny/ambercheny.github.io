import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ya-Lin Chen (Amber)",
  description: "Pharmacist and PhD candidate at University of Washington, bridging AI and healthcare. Developing deep learning models for clinical applications and advancing usable healthcare innovation.",
  keywords: ["biomedical informatics", "healthcare AI", "clinical informatics", "machine learning", "pharmacist", "PhD candidate"],
  authors: [{ name: "Ya-Lin Chen" }],
  openGraph: {
    title: "Ya-Lin Chen (Amber)",
    description: "Pharmacist & Biomedical Informatics PhD Candidate at University of Washington. Bridging AI and healthcare to build usable clinical innovations.",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
