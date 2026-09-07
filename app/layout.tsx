import type { Metadata } from "next";
import localFont from "next/font/local";
import RegistrationModalProvider from "./components/RegistrationModalContext";
import "./globals.css";

const neueMontreal = localFont({
  variable: "--font-neue-montreal",
  src: [
    { path: "./fonts/NeueMontreal/NeueMontreal-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/NeueMontreal/NeueMontreal-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/NeueMontreal/NeueMontreal-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/NeueMontreal/NeueMontreal-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/NeueMontreal/NeueMontreal-Italic.woff2", weight: "400", style: "italic" },
  ],
});

const recklessNeue = localFont({
  variable: "--font-reckless-neue",
  src: [
    { path: "./fonts/RecklessNeue/RecklessNeue-Book.woff2", weight: "400", style: "normal" },
    { path: "./fonts/RecklessNeue/RecklessNeue-BookItalic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/RecklessNeue/RecklessNeue-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/RecklessNeue/RecklessNeue-MediumItalic.woff2", weight: "500", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "AODZN Product Design Bootcamp",
  description:
    "Learn design by designing something real. A hands-on, cohort-based product design bootcamp for aspiring designers ready to build practical skills, work with a team, and create portfolio-ready projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${recklessNeue.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <RegistrationModalProvider>{children}</RegistrationModalProvider>
      </body>
    </html>
  );
}
