interface PaginationProps {
  currentPage: number;
  totalPage: number;
  center?: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  center,
  currentPage,
  totalPage,
  onPageChange,
}: PaginationProps) => {
  const pageArray = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <div className={`w-full flex ${center && 'justify-center'}`}>
      <ul className="inline-flex -space-x-px text-sm">
        {pageArray.map((page, index) => (
          <li key={index}>
            <a
              // onClick={() => onPageChange(page)}
              href="#"
              className={`flex items-center justify-center px-3 h-8 text-sm font-medium ${
                currentPage === index + 1
                  ? 'bg-[#EAF5FF] text-[#0873FF]'
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              } rounded-lg`}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
