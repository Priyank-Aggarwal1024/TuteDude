import React from 'react';
import { GoEye } from "react-icons/go";

function CourseCard({ course, idx }) {
    return (
        <>
            <div className="curriculum-course-card">
                <div className="curriculum-card-left">
                    <h3 className="f-28 text-dark-gray fw-600">{Number(idx) + 1}. {course.heading}</h3>
                    <p className="curriculum-card-about f-20 text-light-gray">
                        <span className="span-course-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <mask id="mask0_1_694" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                                    <rect width="28" height="28" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1_694)">
                                    <path d="M9.33332 23.3333H18.6667V19.8333C18.6667 18.5499 18.2097 17.4513 17.2958 16.5374C16.3819 15.6235 15.2833 15.1666 14 15.1666C12.7167 15.1666 11.618 15.6235 10.7042 16.5374C9.79027 17.4513 9.33332 18.5499 9.33332 19.8333V23.3333ZM14 12.8333C15.2833 12.8333 16.3819 12.3763 17.2958 11.4624C18.2097 10.5485 18.6667 9.44992 18.6667 8.16659V4.66659H9.33332V8.16659C9.33332 9.44992 9.79027 10.5485 10.7042 11.4624C11.618 12.3763 12.7167 12.8333 14 12.8333ZM4.66666 25.6666V23.3333H6.99999V19.8333C6.99999 18.6471 7.27707 17.5339 7.83124 16.4937C8.38541 15.4534 9.15832 14.6221 10.15 13.9999C9.15832 13.3777 8.38541 12.5464 7.83124 11.5062C7.27707 10.4659 6.99999 9.3527 6.99999 8.16659V4.66659H4.66666V2.33325H23.3333V4.66659H21V8.16659C21 9.3527 20.7229 10.4659 20.1687 11.5062C19.6146 12.5464 18.8417 13.3777 17.85 13.9999C18.8417 14.6221 19.6146 15.4534 20.1687 16.4937C20.7229 17.5339 21 18.6471 21 19.8333V23.3333H23.3333V25.6666H4.66666Z" fill="url(#paint0_linear_1_694)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1_694" x1="4.66666" y1="7.51844" x2="24.3462" y2="9.15325" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B73BBE" />
                                        <stop offset="1" stopColor="#FFA50B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="f-20 c-f12">{" " + course.duration}</span>
                        </span>
                        <span className="span-course-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <mask id="mask0_1_700" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                                    <rect width="28" height="28" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1_700)">
                                    <path d="M4.66666 24.4999C4.02499 24.4999 3.47569 24.2714 3.01875 23.8145C2.5618 23.3576 2.33333 22.8083 2.33333 22.1666V9.33325C2.33333 8.69159 2.5618 8.14228 3.01875 7.68534C3.47569 7.22839 4.02499 6.99992 4.66666 6.99992H9.33333V4.66659C9.33333 4.02492 9.5618 3.47561 10.0187 3.01867C10.4757 2.56172 11.025 2.33325 11.6667 2.33325H16.3333C16.975 2.33325 17.5243 2.56172 17.9812 3.01867C18.4382 3.47561 18.6667 4.02492 18.6667 4.66659V6.99992H23.3333C23.975 6.99992 24.5243 7.22839 24.9812 7.68534C25.4382 8.14228 25.6667 8.69159 25.6667 9.33325V22.1666C25.6667 22.8083 25.4382 23.3576 24.9812 23.8145C24.5243 24.2714 23.975 24.4999 23.3333 24.4999H4.66666ZM4.66666 22.1666H23.3333V9.33325H4.66666V22.1666ZM11.6667 6.99992H16.3333V4.66659H11.6667V6.99992Z" fill="url(#paint0_linear_1_700)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1_700" x1="2.33333" y1="7.25918" x2="26.81" y2="9.93461" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B73BBE" />
                                        <stop offset="1" stopColor="#FFA50B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="f-20 c-f12">{" " + course.projects}</span>
                        </span>
                    </p>
                </div>
                <p className="curriculum-card-right bg-light-pink b-dark-pink fw-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className='va-middle'>
                    <path d="M23.0382 6.88408C20.6097 3.13731 16.4637 0.858539 11.999 0.81665C7.53424 0.858539 3.38824 3.13731 0.959815 6.88408C-0.319938 8.7622 -0.319938 11.2322 0.959815 13.1103C3.38687 16.8594 7.53311 19.1405 11.999 19.1838C16.4637 19.1419 20.6097 16.8631 23.0382 13.1164C24.3206 11.2368 24.3206 8.76356 23.0382 6.88408ZM20.5533 11.4075C18.6992 14.3483 15.4753 16.1424 11.999 16.1682C8.52266 16.1425 5.29873 14.3483 3.44464 11.4075C2.86663 10.5583 2.86663 9.44208 3.44464 8.59295C5.29868 5.6522 8.52261 3.85805 11.999 3.83227C15.4753 3.858 18.6992 5.6522 20.5533 8.59295C21.1313 9.44208 21.1313 10.5583 20.5533 11.4075Z" fill="#B73BBE" />
                    <path d="M11.9989 14.0209C14.2195 14.0209 16.0197 12.2207 16.0197 10.0001C16.0197 7.77943 14.2195 5.97925 11.9989 5.97925C9.77824 5.97925 7.97806 7.77943 7.97806 10.0001C7.97806 12.2207 9.77824 14.0209 11.9989 14.0209Z" fill="#B73BBE" />
                </svg> View Curriculum</p>
            </div>
        </>
    );
}

export default CourseCard;