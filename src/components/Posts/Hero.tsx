import Bdacs from "../Logo/Bdacs";
import Datahunt from "../Logo/Datahunt";
import Insomenia from "../Logo/Insomenia";
import Text from "../ui/text";

function Hero() {
  return (
    <div className="h-[250px] py-4 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <Text variant="h1">안녕하세요,</Text>
        <div className="flex">
          <Text variant="h1" className="text-blue-400">
            임성규
          </Text>
          <Text variant="h1">입니다.</Text>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Insomenia />
        <Datahunt />
        <Bdacs />
      </div>
    </div>
  );
}

export default Hero;
