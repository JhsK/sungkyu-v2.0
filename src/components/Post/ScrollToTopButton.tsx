import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import config from "../../../public/lottie/scrollToTopButton.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: config,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function ScrollToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      const handleIsScroll = () => {
        setIsScrolled(window.scrollY > 150);
      };

      window.addEventListener("scroll", handleIsScroll);

      return () => window.removeEventListener("scroll", handleIsScroll);
    }
  }, []);

  const handleClickButton = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-[3%] xl:right-12 hidden md:block opacity-0 transition-opacity md:right-1",
        isScrolled && "opacity-100"
      )}
    >
      <div
        className="rotate-180 flex items-center justify-center"
        onClick={handleClickButton}
      >
        <Lottie options={defaultOptions} width={80} height={80} />
      </div>
    </div>
  );
}

export default ScrollToTopButton;
