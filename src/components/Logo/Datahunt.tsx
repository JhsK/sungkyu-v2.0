import { MutableRefObject } from "react";
import DatahuntImage from "../../../public/icons/datahunt.jpeg";
import Image from "next/image";

interface IDatahuntProps {
  datahuntRef: MutableRefObject<null | HTMLImageElement>;
}

function Datahunt({ datahuntRef }: IDatahuntProps) {
  return (
    <Image
      ref={datahuntRef}
      className="rounded-2xl shadow-3xl mb-6 cursor-pointer"
      alt="Datahunt Logo Icon"
      src={DatahuntImage}
      width={70}
      height={70}
    />
  );
}

export default Datahunt;
