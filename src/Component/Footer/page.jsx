import Image from "next/image";
import { logoxl, insta, fb, twitter } from "@/assets";
import React from "react";

const FooterPage = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10 lg:px-[245] md:px-[150] ">
      <aside>
        <Image src={logoxl} alt="KeenKeeper Logo" width={300} height={300} />
        <p className="">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        
      </aside>
      <nav>
        <h3 className="text-lg pb-4">Social Links</h3>
        <div className="grid grid-flow-col gap-4">
          {/* Insta */}
          <Image src={insta} alt="Instagrame Logo" width={40} height={40} />

          {/* Fb */}
          <Image src={fb} alt="Facebook Logo" width={40} height={40} />

          {/* Twitter */}
          <Image src={twitter} alt="Twitter Logo" width={40} height={40} />
        </div>
      </nav>
      <div className="w-full flex flex-col md:flex-row items-center justify-between ">
        <p className="opacity-70">© {new Date().getFullYear()} - All right reserved</p>
        <div className="flex gap-4 justify-center items-center">
        <p className="opacity-70">Privacy Policy </p>
        <p className="opacity-70">Terms of Service</p>
        <p className="opacity-70">Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
