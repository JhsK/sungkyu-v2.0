import Image from "next/image";

function Home() {
  return (
    <div className="w-full h-[350px] relative">
      <Image src="/main.jpg" fill alt="main image" />
    </div>
  );
}

export default Home;
