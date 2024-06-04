import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Aside from "@/components/core/Aside";
import Header from "@/components/core/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "text-primary font-metrophobic"}>
        <div>
          <Aside />
          <section>
            <Header />
            <main>{children}</main>
          </section>
        </div>
      </body>
    </html>
  );
}
