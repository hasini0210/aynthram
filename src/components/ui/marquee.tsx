// Inspired by https://github.com/fast-average-color/fast-average-color-react
// and https://magicui.design/docs/components/marquee

"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useRef, useState, useEffect } from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

const Marquee = React.memo(
  React.forwardRef<HTMLDivElement, MarqueeProps>(
    (
      {
        className,
        reverse = false,
        pauseOnHover = false,
        children,
        vertical = false,
        repeat = 4,
        ...props
      },
      ref
    ) => {
      const [containerWidth, setContainerWidth] = useState(0);
      const [contentWidth, setContentWidth] = useState(0);
      const containerRef = useRef<HTMLDivElement>(null);
      const contentRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (containerRef.current && contentRef.current) {
          const calculateWidths = () => {
            setContainerWidth(containerRef.current!.offsetWidth);
            setContentWidth(contentRef.current!.offsetWidth);
          };
          calculateWidths();
          window.addEventListener("resize", calculateWidths);
          return () => {
            window.removeEventListener("resize", calculateWidths);
          };
        }
      }, []);

      const isContentWider = contentWidth > containerWidth;
      const effectiveRepeat = isContentWider ? 1 : repeat;

      return (
        <div
          ref={containerRef}
          className={cn(
            "overflow-hidden [--duration:20s] [--gap:1rem] [gap:var(--gap)]",
            "flex",
            vertical ? "flex-col" : "flex-row",
            className
          )}
          {...props}
        >
          <div
            className={cn("flex-shrink-0 [gap:var(--gap)]", {
              "animate-marquee-horizontal": true,
              "flex items-center": true,
              "[animation-direction:reverse]": reverse,
              "hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {Array(effectiveRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  ref={i === 0 ? contentRef : null}
                  className="flex items-center [gap:var(--gap)]"
                >
                  {children}
                </div>
              ))}
          </div>
        </div>
      );
    }
  )
);

Marquee.displayName = "Marquee";

export default Marquee;
