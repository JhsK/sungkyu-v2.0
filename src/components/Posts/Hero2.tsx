import DroppingImageBlocks from "../DroppingImageBlocks";
import Info from "../Info";

function Hero2() {
  return (
    <div className="relative flex sm:flex-row items-center flex-col">
      <DroppingImageBlocks />
      <div className="absolute top-[45%] left-[3%] -translate-y-1/2">
        <Info />
      </div>
    </div>
  );
}

export default Hero2;
