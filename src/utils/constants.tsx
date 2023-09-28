import { FaLinkedinIn, FaGithub, FaTelegram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { SocialsListType } from "@/types/general";

export const socialShare: SocialsListType[] = [
  {
    icon: <FaGithub />,
    link: "https://github.com/ibrohim97uz",
    name: "Github",
  },
  {
    icon: <FaTelegram />,
    link: "https://t.me/ibrohim_abdulfattah",
    name: "Telegram",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ibrohim-fattohov/",
    name: "Linkedin",
  },
  {
    icon: <MdEmail />,
    link: "mailto:ibrohim97uz@gmail.com",
    name: "Email",
  },
  {
    icon: <FaPhoneAlt />,
    link: "tel:+998949347204",
    name: "Phone",
  },
];
