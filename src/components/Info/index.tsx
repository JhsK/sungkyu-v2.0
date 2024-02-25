import Text from "../ui/text";

function Info() {
  return (
    <div className="pt-4 flex flex-col gap-1.5">
      <Text variant="h1" className="font-extralight">
        안녕하세요!
      </Text>
      <Text variant="h1" className="font-extralight">
        복잡함을 단순함으로 바꾸는
      </Text>
      <div className="flex">
        <Text variant="h1" className="font-extralight mr-2">
          개발자
        </Text>
        <Text variant="h1" className="font-normal">
          임성규
        </Text>
        <Text variant="h1" className="font-extralight">
          입니다.
        </Text>
      </div>
    </div>
  );
}

export default Info;
