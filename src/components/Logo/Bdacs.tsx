import BdacsImage from "../../../public/icons/bdacs.jpeg";
import Image from "next/image";

function Bdacs() {
  return (
    <Image
      className="rounded-2xl shadow-3xl mb-6 cursor-pointer"
      alt="Bdacs Logo Icon"
      src={BdacsImage}
      width={70}
      height={70}
    />
  );
}

export default Bdacs;
