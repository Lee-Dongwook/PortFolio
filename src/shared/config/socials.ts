/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icons } from "@/shared/ui/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "LeeDongWook",
    icon: Icons.gitHub,
    link: "https://github.com/Lee-Dongwook",
  },
  {
    name: "LinkedIn",
    username: "LeeDongWook",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/dong-wook-lee-1095112a0/",
  },
  {
    name: "Gmail",
    username: "LeeDongWook",
    icon: Icons.gmail,
    link: "mailto:dlehddnr0713@gmail.com",
  },
];
