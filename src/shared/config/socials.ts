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
    username: "Lee-Dongwook",
    icon: Icons.gitHub,
    link: "https://github.com/Lee-Dongwook",
  },
  {
    name: "LinkedIn",
    username: "dong-wook-lee",
    icon: Icons.gitHub,
    link: "https://www.linkedin.com/in/dong-wook-lee-1095112a0",
  },
  {
    name: "velog",
    username: "@dlehddnr99",
    icon: Icons.post,
    link: "https://velog.io/@dlehddnr99",
  },
  {
    name: "Gmail",
    username: "dlehddnr0713",
    icon: Icons.gmail,
    link: "mailto:dlehddnr0713@gmail.com",
  },
];
