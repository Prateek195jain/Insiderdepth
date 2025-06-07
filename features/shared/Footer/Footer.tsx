import Image from "next/image";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="flex flex-col fixed bottom-0 right-0 left-0 max-w-full items-center lg:flex-row lg:flex lg:gap-64 bg-[#161B22] p-2 border border-[#30363D9C] lg:justify-between lg:items-center">
      <span className="flex gap-2">
        <Image
          src="/puma-logo.png"
          alt="logo"
          width={50}
          height={20}
          className="lg:ml-16"
        />
        <Image src="/InsiderDepthLogo.png" alt="logo" width={150} height={50} />
      </span>
      <FooterLinks />
    </div>
  );
};

export default Footer;
