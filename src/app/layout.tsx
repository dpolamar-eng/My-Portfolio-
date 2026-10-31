import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disha Polamarasetti | Data Scientist & AI Practitioner",
  description:
    "Portfolio of Disha Polamarasetti - Data Scientist & Machine Learning Practitioner. Specializing in predictive analytics, NLP, Power BI intelligence, and end-to-end data modeling.",
  keywords: [
    "Disha Polamarasetti",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning",
    "Power BI",
    "Python",
    "SQL",
    "ResuMate AI",
    "NLP",
  ],
  authors: [{ name: "Disha Polamarasetti" }],
  openGraph: {
    title: "Disha Polamarasetti | Data Scientist & AI Practitioner",
    description:
      "From Learning to Building: Real-world applied machine learning, interactive business intelligence, and predictive modeling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#f6f3fb] text-[#1c1435] flex flex-col font-sans selection:bg-purple-200 selection:text-purple-950">
        {children}
      </body>
    </html>
  );
}
