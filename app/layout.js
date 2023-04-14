"use client";
import { useState } from "react";
import "./globals.css";
import { Space_Mono } from "@next/font/google";
import Nav from "./components/Nav";
import MenuOverlay from "./components/MenuOverlay";
//===============================================

const spaceMono = Space_Mono({
  variable: "--spaceMono-font",
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="bg-zinc-900 overflow-y-scroll">
        <div className="bg"></div>
        <div className="max-w-6xl mx-auto ">
          <Nav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
          <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
          {children}
        </div>
      </body>
    </html>
  );
}
