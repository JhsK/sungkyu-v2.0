import React from 'react';
const SidebarWrapper = () => {
  return (
    <div className="fixed top-0 z-30 flex w-fll flex-col border-none bg-white outline-none -translate-x-ful transition duration-500 ease-in-out">
      <div className="flex items-center justify-between p-4">
        <h5
          className="mb-0 font-semibold leading-normal"
          id="offcanvasExampleLabel"
        >
          Offcanvas
        </h5>
        <button
          type="button"
          className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <div>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </div>
      </div>
    </div>
  );
};

export default SidebarWrapper;
