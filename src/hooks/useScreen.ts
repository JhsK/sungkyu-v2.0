import { BREAK_POINT } from "@/constant";
import { useEffect, useState } from "react";

function useScreen() {
  const [screenWidth, setScreenWidth] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (screenWidth < BREAK_POINT.sm) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  const getCurrentBreakPoint = () => {
    const sortedBreakPoints = Object.entries(BREAK_POINT).sort(
      (a, b) => b[1] - a[1]
    );

    for (let [breakpoint, width] of sortedBreakPoints) {
      if (screenWidth >= width) {
        return breakpoint;
      }

      if (breakpoint === "sm" && screenWidth < width) return "sm";
    }
  };

  return {
    isMobile,
    screenWidth,
    getCurrentBreakPoint,
  };
}

export default useScreen;
