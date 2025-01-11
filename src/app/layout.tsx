import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "X Bio Generator",
  description:
    "A powerful tool designed to help users quickly generate personalized and professional bios. Created using the Next.js framework, this application streamlines the process of bio creation, making it simple and efficient.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        <div className="absolute inset-0">
          <FlickeringGrid className="w-full h-full -z-10 opacity-30" />
        </div>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
