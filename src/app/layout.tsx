import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FlickeringGrid from "@/components/ui/flickering-grid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        <div className="absolute inset-0">
          <FlickeringGrid
            className="w-full h-full -z-10"
            color="rgb(235, 170, 247)"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
