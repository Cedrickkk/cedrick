import { cn } from "@/lib/utils";
import React from "react";

type SVGIconProps = React.SVGProps<SVGSVGElement> & {
  children: React.SVGProps<SVGPathElement>;
  href: string;
};

export default function SVGIcon({
  children,
  className,
  href,
  ...props
}: SVGIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        color="#1b262c"
        {...props}
        className={cn(
          "cursor-pointer transition-all duration-300 ease-in-out hover:text-secondary focus:text-secondary",
          className,
        )}
      >
        {children}
      </svg>
    </a>
  );
}
