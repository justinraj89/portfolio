import "./globals.css";
import { Space_Mono } from "@next/font/google";
import Nav from "./components/Nav";
//===============================================

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
        <div className="max-w-6xl mx-auto ">
          <Nav />
          {children}
        </div>
        
      </body>
    </html>
  );
}

