import React from "react";
import "./Pagination.scss";

export default function Pagination(props) {
  const { currentPage, setCurrentPage, totalPages } = props;

  const handlePageination = (e) => {
    if (currentPage >= 1 && currentPage <= totalPages) {
      if (e.target.name == "next") {
        setCurrentPage(currentPage + 1);
      }
    }
    if (currentPage > 1) {
      if (e.target.name == "prev") {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="pagination pagi_wrapper">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              className="block px-3 py-2 ml-0 leading-tight rounded-l-lg pagi_btn"
              name="prev"
              onClick={handlePageination}
            >
              <span className="sr-only">Previous</span>
              <svg
                // aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {/* <li>
                        <a
                            href
                            className="px-3 py-2 pagi_btn"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 pagi_btn"
                        >
                            2
                        </a>
                    </li> */}
          <li>
            <a className="z-10 px-3 py-2 btn_selected">{currentPage}</a>
          </li>
          {/* <li>
                        <a
                            href="#"
                            className="px-3 py-2 pagi_btn"
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 pagi_btn"
                        >
                            5
                        </a>
                    </li> */}
          <li>
            <button
              className="block  px-3 py-2 pagi_btn rounded-r-lg"
              name="next"
              onClick={handlePageination}
            >
              <span className="sr-only">Next</span>
              <svg
                // aria-hidden="true"
                name="next"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
