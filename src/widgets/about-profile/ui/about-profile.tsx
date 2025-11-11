import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/shared/ui/icons";
import { buttonVariants } from "@/shared/ui/button";
import ProfileImage from "@/public/certificate.png";
import { cn } from "@/shared/lib/utils";

export const AboutProfile = () => {
  return (
    <section className="h-screen flex items-center pt-6 pb-8 mb-0 md:pb-12 md:py-20 lg:py-32 space-y-6">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
        <Image
          src={ProfileImage}
          alt="Profile Image"
          height={100}
          width={100}
          className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
        />
        <h1 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
          Lee DongWook
        </h1>
        <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
          Frontend Developer
        </h3>
        <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
          <Link
            href={"https://github.com/Lee-DongWook"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
          </Link>
          <Link
            href={"/contact"}
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              })
            )}
          >
            <Icons.contact className="w-4 h-4 mr-2" /> Contact
          </Link>
        </div>
        <Icons.chevronDown className="h-6 w-6 mt-10" />
      </div>
    </section>
  );
};
