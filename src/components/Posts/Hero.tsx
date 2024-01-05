import { useEffect, useRef } from "react";
import Bdacs from "../Logo/Bdacs";
import Datahunt from "../Logo/Datahunt";
import Insomenia from "../Logo/Insomenia";
import Text from "../ui/text";
import { useGSAP } from "@gsap/react";
import gsap, { Power1 } from "gsap";
import { randomFloat } from "@/utils";

function Hero() {
  const insomeniaRef = useRef(null);
  const datahuntRef = useRef(null);
  const bdacsRef = useRef(null);

  useGSAP(() => {
    gsap.to(insomeniaRef.current, randomFloat(1.5, 2.5), {
      delay: randomFloat(0, 0.5),
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
    });

    gsap.to(datahuntRef.current, randomFloat(1.5, 2.5), {
      delay: randomFloat(0, 1),
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
    });

    gsap.to(bdacsRef.current, randomFloat(1.5, 2.5), {
      delay: randomFloat(0, 1.5),
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
    });
  });

  //   useEffect(() => {
  //     gsap.to(insomeniaRef.current, 1.5, {
  //       delay: 0,
  //       y: 15,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: Power1.easeInOut,
  //     });
  //   }, []);

  return (
    <div className="h-[250px] py-4 flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <Text variant="h1">안녕하세요,</Text>
        <div className="flex">
          <Text variant="h1" className="text-blue-400">
            임성규
          </Text>
          <Text variant="h1">입니다.</Text>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Insomenia insomeniaRef={insomeniaRef} />
        <Datahunt datahuntRef={datahuntRef} />
        <Bdacs bdacsRef={bdacsRef} />
      </div>
    </div>
  );
}

export default Hero;
