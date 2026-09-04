import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/Component/navbar/page";
import FooterPage from "@/Component/Footer/page";

 
const geist = Geist({
  subsets: ['latin'],
})

export const metadata = {
  title: "KeenKeeper",
  description: "Friends to keep close in your life",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="corporate"
      lang="en"
      className={ `${geist.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC]">
        <NavbarPage />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
