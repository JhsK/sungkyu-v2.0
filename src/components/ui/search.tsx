import { Search as SearchIcon } from "lucide-react";
import Text from "./text";

interface ISearchProps {
  result?: string[];
}

function Search({ result }: ISearchProps) {
  return (
    <div className="relative w-[350px]">
      <input
        type="text"
        className="border-b border-slate-200 text-zinc-900 outline-none py-2 pl-8 w-full text-sm"
      />
      <SearchIcon className="absolute left-0 top-2/4 -translate-y-1/2 w-5 h-5 text-gray-300" />
      {result && result.length > 0 && (
        <div className="w-[350px] absolute top-12 left-0 rounded-md shadow-2xl p-4 flex flex-col bg-white z-50">
          {result.map((str) => (
            <div
              className="hover:bg-zinc-100 cursor-pointer py-1 px-3 rounded-lg"
              key={str}
            >
              <Text variant="p" className="text-zinc-900 select-none">
                {str}
              </Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
