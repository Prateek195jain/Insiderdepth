import Image from "next/image";
import Link from "next/link";

const footerItems = [
  { label: "Whitepaper", href: "/whitepaper" },
  { label: "Team", href: "/team" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

const icons = [
  { src: "/instagram.png", alt: "Instagram" },
  { src: "/facebook.png", alt: "Facebook" },
  { src: "/linkedin.png", alt: "LinkedIn" },
  { src: "/spotify.png", alt: "Spotify" },
  { src: "/twitter.png", alt: "Twitter" },
];

const FooterLinks = () => {
  return (
    <footer className="w-full py-2 px-6 flex flex-col items-center gap-6 lg:flex-row lg:justify-around lg:items-center text-white">
      <div className="flex gap-6 flex-wrap justify-center">
        {footerItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:bg-white hover:text-black hover:font-semibold lg:px-4 px-2 py-2 rounded-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        {icons.map((icon, idx) => (
          <Image
            key={idx}
            src={icon.src}
            alt={icon.alt}
            width={25}
            height={25}
            className="opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          />
        ))}
      </div>
    </footer>
  );
};

export default FooterLinks;
