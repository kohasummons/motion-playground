"use client";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="sync">
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <motion.div
            key={pathname}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
            transition={{
              duration: 0.75,
            }}
          >
            {children}
          </motion.div>
        </body>
      </html>
    </AnimatePresence>
  );
}
