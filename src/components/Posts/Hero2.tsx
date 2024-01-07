import Test from "../Test";
import Text from "../ui/text";

function Hero2() {
  return (
    <div className="flex sm:flex-row items-center flex-col">
      <div className="pt-4">
        <Text variant="h1" className="sm:mb-4">
          About
        </Text>
        <Text variant="p">
          안녕하세요 주니어 프론트엔드 개발자 임성규입니다. <br />
          스타트업에 근무하여 주도적이며 지속가능한 코드에 대해 고민합니다.
        </Text>
      </div>
      <Test />
    </div>
  );
}

export default Hero2;
