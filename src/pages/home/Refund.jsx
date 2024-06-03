import React, { useEffect, useState } from 'react';
import '../../styles/refund.css'
import Photo from "../../assets/image 533.png"
import Clock from "../../assets/clock.png"
function Refund(props) {
    const [value, setValue] = useState(25)

    const slider = (event) => {
        setValue(event.target.value)
    }
    const [step, setStep] = useState(true)
    useEffect(() => {
        if (window.innerWidth < 780) {
            setStep(false)

        }
    })
    const resize1 = (event) => {
        // console.log(event.target)
        if (window.innerWidth < 780) {
            setStep(false);
        }
        else {
            setStep(true);
        }
    }

    window.addEventListener('resize', resize1)
    return (
        <>
            <section className="refund section">

                <h3 className="section-heading refund-heading text-gray">Don't miss this <span className="text-pink"> FREE learning opportunity!</span> </h3>
                <div className="refund-card">
                    <svg xmlns="http://www.w3.org/2000/svg" className='refund-design' width="89" height="91" viewBox="0 0 89 91" fill="none">
                        <path d="M45.1997 59.6245C45.1997 59.6245 53.5596 61.9049 52.66 63.4984C51.2008 66.0634 39.3827 68.0944 38.4489 67.6816C37.5151 67.2689 37.0982 59.6541 38.4169 57.4964C39.2149 56.173 42.2171 54.7322 44.103 56.9386C44.7578 57.6865 45.1439 58.6318 45.1997 59.6245Z" fill="#FEFEFE" fillOpacity="0.5" />
                        <path d="M71.8163 38.9429C71.1513 38.3992 70.4366 37.9192 69.6817 37.5093C68.9629 37.1284 68.2018 36.8331 67.414 36.6295C65.8963 36.1919 64.2909 36.1537 62.7536 36.5186C61.6232 36.7881 60.8394 37.8172 60.8802 38.9782C60.871 39.4696 61.0147 39.9516 61.2914 40.3577C61.64 40.9216 62.1054 41.4042 62.6562 41.7732C64.6405 43.0385 66.9962 43.5923 69.3373 43.3437C69.7486 43.2969 70.1513 43.1929 70.5339 43.0348L70.6453 42.96L70.7984 42.8571L71.1117 42.6467C71.332 42.5243 71.5416 42.3835 71.7382 42.2259C72.523 41.6264 73.1588 40.854 73.5961 39.9687C74.4582 38.0175 74.6093 35.8262 74.0231 33.7759C73.7502 32.6733 73.3545 31.6048 72.8434 30.5905C72.3291 29.5915 71.6738 28.6715 70.8978 27.8589C69.1906 26.1724 67.2653 24.722 65.1731 23.5462C63.2744 22.4186 61.2574 21.4007 59.2262 20.3015C57.0946 19.2259 55.1094 17.8823 53.3188 16.3033C52.0807 15.175 51.1334 13.7644 50.5573 12.1914C50.4207 11.795 50.3107 11.39 50.2279 10.979C50.1306 10.5813 50.0648 10.1765 50.0311 9.76846C49.9202 8.89629 49.9655 8.01127 50.1648 7.1548C50.5983 5.33611 51.883 3.83796 53.6146 3.13178C55.0838 2.57128 56.6532 2.32171 58.2235 2.39888C60.1236 2.47564 59.8182 2.98358 58.3811 3.71651C57.4635 4.19282 56.5746 4.72239 55.7189 5.30251C55.2505 5.6169 54.8181 5.98179 54.4294 6.39061C54.1393 6.71672 53.9133 7.09456 53.7632 7.50434C53.6207 7.90608 53.5634 8.33306 53.5951 8.75807C53.6132 9.0152 53.6497 9.27068 53.7044 9.52256C53.7616 9.81242 53.8386 10.098 53.935 10.3773C54.0686 10.8758 54.2838 11.3487 54.5719 11.7769C54.8383 12.2387 55.1572 12.6682 55.5224 13.0567C57.0995 14.7132 59.5687 16.0736 62.1168 17.4011C64.8621 18.7345 67.5199 20.2406 70.0745 21.9102C71.4533 22.8242 72.725 23.8903 73.8655 25.0884C75.0346 26.3726 75.9766 27.8464 76.6511 29.4467C77.4732 31.3144 77.9837 33.3041 78.1625 35.3371C78.2479 36.3983 78.2162 37.4658 78.0679 38.5202C77.9016 39.6002 77.5889 40.6526 77.1382 41.6483C76.1587 43.6633 74.6113 45.3482 72.6865 46.4956C71.6405 47.0866 70.4798 47.446 69.2831 47.5496C68.2197 47.6575 67.147 47.6317 66.0901 47.4729C63.7645 47.1621 61.5547 46.2716 59.664 44.8832C58.6098 44.0956 57.7637 43.0629 57.1989 41.8745C56.93 41.2184 56.7669 40.5237 56.7157 39.8164C56.6715 39.1345 56.7408 38.45 56.921 37.7907C57.2178 36.4628 57.9409 35.2681 58.9798 34.3889C59.4869 33.9696 60.0512 33.6246 60.6555 33.3644C60.9332 33.225 61.2242 33.1141 61.5242 33.0335C61.802 32.9319 62.0881 32.8546 62.3792 32.8025C63.5055 32.5669 64.6608 32.5023 65.8062 32.611C66.9112 32.6949 68.0031 32.9031 69.0613 33.2314C69.7199 33.4248 70.3628 33.6681 70.9844 33.9591C71.5807 34.2754 72.1793 34.5801 72.7315 34.9361C73.856 35.6164 74.9155 36.3985 75.8967 37.2727C77.8693 39.0041 79.5326 41.0586 80.8154 43.3483C81.8282 45.1361 82.4673 47.1111 82.6939 49.1536C82.8779 51.2851 82.4464 53.4249 81.4506 55.3191C80.4426 57.1835 78.9353 58.7307 77.0976 59.7872C76.2173 60.3131 75.2821 60.7414 74.3089 61.0644C73.3516 61.3876 72.367 61.6231 71.3672 61.768C68.3337 62.1298 65.2599 61.9362 62.2964 61.1966C59.4227 60.6026 56.7296 59.7662 54.1099 59.3248C53.011 59.1408 51.898 59.0538 50.7838 59.0649C49.4252 59.078 48.0732 59.257 46.7579 59.598C46.0142 59.783 45.2413 59.8182 44.484 59.7017C44.1611 59.6857 43.8399 59.6449 43.5233 59.5796C43.0856 59.4394 43.098 58.9465 43.6325 58.0727C44.5304 56.7875 45.8192 55.8263 47.3072 55.3322C48.7559 54.813 50.2819 54.5425 51.8206 54.5322C53.2602 54.5325 54.6969 54.6588 56.1144 54.9095C57.4941 55.1439 58.8321 55.4366 60.126 55.7387L63.8565 56.676C66.0524 57.2907 68.3414 57.5044 70.6137 57.3069C72.6618 57.1069 74.6063 56.31 76.206 55.0151C77.2487 54.1046 77.9766 52.8878 78.2855 51.5388C78.5948 50.0902 78.4869 48.5839 77.9742 47.1947C76.7412 43.9284 74.5889 41.0893 71.777 39.0198L71.8163 38.9429Z" fill="url(#paint0_linear_1_869)" />
                        <path d="M41.0421 65.4661C43.2887 65.2364 45.5111 64.8113 47.684 64.1957C48.0691 64.0818 48.4482 63.9485 48.8199 63.7963L49.0893 63.6861L49.1519 63.644C49.1937 63.6159 49.2355 63.5879 49.2842 63.5552C49.517 63.5056 49.7297 63.3874 49.8947 63.2158C49.9799 62.9668 49.7353 62.8282 49.5396 62.6871L49.1901 62.4675L49.1574 62.4188L49.0178 62.3914L48.7755 62.2714L48.2702 62.0454L46.2372 61.1089L45.2848 60.6683L44.7677 60.4098L44.4508 60.2087C44.3536 60.1283 44.2617 60.0417 44.1756 59.9493C44.0052 59.7555 43.8607 59.5404 43.7458 59.3092C43.6102 59.1075 43.5865 58.9518 43.4999 58.7777L43.1225 57.8096L42.2291 55.4415C41.9857 54.6715 41.6736 53.9249 41.2966 53.2107C41.0302 52.8141 41.2435 52.6204 41.8183 52.7392C42.699 53.0037 43.4665 53.5538 43.9997 54.3028C44.1353 54.5046 44.2661 54.6994 44.4016 54.9012L44.7082 55.5231L45.2794 56.7346C45.455 57.1316 45.6283 57.5099 45.8038 57.8463L45.9533 58.069C45.9533 58.069 46.014 58.1594 45.9533 58.069L46.0581 58.1197L46.2932 58.2142L46.8566 58.4214L48.0742 58.8656C48.484 59.0246 48.9077 59.1741 49.3175 59.3633L50.7987 60.0646C51.574 60.4238 52.2936 60.8925 52.9354 61.4564C53.4859 61.928 53.7933 62.6235 53.7715 63.3481C53.6099 64.0762 53.1866 64.7198 52.5819 65.1566C51.8908 65.7223 51.1295 66.1963 50.3168 66.5668C48.0127 67.4519 45.6288 68.113 43.1981 68.541C42.4637 68.6809 41.7153 68.7999 40.9482 68.891L40.209 68.9634C39.9396 68.9941 39.6686 69.0075 39.3976 69.0036C38.8927 69.0286 38.3895 68.9299 37.9317 68.716L37.7779 68.6375C37.5282 68.3635 37.3204 68.054 37.1612 67.7191L36.9781 67.1758C36.931 66.9853 36.9025 66.7925 36.8623 66.5973C36.7897 66.2483 36.7381 65.8953 36.7078 65.5401C36.6813 65.2449 36.6711 64.959 36.654 64.6777C36.6085 63.5271 36.6189 62.3995 36.6851 61.2647C36.6996 59.4489 36.88 57.6382 37.2238 55.855C37.3272 55.4524 37.3887 55.0477 37.5223 54.645C38.0781 53.1713 38.6632 52.8693 39.6709 53.1515C39.9095 53.206 40.1437 53.2782 40.3716 53.3675C41.092 53.749 41.4332 54.5935 41.1801 55.3686C40.5622 58.0779 40.2226 60.843 40.1666 63.621C40.1606 63.9279 40.1662 64.2371 40.1741 64.5347C40.182 64.8322 40.2157 65.1832 40.2279 65.3668C40.2279 65.3668 40.2279 65.3668 40.1792 65.3995C40.1304 65.4322 40.1792 65.3995 40.2072 65.4413C40.2072 65.4413 40.1585 65.474 40.3049 65.4362L40.972 65.3617L41.0421 65.4661Z" fill="#FEFEFE" fillOpacity="0.5" />
                        <path d="M30.8613 65.2568C30.9186 64.9962 31.2033 65.2997 31.6471 65.9304C31.8357 66.2351 31.9844 66.5627 32.0896 66.9053C32.0941 67.1126 32.0777 67.3199 32.0404 67.5239C31.7147 67.9163 31.3615 68.2851 30.9835 68.6274C30.7486 68.8766 30.4607 69.0699 30.1412 69.1931C29.5235 69.4465 28.9034 69.7114 28.2739 69.9323C28.1278 69.9835 27.9714 69.9984 27.8183 69.9758C27.2997 69.9191 26.7756 70.0088 26.3053 70.2347C26.2357 70.2815 26.1356 70.2679 26.0756 70.389C25.5787 70.7147 25.0013 70.8963 24.4076 70.9135C23.9212 70.7758 23.4489 70.7194 22.9788 70.591C22.9461 70.5422 22.8744 70.6611 22.7692 70.4894C22.5636 70.1833 22.4615 70.2418 22.3242 70.233C22.1182 70.2273 21.9158 70.1773 21.7308 70.0864C21.6036 69.9862 21.4967 69.8627 21.4157 69.7225C21.3389 69.501 21.3151 69.2647 21.3461 69.0323C21.4154 68.8646 21.3216 68.6348 21.3024 68.4256C21.2869 68.3546 21.2788 68.2822 21.2784 68.2095C21.5496 67.7904 21.8727 67.4073 22.2399 67.0691L22.4675 66.9869C22.5789 66.9121 22.7648 66.858 22.9459 66.7969C23.2135 66.6995 23.4755 66.5876 23.7309 66.4615C23.8074 66.4101 23.91 66.4725 24.0007 66.5024C24.0915 66.5323 25.0851 65.9963 25.1292 65.9868C25.3687 65.9673 25.5611 65.7876 25.8618 66.0097C25.9039 66.0723 25.9665 66.0302 26.013 66.0091C26.4084 65.8842 26.8187 65.8123 27.2331 65.7955C27.434 65.7477 27.6306 65.6832 27.8208 65.6027C27.8208 65.6027 27.9139 65.6209 27.9488 65.6278C27.9837 65.6346 28.0628 65.6622 28.1093 65.6411C28.5915 65.525 29.0579 65.3508 29.4982 65.1223C29.5957 65.0568 30.2309 65.1754 30.3283 65.0797C30.4256 64.984 30.8198 65.3755 30.8613 65.2568Z" fill="#FEFEFE" fillOpacity="0.5" />
                        <path d="M41.9658 74.6482C41.7909 74.493 42.1486 74.3639 42.7993 74.2197C43.11 74.1747 43.4254 74.1735 43.7364 74.2162C43.9097 74.2981 44.0744 74.3972 44.228 74.512C44.284 74.5955 44.6754 75.5543 44.8392 75.8885C44.9742 76.1851 45.0487 76.5057 45.0584 76.8316C45.1093 77.4637 45.1856 78.0889 45.2481 78.7233C45.2595 78.8638 45.2318 79.0047 45.168 79.1305C44.9823 79.5643 44.951 80.0485 45.0793 80.5025C45.0823 80.6023 45.1422 80.6916 45.2335 80.7321C45.4548 80.8661 45.5889 82.0885 45.494 82.233C45.3835 82.4192 45.2832 82.6113 45.1935 82.8084C45.108 82.997 44.997 83.1927 44.9 83.379C44.8029 83.5654 44.956 83.4625 44.7517 83.5493C44.3452 83.681 44.4175 83.7737 44.397 83.9086C44.3356 84.0846 44.244 84.2485 44.1265 84.3932C43.9904 84.5103 43.8408 84.6107 43.681 84.6924C43.4409 84.7899 43.1848 84.8421 42.9257 84.8463C42.7023 84.8379 42.4794 84.8743 42.2703 84.9533C42.2076 84.9953 42.0937 84.9911 42.0309 85.003C41.4745 84.7138 40.9796 84.3193 40.5739 83.8412L40.5079 83.5625C40.4679 83.3975 40.4067 83.1862 40.3642 82.9725C40.2861 82.5403 40.2102 82.0663 40.2031 82.0105C40.1959 81.9548 40.2652 81.8173 40.337 81.7287C40.4089 81.6401 40.1679 80.439 40.1887 80.3948C40.2576 80.1365 40.1568 79.8811 40.5119 79.6427C40.5815 79.5959 40.5674 79.5448 40.5649 79.496C40.6084 79.0569 40.7135 78.6261 40.8771 78.2162C40.9258 78.0054 40.9539 77.7904 40.9611 77.5742C40.9611 77.5742 41.0377 77.5228 41.0445 77.4577C41.0513 77.3925 41.1419 77.3922 41.1208 77.3156C41.227 76.8165 41.2884 76.309 41.3044 75.7991C41.2901 75.6875 41.6627 75.1445 41.6275 75.0167C41.5922 74.889 42.0428 74.7176 41.9658 74.6482Z" fill="#FEFEFE" fillOpacity="0.5" />
                        <defs>
                            <linearGradient id="paint0_linear_1_869" x1="61.7492" y1="13.9043" x2="43.0098" y2="63.2515" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FEFEFE" stopOpacity="0" />
                                <stop offset="1" stopColor="white" stopOpacity="0.7" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h4 className="refund-offer text-white">100% Refund Offer 😎</h4>
                    <div className="input">
                        <p className="seats fw-500">{value} Seats Left</p>
                        <div className="range">
                            <input type="range" min={0} max={100} defaultValue={25} id="range2" onChange={slider} className="range-input" style={{ background: `linear-gradient(to right, #FFC41B ${value}%, #9849FF 0%)` }} />
                        </div>

                    </div>
                    <p className="offer-end text-white f-20"><img src={Clock} alt="Clock" style={{ verticalAlign: "middle", marginRight: "10px" }} />Offer ends in 10:00Mins</p>
                </div>
                <div className="refund-step">
                    <h3 className="text-dark-pink refund-step-heading f-36">How does it work?</h3>
                    <div className="refund-steps-list">
                        <div className="step-card">
                            <div className="step-button"><div className="strip-1"></div><div className="step-shape fw-500 bg-pink">{step == true ? "Step" : null} 1</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-22">
                                    Enroll into the Data Science Bundle by paying ₹2999
                                </h3>
                                <div className="step-card-image">
                                    <img src={Photo} alt="Courses" />
                                </div>
                            </div>
                        </div>
                        <div className="step-card">
                            <div className="step-button"><div className="strip-2"></div><div className="step-shape fw-500 bg-pink">{step == true ? "Step" : null} 2</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-22">
                                    Complete Course & Assignments.
                                </h3>
                                <p className="card-badge flex"><span className="card-badge-value">in 18 Months</span><span className="badge-text text-dark-gray">months time from the date of enrollment</span></p>
                            </div>
                        </div>
                        <div className="step-card">
                            <div className="step-button"><div className="strip-3"></div><div className="step-shape fw-500 bg-pink">{step == true ? "Step" : null} 3</div></div>
                            <div className="step-box b-dark-pink">
                                <h3 className="step-card-heading f-22">
                                    Receive 100% Refund upon completion.
                                </h3>
                                <p className="card-badge flex"><span className="card-badge-value">100%</span><span className="badge-text text-dark-gray">Enrollment Fee is refunded</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="refund-bottom refund-large-screen">
                    <p className="refund-bottom-para">Get <span className="fw-700">lifetime course</span> access, Even after getting <span className="fw-700">100% refund.</span></p>
                </div>
            </section>

        </>
    );
}

export default Refund;