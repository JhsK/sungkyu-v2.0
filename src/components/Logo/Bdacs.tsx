import { MutableRefObject } from "react";
import BdacsImage from "../../../public/icons/bdacs.jpeg";
import Image from "next/image";

interface IBdacsProps {
  bdacsRef: MutableRefObject<null | HTMLImageElement>;
}

function Bdacs({ bdacsRef }: IBdacsProps) {
  return (
    <Image
      ref={bdacsRef}
      className="rounded-2xl shadow-3xl mb-6 cursor-pointer"
      alt="Bdacs Logo Icon"
      src={BdacsImage}
      width={70}
      height={70}
    />
  );
}

export default Bdacs;
