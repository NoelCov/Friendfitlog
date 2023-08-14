import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/navbar/navbar.component";

const inter = Inter({ subsets: ["latin"] });

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// A new way to add metadata to your app directly from NextJS
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-text-darkMode">
        <Navbar />
        <div className="px-6 bg-background-darkMode">{children}</div>
      </body>
    </html>
  );
}
