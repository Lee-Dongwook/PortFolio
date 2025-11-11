import React, { type HTMLAttributes } from "react";
import Link from "next/link";

import { buttonVariants } from "@/shared/ui/button";
import CustomTooltip from "@/shared/ui/custom-tooltip";
import { SocialLinks } from "@/shared/config/socials";
import { cn } from "@/shared/lib/utils";

export function SiteFooter({ className }: HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center gap-8 mt-10 py-10 md:h-24">
        {SocialLinks.map((item, index) => (
          <CustomTooltip icon={item.icon} text={item.username} key={index}>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                "h-10 w-10 p-2"
              )}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          </CustomTooltip>
        ))}
      </div>
    </footer>
  );
}
