import dynamic from "next/dynamic";
import Info from "../Info";
import DroppingImageBlocksLoading from "../DroppingImageBlocks/Loading";

const DroppingImageBlocks = dynamic(() => import("../DroppingImageBlocks"), {
  loading: () => <DroppingImageBlocksLoading />,
  ssr: false,
});

function Hero2() {
  return (
    <div className="relative flex sm:flex-row items-center flex-col">
      <DroppingImageBlocks />
      <div className="absolute top-[45%] left-[6%] -translate-y-1/2">
        <Info />
      </div>
    </div>
  );
}

export default Hero2;
