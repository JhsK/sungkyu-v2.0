import InsomeniaImage from "../../../public/icons/insomenia.png";
import Image from "next/image";

function Insomenia() {
  return (
    <Image
      className="rounded-2xl shadow-3xl mb-6 cursor-pointer"
      alt="Insomenia Logo Icon"
      src={InsomeniaImage}
      width={70}
      height={70}
    />
  );
}

export default Insomenia;
