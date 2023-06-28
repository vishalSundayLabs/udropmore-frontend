import React from "react";
import "./Pagination.scss"

export default function Pagination() {
    return (
        <div className="pagination pagi_wrapper">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <a
                            href
                            className="block px-3 py-2 ml-0 leading-tight rounded-l-lg pagi_btn"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                aria-hidden="true"
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
                        </a>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            className="z-10 px-3 py-2 btn_selected"
                        >
                            3
                        </a>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-3 py-2 pagi_btn rounded-r-lg"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                aria-hidden="true"
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
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}