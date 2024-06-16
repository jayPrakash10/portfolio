import React from "react";

const Header = () => {
  function scroll_to_element(ele_id) {
    document.getElementById(ele_id).scrollIntoView();
  }

  return (
    <header className="sticky top-0 p-3 lg:p-5 bg-slate-50 rounded-b-lg z-10">
      <div className="flex items-center">
        {/* <div className='flex-1'></div> */}
        <div className="flex-1 text-center font-semibold lg:text-lg">
          <button
            className="w-20 px-1 mx-4"
            onClick={() => scroll_to_element("about_me")}
          >
            About
          </button>
          <button
            className="w-20 px-1 mx-4"
            onClick={() => scroll_to_element("resume")}
          >
            Resume
          </button>
          <button
            className="w-20 px-1 mx-4"
            onClick={() => scroll_to_element("portfolio")}
          >
            Portfolio
          </button>
        </div>
        {/* <div className='flex-1'></div> */}
      </div>
    </header>
  );
};

export default Header;
