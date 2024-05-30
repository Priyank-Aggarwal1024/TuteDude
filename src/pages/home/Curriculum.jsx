import React from 'react';
import '../../styles/curriculum.css'
import CourseCard from './CourseCard';
function Curriculum(props) {
    const courses = [{ heading: "C++", about: "Learn C++ for strong programming fundamentals." },
    { heading: "MERN Stack", about: "Master the MERN stack for high-demand projects." },
    { heading: "Data Structure & Algorithm", about: "Excel in Data Structures and Algorithms for interview success." },
    { heading: "Competitve Programming", about: "Excel in Data Structures and Algorithms for interview success." }
    ]

    return (
        <>
            <section className="curriculum bg-light-pink">
                <div className="curriculum-top">
                    <p className="curriculum-top-button text-pink">DATASCIENCE COURSE LEARNING PATH</p>
                    <h2 className="curriculum-top-heading text-dark-gray"><span className="gradient">Data Science </span>&nbsp; Course Curriculum</h2>
                </div>
                <div className="curriculum-middle">
                    <div className="curriculum-middle-card1">
                        <p className="curriculum-card-para f-22">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <g clipPath="url(#clip0_1_693)">
                                    <path d="M9.70703 24.9937H22.2488V27.4973H9.70703V24.9937Z" fill="#992E9D" />
                                    <path d="M15.979 32.5C17.9617 32.5 19.6411 31.1797 20.1863 29.3726H11.7715C12.3167 31.1799 13.9961 32.5 15.979 32.5Z" fill="#992E9D" />
                                    <path d="M23.7788 3.72656C21.6936 1.64526 18.9248 0.5 15.979 0.5C15.9719 0.5 15.9646 0.5 15.9575 0.5C9.87281 0.511719 4.92921 5.47168 4.93751 11.5566C4.94117 14.2571 5.93043 16.8552 7.72291 18.8721C8.79957 20.0837 9.46925 21.5659 9.65504 23.1189H22.3067C22.4981 21.5608 23.1699 20.0745 24.2468 18.8586C26.0354 16.8398 27.0203 14.241 27.0203 11.5415C27.0203 8.58813 25.8692 5.81274 23.7788 3.72656ZM22.6455 12.479H20.6755C20.551 13.1042 20.3045 13.686 19.9614 14.1982L21.3557 15.5925L20.03 16.9185L18.6358 15.5242C18.1233 15.8669 17.5418 16.1135 16.9163 16.2383V18.2083H15.0413V16.2383C14.416 16.1135 13.8342 15.8669 13.322 15.5242L11.9277 16.9185L10.6018 15.5925L11.9961 14.1982C11.6533 13.686 11.4067 13.1042 11.282 12.479H9.31202V10.604H11.282C11.4067 9.97876 11.6533 9.39697 11.9961 8.88477L10.6018 7.49048L11.9277 6.16455L13.322 7.55884C13.8342 7.21606 14.416 6.96948 15.0413 6.84473V4.87476H16.9163V6.84473C17.5415 6.96948 18.1233 7.21606 18.6355 7.55884L20.0298 6.16455L21.3557 7.49048L19.9614 8.88477C20.3042 9.39697 20.5508 9.97876 20.6755 10.604H22.6455V12.479Z" fill="#992E9D" />
                                    <path d="M15.979 8.62695C14.3718 8.62695 13.0645 9.93457 13.0645 11.5415C13.0645 13.1484 14.3718 14.4561 15.979 14.4561C17.5859 14.4561 18.8933 13.1484 18.8933 11.5415C18.8933 9.93457 17.5859 8.62695 15.979 8.62695Z" fill="#992E9D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_693">
                                        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>25+ core concepts covered in 14 weeks</span>
                        </p>
                    </div>
                    <div className="curriculum-middle-card2">
                        <p className="curriculum-card-para f-22">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <g clipPath="url(#clip0_1_700)">
                                    <path d="M22.1269 2.47632H3.61875C1.62313 2.47632 0 4.09944 0 6.09507V22.3138C0 23.0819 0.868687 23.5149 1.48187 23.0769L6.63625 19.3994C7.06875 19.0913 7.5775 18.9282 8.10875 18.9282H19.4456C21.4412 18.9282 23.0644 17.3051 23.0644 15.3094V3.41382C23.0644 2.89632 22.6444 2.47632 22.1269 2.47632ZM17.5731 13.8332H6.74125C6.22375 13.8332 5.80375 13.4138 5.80375 12.8957C5.80375 12.3782 6.22375 11.9582 6.74125 11.9582H17.5731C18.0906 11.9582 18.5106 12.3782 18.5106 12.8957C18.5106 13.4138 18.0906 13.8332 17.5731 13.8332ZM17.5731 9.45819H6.74125C6.22375 9.45819 5.80375 9.03882 5.80375 8.52069C5.80375 8.00319 6.22375 7.58319 6.74125 7.58319H17.5731C18.0906 7.58319 18.5106 8.00319 18.5106 8.52069C18.5106 9.03882 18.0906 9.45819 17.5731 9.45819Z" fill="#992E9D" />
                                    <path d="M32 13.3669V29.5851C32 30.348 31.1357 30.7893 30.5181 30.3482L25.3638 26.6713C24.9313 26.3632 24.4225 26.2001 23.8913 26.2001H12.5544C10.5587 26.2001 8.93563 24.5763 8.93563 22.5807V20.8032H19.4456C22.475 20.8032 24.9394 18.3388 24.9394 15.3094V9.74756H28.3813C30.3769 9.74756 32 11.3713 32 13.3669Z" fill="#992E9D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_700">
                                        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Instant Doubt Support & Personal Mentorship</span>
                        </p>
                    </div>
                    <div className="curriculum-middle-card3">
                        <p className="curriculum-card-para f-22">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <g clipPath="url(#clip0_1_706)">
                                    <path d="M31.3744 8.52217L16.3119 3.20773C16.1101 3.13648 15.8899 3.13648 15.6881 3.20773L0.625626 8.52217C0.251126 8.6543 0.000500749 9.00805 7.49189e-07 9.40517C-0.000499251 9.8023 0.249313 10.1566 0.623501 10.2896L15.686 15.6444C15.7876 15.6805 15.8938 15.6986 16 15.6986C16.1063 15.6986 16.2124 15.6805 16.314 15.6444L31.3765 10.2896C31.7507 10.1566 32.0004 9.8023 32 9.40517C31.9995 9.00805 31.7489 8.6543 31.3744 8.52217Z" fill="#992E9D" />
                                    <path d="M29.748 21.0359V12.8584L27.873 13.525V21.0359C27.3083 21.361 26.9277 21.97 26.9277 22.6685C26.9277 23.3668 27.3083 23.976 27.873 24.301V28.9083C27.873 29.426 28.2928 29.8458 28.8105 29.8458C29.3283 29.8458 29.748 29.426 29.748 28.9083V24.3011C30.3128 23.9761 30.6934 23.3669 30.6934 22.6685C30.6934 21.9701 30.3129 21.361 29.748 21.0359Z" fill="#992E9D" />
                                    <path d="M15.9996 17.5737C15.6778 17.5737 15.3608 17.519 15.0575 17.4112L6.58984 14.4009V18.5264C6.58984 19.5357 7.64278 20.3893 9.71941 21.0633C11.5295 21.6508 13.7598 21.9743 15.9996 21.9743C18.2393 21.9743 20.4697 21.6508 22.2798 21.0633C24.3564 20.3893 25.4093 19.5357 25.4093 18.5264V14.4009L16.9417 17.4112C16.6383 17.519 16.3214 17.5737 15.9996 17.5737Z" fill="#992E9D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_706">
                                        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Exclusive Support on Job Preparation</span>
                        </p>
                    </div>
                    <div className="curriculum-middle-card4">
                        <p className="curriculum-card-para f-22">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <path d="M16.9375 22.125C17.4552 22.125 17.875 21.7052 17.875 21.1875V17.4375C17.875 16.9198 17.4554 16.5 16.9375 16.5H15.0625C14.5448 16.5 14.125 16.9196 14.125 17.4375V21.1875C14.125 21.7052 14.5447 22.125 15.0625 22.125H16.9375Z" fill="#992E9D" />
                                <path d="M29.1875 6.1875H22.5625C22.5625 5.99869 22.5625 5.06119 22.5625 5.25C22.5625 3.69913 21.3009 2.4375 19.75 2.4375C19.5465 2.4375 11.9716 2.4375 12.25 2.4375C10.6991 2.4375 9.4375 3.69906 9.4375 5.25C9.4375 5.43881 9.4375 6.37631 9.4375 6.1875H2.8125C1.26163 6.1875 0 7.44906 0 9C0 10.8361 0.225 12.444 0.67175 13.8143C1.1185 15.1846 1.78706 16.3174 2.67425 17.2031C4.16719 18.6941 6.06881 19.3125 8.20406 19.3125H12.25C12.25 19.1237 12.25 17.2487 12.25 17.4375C12.25 15.8866 13.5116 14.625 15.0625 14.625C15.2513 14.625 17.1263 14.625 16.9375 14.625C18.4884 14.625 19.75 15.8866 19.75 17.4375C19.75 17.6263 19.75 19.5013 19.75 19.3125H21.8331C23.6993 19.2349 26.752 19.8024 29.3248 17.2416C30.2124 16.3581 30.8812 15.2233 31.3281 13.8466C31.7751 12.4698 32 10.8512 32 9C32 7.44913 30.7384 6.1875 29.1875 6.1875ZM11.3125 5.25C11.3125 4.73275 11.7327 4.3125 12.25 4.3125H19.75C20.2673 4.3125 20.6875 4.73269 20.6875 5.25C20.6875 5.43881 20.6875 6.37631 20.6875 6.1875H11.3125C11.3125 5.99869 11.3125 5.06119 11.3125 5.25Z" fill="#992E9D" />
                                <path d="M21.8587 21.1875H19.75C19.75 22.7383 18.4884 24 16.9375 24C16.7487 24 14.8737 24 15.0625 24C13.5116 24 12.25 22.7384 12.25 21.1875C12.0358 21.1875 7.98075 21.1875 8.21225 21.1875C5.53825 21.1875 3.18956 20.367 1.34944 18.5297C0.829625 18.0108 0.38575 17.4265 0 16.8015V29.625C0 30.1431 0.419312 30.5625 0.9375 30.5625H31.0625C31.5807 30.5625 32 30.1431 32 29.625V16.8401C31.6091 17.4745 31.1634 18.0575 30.6478 18.5709C27.6896 21.5136 24.5392 21.0608 21.8587 21.1875Z" fill="#992E9D" />
                            </svg>
                            <span>10+ Projects, Case Studies</span>
                        </p>
                    </div>
                    <div className="curriculum-middle-card5">
                        <p className="curriculum-card-para f-22">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <g clipPath="url(#clip0_1_719)">
                                    <path d="M8.5 13.625C6.94913 13.625 5.6875 14.8866 5.6875 16.4375V24.0625C5.6875 25.6134 6.94913 26.875 8.5 26.875C10.0509 26.875 11.3125 25.6134 11.3125 24.0625V16.4375C11.3125 14.8866 10.0509 13.625 8.5 13.625Z" fill="#992E9D" />
                                    <path d="M3.8125 16.4376C3.8125 16.1671 3.84819 15.9059 3.89237 15.6479C2.7625 16.0131 1.9375 17.0626 1.9375 18.3126V22.1876C1.9375 23.4375 2.7625 24.487 3.89237 24.8522C3.84819 24.5943 3.8125 24.333 3.8125 24.0626V16.4376Z" fill="#992E9D" />
                                    <path d="M23.5 13.625C21.9491 13.625 20.6875 14.8866 20.6875 16.4375V24.0625C20.6875 25.6134 21.9491 26.875 23.5 26.875C23.7819 26.875 24.0489 26.8208 24.3057 26.7432C23.9567 27.9001 22.8941 28.75 21.625 28.75H18.6398C18.2515 27.6611 17.2206 26.875 16 26.875C14.4491 26.875 13.1875 28.1366 13.1875 29.6875C13.1875 31.2384 14.4491 32.5 16 32.5C17.2206 32.5 18.2515 31.7139 18.6398 30.625H21.625C24.2096 30.625 26.3125 28.5221 26.3125 25.9375V24.0625V16.4375C26.3125 14.8866 25.0509 13.625 23.5 13.625Z" fill="#992E9D" />
                                    <path d="M28.1076 15.6479C28.1518 15.9059 28.1875 16.1671 28.1875 16.4376V24.0626C28.1875 24.333 28.1518 24.5943 28.1076 24.8522C29.2375 24.487 30.0625 23.4375 30.0625 22.1876V18.3126C30.0625 17.0626 29.2375 16.0131 28.1076 15.6479Z" fill="#992E9D" />
                                    <path d="M16 0.5C8.2455 0.5 1.9375 6.808 1.9375 14.5625V14.5864C2.49606 14.1636 3.14231 13.8541 3.85544 13.7156C4.29363 7.39069 9.56588 2.375 16 2.375C22.4341 2.375 27.7064 7.39069 28.1446 13.7155C28.8576 13.8541 29.5039 14.1636 30.0625 14.5864V14.5625C30.0625 6.808 23.7545 0.5 16 0.5Z" fill="#992E9D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_719">
                                        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Dedicated Placement Support</span>
                        </p>
                    </div>
                    <div className="curriculum-middle-card6">
                        <p className="curriculum-card-para f-22">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <g clipPath="url(#clip0_1_737)">
                                    <path d="M9.70703 24.9937H22.2488V27.4973H9.70703V24.9937Z" fill="#992E9D" />
                                    <path d="M15.979 32.5C17.9617 32.5 19.6411 31.1797 20.1863 29.3726H11.7715C12.3167 31.1799 13.9961 32.5 15.979 32.5Z" fill="#992E9D" />
                                    <path d="M23.7788 3.72656C21.6936 1.64526 18.9248 0.5 15.979 0.5C15.9719 0.5 15.9646 0.5 15.9575 0.5C9.87281 0.511719 4.92921 5.47168 4.93751 11.5566C4.94117 14.2571 5.93043 16.8552 7.72291 18.8721C8.79957 20.0837 9.46925 21.5659 9.65504 23.1189H22.3067C22.4981 21.5608 23.1699 20.0745 24.2468 18.8586C26.0354 16.8398 27.0203 14.241 27.0203 11.5415C27.0203 8.58813 25.8692 5.81274 23.7788 3.72656ZM22.6455 12.479H20.6755C20.551 13.1042 20.3045 13.686 19.9614 14.1982L21.3557 15.5925L20.03 16.9185L18.6358 15.5242C18.1233 15.8669 17.5418 16.1135 16.9163 16.2383V18.2083H15.0413V16.2383C14.416 16.1135 13.8342 15.8669 13.322 15.5242L11.9277 16.9185L10.6018 15.5925L11.9961 14.1982C11.6533 13.686 11.4067 13.1042 11.282 12.479H9.31202V10.604H11.282C11.4067 9.97876 11.6533 9.39697 11.9961 8.88477L10.6018 7.49048L11.9277 6.16455L13.322 7.55884C13.8342 7.21606 14.416 6.96948 15.0413 6.84473V4.87476H16.9163V6.84473C17.5415 6.96948 18.1233 7.21606 18.6355 7.55884L20.0298 6.16455L21.3557 7.49048L19.9614 8.88477C20.3042 9.39697 20.5508 9.97876 20.6755 10.604H22.6455V12.479Z" fill="#992E9D" />
                                    <path d="M15.979 8.62695C14.3718 8.62695 13.0645 9.93457 13.0645 11.5415C13.0645 13.1484 14.3718 14.4561 15.979 14.4561C17.5859 14.4561 18.8933 13.1484 18.8933 11.5415C18.8933 9.93457 17.5859 8.62695 15.979 8.62695Z" fill="#992E9D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_737">
                                        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>25+ core concepts covered in 14 weeks</span>
                        </p>
                    </div>
                </div>
                <div className="curriculum-courses">
                    {courses.map((item, idx) => <CourseCard course={item} key={idx} idx={idx} />)}
                </div>
            </section>
        </>
    );
}

export default Curriculum;