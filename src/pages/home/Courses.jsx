import React from 'react';
import '../../styles/courses.css'
import Tick from '../../assets/tick.png'
function Courses(props) {
    return (
        <>
            <section className="courses">
                <div className="course-2 courses-card">
                    <div className="course-card-left"><h3 className="section-heading">Enroll for DataScience Bundle @₹1,499 <span className="price-change">₹2,600</span></h3>
                        <p className="course-about">Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
                        <p className="course-enroll"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M18.341 9.64984L10.841 2.14984C10.541 1.84984 10.1243 1.6665 9.66602 1.6665H3.83268C2.91602 1.6665 2.16602 2.4165 2.16602 3.33317V9.1665C2.16602 9.62484 2.34935 10.0415 2.65768 10.3498L10.1577 17.8498C10.4577 18.1498 10.8743 18.3332 11.3327 18.3332C11.791 18.3332 12.2077 18.1498 12.5077 17.8415L18.341 12.0082C18.6493 11.7082 18.8327 11.2915 18.8327 10.8332C18.8327 10.3748 18.641 9.94984 18.341 9.64984ZM11.3327 16.6748L3.83268 9.1665V3.33317H9.66602V3.32484L17.166 10.8248L11.3327 16.6748Z" fill="white" />
                            <path d="M5.91602 6.6665C6.60637 6.6665 7.16602 6.10686 7.16602 5.4165C7.16602 4.72615 6.60637 4.1665 5.91602 4.1665C5.22566 4.1665 4.66602 4.72615 4.66602 5.4165C4.66602 6.10686 5.22566 6.6665 5.91602 6.6665Z" fill="white" />
                        </svg>&nbsp; Enroll Now</p></div>
                    <div className="course-card-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="course-design" width="221" height="131" viewBox="0 0 221 131" fill="none">
                            <path d="M113.336 57.3026C113.336 57.3026 93.3294 62.7599 95.4822 66.5734C98.9744 72.7119 127.257 77.5723 129.492 76.5845C131.726 75.5967 132.724 57.3734 129.568 52.2098C127.658 49.0425 120.474 45.5946 115.961 50.8748C114.393 52.6646 113.469 54.927 113.336 57.3026Z" fill="#FEFEFE" fillOpacity="0.5" />
                            <path d="M49.6374 7.80842C51.2288 6.50729 52.9391 5.35861 54.7457 4.37752C56.466 3.46586 58.2874 2.75918 60.1726 2.27196C63.8049 1.22469 67.6466 1.13331 71.3256 2.00668C74.0309 2.65167 75.9068 5.11441 75.8092 7.89287C75.8311 9.06884 75.4872 10.2224 74.8249 11.1942C73.9907 12.5437 72.877 13.6987 71.5588 14.5817C66.81 17.6098 61.1724 18.935 55.5699 18.3401C54.5856 18.2282 53.6218 17.9793 52.7063 17.6008L52.4397 17.4218L52.0732 17.1756L51.3235 16.6721C50.7963 16.3792 50.2948 16.0423 49.8241 15.6652C47.9461 14.2305 46.4246 12.3818 45.378 10.2632C43.3147 5.59367 42.9532 0.349712 44.3562 -4.55695C45.0092 -7.19568 45.9562 -9.75273 47.1793 -12.1802C48.4102 -14.5711 49.9782 -16.7726 51.8355 -18.7173C55.921 -22.7533 60.5286 -26.2244 65.5355 -29.0382C70.0794 -31.7368 74.9064 -34.1728 79.7673 -36.8034C84.8685 -39.3774 89.6194 -42.5929 93.9046 -46.3716C96.8676 -49.0719 99.1347 -52.4477 100.513 -56.2121C100.84 -57.1606 101.104 -58.1299 101.302 -59.1135C101.534 -60.0653 101.692 -61.034 101.773 -62.0105C102.038 -64.0978 101.93 -66.2158 101.453 -68.2654C100.415 -72.6178 97.3408 -76.2031 93.1968 -77.8931C89.6808 -79.2345 85.925 -79.8317 82.167 -79.6471C77.6198 -79.4634 78.3506 -78.2478 81.7898 -76.4938C83.9856 -75.3539 86.113 -74.0866 88.1609 -72.6982C89.2818 -71.9459 90.3166 -71.0726 91.2468 -70.0942C91.941 -69.3138 92.4819 -68.4096 92.8411 -67.4289C93.1822 -66.4675 93.3193 -65.4457 93.2435 -64.4286C93.2002 -63.8132 93.1127 -63.2018 92.9818 -62.599C92.8449 -61.9053 92.6606 -61.2219 92.43 -60.5536C92.1103 -59.3606 91.5952 -58.2288 90.9057 -57.2041C90.2683 -56.0989 89.505 -55.0711 88.6312 -54.1412C84.8568 -50.1769 78.9477 -46.9214 72.8496 -43.7445C66.2798 -40.5534 59.9191 -36.9491 53.8057 -32.9535C50.5059 -30.7661 47.4626 -28.2148 44.7332 -25.3475C41.9354 -22.2742 39.6812 -18.7472 38.0669 -14.9175C36.0995 -10.4479 34.8777 -5.68604 34.4499 -0.820877C34.2455 1.71882 34.3214 4.27345 34.6764 6.79681C35.0742 9.38141 35.8227 11.8999 36.9011 14.2827C39.2453 19.105 42.9486 23.1373 47.5549 25.8832C50.058 27.2975 52.8356 28.1577 55.6996 28.4055C58.2446 28.6637 60.8116 28.602 63.3409 28.222C68.9065 27.4782 74.1949 25.347 78.7197 22.0244C81.2424 20.1396 83.2672 17.6682 84.619 14.8242C85.2625 13.254 85.6528 11.5916 85.7753 9.89885C85.8812 8.26698 85.7152 6.62873 85.2841 5.05098C84.5736 1.87302 82.8433 -0.985997 80.3569 -3.09017C79.1433 -4.0936 77.793 -4.91909 76.3467 -5.54176C75.6823 -5.87534 74.9858 -6.14073 74.2679 -6.33385C73.6031 -6.57689 72.9184 -6.76182 72.2217 -6.88657C69.5263 -7.45036 66.7615 -7.60488 64.0204 -7.34493C61.376 -7.14403 58.7629 -6.64592 56.2303 -5.86003C54.6542 -5.3973 53.1157 -4.81516 51.6282 -4.11867C50.2012 -3.36165 48.7687 -2.63246 47.4471 -1.78045C44.7561 -0.152472 42.2205 1.71932 39.8723 3.81133C35.1516 7.95475 31.1711 12.8715 28.1012 18.3511C25.6773 22.6296 24.1478 27.3562 23.6055 32.2442C23.1652 37.3451 24.1978 42.4659 26.5809 46.9991C28.9933 51.4609 32.6005 55.1635 36.9983 57.6918C39.1051 58.9505 41.343 59.9754 43.6722 60.7485C45.963 61.5221 48.3194 62.0856 50.7121 62.4322C57.9717 63.2982 65.3277 62.8349 72.4198 61.0649C79.297 59.6434 85.742 57.6417 92.0115 56.5853C94.6413 56.145 97.3048 55.9369 99.9713 55.9634C103.223 55.9947 106.458 56.4232 109.606 57.2393C111.386 57.6819 113.235 57.7662 115.048 57.4872C115.82 57.4491 116.589 57.3514 117.347 57.1952C118.394 56.8596 118.364 55.68 117.086 53.5889C114.937 50.5132 111.852 48.2129 108.291 47.0304C104.824 45.7879 101.172 45.1406 97.4901 45.116C94.0449 45.1167 90.6066 45.4188 87.2143 46.0188C83.9125 46.5798 80.7105 47.2802 77.6141 48.0034L68.6864 50.2464C63.4311 51.7173 57.9532 52.2288 52.5154 51.7563C47.614 51.2777 42.9604 49.3705 39.1322 46.2716C36.6368 44.0927 34.8948 41.1805 34.1554 37.9522C33.4153 34.4857 33.6736 30.8808 34.9004 27.5562C37.8512 19.7395 43.0021 12.9449 49.7314 7.99236L49.6374 7.80842Z" fill="url(#paint0_linear_1_160)" />
                            <path d="M123.285 71.2824C117.908 70.7327 112.59 69.7154 107.39 68.2422C106.468 67.9696 105.561 67.6506 104.672 67.2864L104.027 67.0225L103.877 66.9218C103.777 66.8547 103.677 66.7876 103.56 66.7092C103.003 66.5906 102.494 66.3077 102.099 65.8972C101.895 65.3011 102.481 64.9694 102.949 64.6317L103.786 64.1062L103.864 63.9897L104.198 63.9241L104.778 63.6369L105.987 63.0961L110.852 60.8549L113.132 59.8006L114.369 59.1819L115.127 58.7007C115.36 58.5082 115.58 58.3009 115.786 58.0799C116.194 57.6161 116.54 57.1012 116.815 56.5481C117.139 56.0652 117.196 55.6926 117.403 55.2761L118.306 52.9593L120.444 47.292C121.027 45.4492 121.774 43.6624 122.676 41.9534C123.313 41.0043 122.803 40.5406 121.427 40.8249C119.32 41.4579 117.483 42.7745 116.207 44.567C115.883 45.0498 115.569 45.5161 115.245 45.9989L114.511 47.4874L113.144 50.3867C112.724 51.3365 112.309 52.2419 111.89 53.0471L111.532 53.58C111.532 53.58 111.386 53.7964 111.532 53.58L111.281 53.7015L110.718 53.9275L109.37 54.4233L106.456 55.4865C105.475 55.8668 104.461 56.2248 103.481 56.6774L99.936 58.3559C98.0806 59.2154 96.3585 60.3371 94.8225 61.6866C93.505 62.8152 92.7694 64.4795 92.8215 66.2138C93.2082 67.9562 94.2212 69.4963 95.6683 70.5417C97.3222 71.8955 99.1443 73.0299 101.089 73.9165C106.603 76.0347 112.308 77.6169 118.125 78.6412C119.883 78.9758 121.674 79.2606 123.51 79.4787L125.279 79.6521C125.923 79.7253 126.572 79.7574 127.221 79.7482C128.429 79.808 129.633 79.5717 130.729 79.06L131.097 78.8721C131.694 78.2163 132.192 77.4756 132.573 76.6743L133.011 75.3739C133.123 74.9181 133.192 74.4566 133.288 73.9896C133.462 73.1544 133.585 72.3094 133.657 71.4594C133.721 70.753 133.745 70.0687 133.786 69.3957C133.895 66.642 133.87 63.9435 133.712 61.2277C133.677 56.8823 133.246 52.549 132.423 48.2816C132.175 47.3182 132.028 46.3495 131.708 45.3858C130.378 41.8591 128.978 41.1362 126.566 41.8118C125.995 41.942 125.435 42.1148 124.89 42.3287C123.166 43.2417 122.349 45.2626 122.955 47.1176C124.433 53.6013 125.246 60.2187 125.38 66.8668C125.394 67.6013 125.381 68.3412 125.362 69.0533C125.343 69.7654 125.263 70.6053 125.233 71.0447C125.233 71.0447 125.233 71.0447 125.35 71.123C125.467 71.2014 125.35 71.123 125.283 71.2229C125.283 71.2229 125.4 71.3013 125.049 71.211L123.453 71.0326L123.285 71.2824Z" fill="#FEFEFE" fillOpacity="0.5" />
                            <path d="M147.649 70.7815C147.512 70.1578 146.831 70.8842 145.768 72.3937C145.317 73.1228 144.961 73.9068 144.709 74.7266C144.699 75.2228 144.738 75.7187 144.827 76.207C145.607 77.1461 146.452 78.0286 147.356 78.8479C147.919 79.4442 148.608 79.9068 149.372 80.2017C150.851 80.808 152.335 81.4421 153.841 81.9706C154.191 82.0931 154.565 82.1289 154.931 82.0748C156.172 81.9391 157.427 82.1538 158.552 82.6945C158.719 82.8063 158.958 82.7738 159.102 83.0637C160.291 83.8431 161.673 84.2776 163.094 84.319C164.258 83.9894 165.388 83.8544 166.513 83.547C166.591 83.4304 166.763 83.7148 167.015 83.304C167.507 82.5714 167.751 82.7114 168.079 82.6903C168.573 82.6768 169.057 82.5571 169.5 82.3394C169.804 82.0997 170.06 81.8042 170.254 81.4686C170.437 80.9387 170.495 80.3729 170.42 79.8168C170.255 79.4156 170.479 78.8656 170.525 78.365C170.562 78.1951 170.581 78.0217 170.582 77.8478C169.933 76.8449 169.16 75.928 168.281 75.1187L167.737 74.922C167.47 74.743 167.025 74.6134 166.592 74.4671C165.951 74.2341 165.324 73.9663 164.713 73.6646C164.53 73.5416 164.285 73.6909 164.067 73.7624C163.85 73.834 161.472 72.5512 161.367 72.5285C160.794 72.4819 160.333 72.0518 159.614 72.5833C159.513 72.7332 159.363 72.6325 159.252 72.582C158.305 72.2829 157.323 72.1109 156.332 72.0706C155.851 71.9563 155.38 71.802 154.925 71.6092C154.925 71.6092 154.703 71.6529 154.619 71.6693C154.536 71.6857 154.346 71.7518 154.235 71.7013C153.081 71.4234 151.965 71.0064 150.911 70.4596C150.678 70.3029 149.158 70.5867 148.925 70.3577C148.692 70.1288 147.748 71.0656 147.649 70.7815Z" fill="#FEFEFE" fillOpacity="0.5" />
                            <path d="M121.073 93.2565C121.492 92.8852 120.636 92.5761 119.079 92.231C118.335 92.1234 117.58 92.1206 116.836 92.2228C116.421 92.4187 116.027 92.6559 115.66 92.9307C115.525 93.1305 114.589 95.4249 114.197 96.2247C113.874 96.9347 113.695 97.7019 113.672 98.4817C113.551 99.9946 113.368 101.491 113.218 103.009C113.191 103.345 113.257 103.682 113.41 103.983C113.854 105.021 113.929 106.18 113.622 107.267C113.615 107.506 113.472 107.719 113.253 107.816C112.724 108.137 112.403 111.062 112.63 111.408C112.894 111.854 113.134 112.313 113.349 112.785C113.553 113.236 113.819 113.705 114.051 114.151C114.284 114.597 113.917 114.351 114.406 114.558C115.379 114.873 115.206 115.095 115.255 115.418C115.402 115.839 115.621 116.232 115.902 116.578C116.228 116.858 116.586 117.098 116.969 117.294C117.543 117.527 118.156 117.652 118.776 117.662C119.311 117.642 119.844 117.729 120.345 117.918C120.495 118.019 120.767 118.009 120.917 118.037C122.249 117.345 123.433 116.401 124.404 115.257L124.562 114.59C124.658 114.195 124.804 113.689 124.906 113.178C125.093 112.144 125.275 111.009 125.292 110.876C125.309 110.742 125.143 110.413 124.971 110.201C124.799 109.989 125.376 107.115 125.326 107.009C125.161 106.391 125.402 105.78 124.553 105.209C124.386 105.097 124.42 104.975 124.426 104.858C124.322 103.807 124.07 102.776 123.679 101.795C123.562 101.291 123.495 100.776 123.478 100.259C123.478 100.259 123.294 100.136 123.278 99.98C123.262 99.8242 123.045 99.8234 123.096 99.64C122.841 98.4457 122.694 97.2311 122.656 96.0108C122.69 95.7438 121.799 94.4442 121.883 94.1385C121.967 93.8328 120.889 93.4227 121.073 93.2565Z" fill="#FEFEFE" fillOpacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_1_160" x1="73.7294" y1="-52.1127" x2="118.576" y2="65.9825" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FEFEFE" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" stopOpacity="0.7" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="courses-right-top"><p>Total number of courses</p><b>6</b></div>
                        <div className="courses-right-middle"><p>Total number of Certificates</p><b>6</b></div>
                        <div className="courses-right-bottom"><p>Access to Courses</p><b>Lifetime</b></div>
                        <div className="courses-right-top-2"><p><img src={Tick} alt="Tick" /> 6 Extensive Online Courses</p></div>
                        <div className="courses-right-middle-2"><p><img src={Tick} alt="Tick" /> 6 Extensive Online Courses</p></div>
                        <div className="courses-right-bottom-2"><p><img src={Tick} alt="Tick" /> 6 Extensive Online Courses</p></div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Courses;