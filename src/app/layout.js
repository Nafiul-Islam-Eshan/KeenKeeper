import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FriendsContext from "@/context/FriendsContext";
import { ToastContainer } from "react-toastify";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Friends to keep close in your life",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="corporate"
      lang="en"
      className={`${geist.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC]">
        <FriendsContext>

          {/* <div className="flex flex-col flex-1 lg:px-[245] md:px-[150] px-6"> */}
            {children}
          {/* </div> */}


          <ToastContainer />
        </FriendsContext>
      </body>
    </html>
  );
}
