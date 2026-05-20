import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darwish Interserve FM | Integrated Facility Management in Qatar",
  description:
    "Darwish Interserve Facility Management delivers integrated Hard FM, Soft FM, MEP, cleaning, security and manpower solutions across Qatar. Reliable. Professional. 24/7.",
  keywords: [
    "Facility Management Qatar",
    "Darwish Interserve",
    "Hard FM",
    "Soft FM",
    "MEP Qatar",
    "Cleaning Qatar",
    "Security Services Qatar"
  ],
  openGraph: {
    title: "Darwish Interserve FM",
    description:
      "Integrated Facility Management Solutions in Qatar — Reliable. Professional. 24/7 Support.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
