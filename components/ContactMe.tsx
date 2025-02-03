import Link from "next/link";
import { Mail, Github, Twitter } from "lucide-react";

const ContactMe = () => {
  return (
    <div className="flex space-x-4">
      <Link
        href="mailto:zephyrwang6@gmail.com"
        target="_blank"
        className="text-gray-400 hover:text-gray-500"
      >
        <Mail className="h-6 w-6" />
      </Link>
      <Link
        href="https://github.com/zephyrwang6/TextToSvg"
        target="_blank"
        className="text-gray-400 hover:text-gray-500"
      >
        <Github className="h-6 w-6" />
      </Link>
      <Link
        href="https://x.com/zephyr_kongge"
        target="_blank"
        className="text-gray-400 hover:text-gray-500"
      >
        <Twitter className="h-6 w-6" />
      </Link>
    </div>
  );
};
export default ContactMe;
