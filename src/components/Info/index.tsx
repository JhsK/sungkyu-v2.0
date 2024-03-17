import Image from "next/image";
import InfoImage from "../../../public/main.png";

function Info() {
  return (
    <Image
      src={InfoImage}
      width={450}
      height={200}
      priority
      alt="sungkyu's blog info text"
    />
  );
}

export default Info;
