import ContactMe from "@/components/ContactMe";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
      <p className="text-gray-500">
        <div className="mb-2 flex space-x-2 flex-wrap justify-center">
          <Link href="https://texttosvg.cc/" target="_blank">
            Text To SVG
          </Link>
        </div>
        <div className="text-gray-500">
          {currentYear} @kongge_zephyr All rights reserved.
        </div>
      </p>
    </footer>
  );
}
