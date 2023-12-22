import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/postCard";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="w-full h-[350px] relative mb-10">
        <Image src="/main.jpg" fill alt="main image" />
      </div>
      <div className="flex items-center gap-4 justify-center mb-4">
        {["HTML", "CSS", "React", "Next.js"].map((category) => (
          <Button key={category} variant="outline" className="rounded-3xl">
            {category}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-10">
        {[0, 1, 2, 3].map((post) => (
          <PostCard key={post} />
        ))}
      </div>
    </>
  );
}

export default Home;
