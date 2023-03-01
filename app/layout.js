import "./globals.css";
import "animate.css";
import { Indie_Flower } from "@next/font/google";
import { Space_Mono } from "@next/font/google";
import Nav from "./components/Nav";
//===============================================

const indieFlower = Indie_Flower({
  variable: "--indieFlower-font",
  weight: ["400"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--spaceMono-font",
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className="bg-zinc-900 overflow-y-scroll">
      <div className="bg"></div>
        <div className="max-w-6xl mx-auto">
          <Nav />
          {children}
        </div>
        
      </body>
    </html>
  );
}

{
  /* <body className="bg-gray-900 overflow-y-scroll"> */
}
