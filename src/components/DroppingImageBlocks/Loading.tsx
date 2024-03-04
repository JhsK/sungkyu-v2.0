import Lottie from "react-lottie";
import config from "../../../public/lottie/loading.json";
import { useEffect, useState } from "react";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: config,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Delay({ children }: { children: React.ReactNode }) {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDelayed(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDelayed) return;

  return children;
}

function DroppingImageBlocksLoading() {
  return (
    <div className="w-full h-[500px] bg-white flex items-center justify-center">
      <Delay>
        <Lottie options={defaultOptions} width={120} height={120} />
      </Delay>
    </div>
  );
}

export default DroppingImageBlocksLoading;
