import React from 'react';
import '../../styles/certificate.css'
function Certificate(props) {
    const watermark = Array(12).fill(Array(8).fill("TUTEDUDE"))
    return (
        <section className="section certificate-section">
            <h3 className="opportunity-heading section-heading text-gray">Industry Recognized <span className="text-pink"> 6 Certificates!</span></h3>
            <div className="opportunity-card">
                <div className="opportunity-card-1">
                    <div className="certificate-outer">
                        <div className="certificate-1 certificate">

                            <div className="certificate-left">
                                <div className="certificate-left-top">
                                    <p>Certificate-ID: <b>TD-UIUX-2023-234</b></p>
                                    <p>DatE of issue: <b>September 6, 2023</b></p>
                                </div>
                                <div className="certificate-left-middle">
                                    <p className="ui-ux">UI UX DESIGINING</p>
                                    <p className="text-white">CERTIFICATE OF Completion</p>
                                </div>
                                <div className="certificate-left-bottom">
                                    <b className="text-white" style={{ fontSize: "6px" }}>WWW.TUTEDUDE.COM</b>
                                </div>
                            </div>
                            <div className="certificate-right">
                                <div className="certificate-right-top">
                                    {/* <img src="/Tutedude 1.png" alt="Brand Logo" /> */}
                                    <span>Verify at www.tutedude.com/verify-certificate</span>
                                </div>
                                <div className="certificate-right-middle">
                                    <p className="presented">This Certificate is proudly presented to</p>
                                    <p className="certificate-name f-20">John Doe</p>
                                    <p className="certificate-about">This certifies that John Doe completed the UI UX Designing course on September 22, 2023. All coursework and assessments were successfully finished to meet TuteDude's standards. TuteDude wishes you the best in all your future endeavors.</p>
                                </div>
                                <div className="certificate-right-bottom">
                                    <div className="signature">
                                        <span className="sample">Sample</span>
                                        <span className="sign-name">
                                            Shivam Goyal
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                    <div className="signature">
                                        <span className="sample">Sample</span>

                                        <span className="sign-name">
                                            Abishek Gangwar
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="certificate-watermark">
                                {
                                    watermark.map((item, row) => <div className="watermark-row" key={`${row}row`}>
                                        {
                                            item.map((val, col) => <div className="watermark-column" key={`${col}col`}>{val}</div>)
                                        }
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="certificate-2 certificate">

                            <div className="certificate-left">
                                <div className="certificate-left-top">
                                    <p>Certificate-ID: <b>TD-UIUX-2023-234</b></p>
                                    <p>DatE of issue: <b>September 6, 2023</b></p>
                                </div>
                                <div className="certificate-left-middle">
                                    <p className="ui-ux">UI UX DESIGINING</p>
                                    <p className="text-white">CERTIFICATE OF Completion</p>
                                </div>
                                <div className="certificate-left-bottom">
                                    <b className="text-white" style={{ fontSize: "6px" }}>WWW.TUTEDUDE.COM</b>
                                </div>
                            </div>
                            <div className="certificate-right">
                                <div className="certificate-right-top">
                                    {/* <img src="/Tutedude 1.png" alt="Brand Logo" /> */}
                                    <span>Verify at www.tutedude.com/verify-certificate</span>
                                </div>
                                <div className="certificate-right-middle">
                                    <p className="presented">This Certificate is proudly presented to</p>
                                    <p className="certificate-name f-20">John Doe</p>
                                    <p className="certificate-about">This certifies that John Doe completed the UI UX Designing course on September 22, 2023. All coursework and assessments were successfully finished to meet TuteDude's standards. TuteDude wishes you the best in all your future endeavors.</p>
                                </div>
                                <div className="certificate-right-bottom">
                                    <div className="signature">
                                        <span className="sample">Sample</span>
                                        <span className="sign-name">
                                            Shivam Goyal
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                    <div className="signature">
                                        <span className="sample">Sample</span>

                                        <span className="sign-name">
                                            Abishek Gangwar
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="certificate-watermark">
                                {
                                    watermark.map((item, row) => <div className="watermark-row" key={`${row}row`}>
                                        {
                                            item.map((val, col) => <div className="watermark-column" key={`${col}col`}>{val}</div>)
                                        }
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="certificate-3 certificate">

                            <div className="certificate-left">
                                <div className="certificate-left-top">
                                    <p>Certificate-ID: <b>TD-UIUX-2023-234</b></p>
                                    <p>DatE of issue: <b>September 6, 2023</b></p>
                                </div>
                                <div className="certificate-left-middle">
                                    <p className="ui-ux">UI UX DESIGINING</p>
                                    <p className="text-white">CERTIFICATE OF Completion</p>
                                </div>
                                <div className="certificate-left-bottom">
                                    <b className="text-white" style={{ fontSize: "6px" }}>WWW.TUTEDUDE.COM</b>
                                </div>
                            </div>
                            <div className="certificate-right">
                                <div className="certificate-right-top">
                                    {/* <img src="/Tutedude 1.png" alt="Brand Logo" /> */}
                                    <span>Verify at www.tutedude.com/verify-certificate</span>
                                </div>
                                <div className="certificate-right-middle">
                                    <p className="presented">This Certificate is proudly presented to</p>
                                    <p className="certificate-name f-20">John Doe</p>
                                    <p className="certificate-about">This certifies that John Doe completed the UI UX Designing course on September 22, 2023. All coursework and assessments were successfully finished to meet TuteDude's standards. TuteDude wishes you the best in all your future endeavors.</p>
                                </div>
                                <div className="certificate-right-bottom">
                                    <div className="signature">
                                        <span className="sample">Sample</span>
                                        <span className="sign-name">
                                            Shivam Goyal
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                    <div className="signature">
                                        <span className="sample">Sample</span>

                                        <span className="sign-name">
                                            Abishek Gangwar
                                        </span>
                                        <span className="co-founder">Co Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="certificate-watermark">
                                {
                                    watermark.map((item, row) => <div className="watermark-row" key={`${row}row`}>
                                        {
                                            item.map((val, col) => <div className="watermark-column" key={`${col}col`}>{val}</div>)
                                        }
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opportunity-card-2">
                    <div className="opportunity2-box">
                        <div className="merits-left">
                            <div className="merits-icon-upper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                    <g clipPath="url(#clip0_1_581)">
                                        <path d="M28 14.986L24.8303 11.4668L25.3266 6.75542L20.6916 5.77422L18.3273 1.66699L14 3.60097L13.416 14.986L14 26.3711L18.3273 28.305L20.6916 24.1979L25.3266 23.2166L24.8303 18.5052L28 14.986Z" fill="#992E9D" />
                                        <path d="M9.67268 1.66699L7.30845 5.77422L2.67344 6.75548L3.16973 11.4668L0 14.986L3.16973 18.5052L2.67344 23.2166L7.30845 24.1979L9.67274 28.305L14 26.3711V3.60097L9.67268 1.66699Z" fill="#B73BBE" />
                                        <path d="M19.8691 11.9205L18.6437 10.8267L14 16.0292L13.416 17.3221L14 18.496L19.8691 11.9205Z" fill="#FCF5FE" />
                                        <path d="M9.11988 13.7488L7.95844 14.9103L12.8417 19.7936L14 18.4959V16.0291L12.7739 17.4028L9.11988 13.7488Z" fill="#F9EBFC" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_581">
                                            <rect width="28" height="28" fill="white" transform="translate(0 0.986084)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="merits-right">
                            <p className="f-20 woodsmoke-950">Official and Verified</p>
                            <p className="f-16 woodsmoke-700">Enhance your credibility and distinguish yourself among peers and industry professionals.</p>
                        </div>
                    </div>
                    <div className="opportunity2-box">
                        <div className="merits-left">
                            <div className="merits-icon-upper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                    <g clipPath="url(#clip0_1_594)">
                                        <path d="M9.70539 14.3533L8.86583 12.9433L18.2577 7.30029L19.0973 8.71019L9.70539 14.3533Z" fill="#992E9D" />
                                        <path d="M18.1712 22.9474L9.12138 18.3226L9.86158 16.8582L18.9115 21.4831L18.1712 22.9474Z" fill="#992E9D" />
                                        <path d="M22.2031 0.986084C19.496 0.986084 17.2812 3.20087 17.2812 5.90796C17.2812 8.61494 19.496 10.8298 22.2031 10.8298C24.9102 10.8298 27.125 8.61494 27.125 5.90796C27.125 3.20087 24.9102 0.986084 22.2031 0.986084Z" fill="#B73BBE" />
                                        <path d="M22.2031 19.1423C19.496 19.1423 17.2812 21.3571 17.2812 24.0642C17.2812 26.7712 19.496 28.9861 22.2031 28.9861C24.9102 28.9861 27.125 26.7712 27.125 24.0642C27.125 21.3571 24.9102 19.1423 22.2031 19.1423Z" fill="#B73BBE" />
                                        <path d="M5.79688 10.8845C3.08979 10.8845 0.875 13.0993 0.875 15.8064C0.875 18.5134 3.08979 20.7283 5.79688 20.7283C8.50396 20.7283 10.7188 18.5134 10.7188 15.8064C10.7188 13.0993 8.50396 10.8845 5.79688 10.8845Z" fill="#B73BBE" />
                                        <path d="M27.125 24.0642C27.125 26.7712 24.9102 28.9861 22.2031 28.9861V19.1423C24.9102 19.1423 27.125 21.3571 27.125 24.0642Z" fill="#992E9D" />
                                        <path d="M22.2031 10.8298V0.986084C24.9102 0.986084 27.125 3.20087 27.125 5.90796C27.125 8.61494 24.9102 10.8298 22.2031 10.8298Z" fill="#992E9D" />
                                        <path d="M10.7188 15.8064C10.7188 18.5134 8.50396 20.7283 5.79688 20.7283V10.8845C8.50396 10.8845 10.7188 13.0993 10.7188 15.8064Z" fill="#992E9D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_594">
                                            <rect width="28" height="28" fill="white" transform="translate(0 0.986084)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="merits-right">
                            <p className="f-20 woodsmoke-950">Easily Shareable</p>
                            <p className="f-16 woodsmoke-700">Showcase your achievements to a wider audience for increased impact.</p>
                        </div>
                    </div>
                    <div className="opportunity2-box">
                        <div className="merits-left">
                            <div className="merits-icon-upper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                    <g clipPath="url(#clip0_1_611)">
                                        <path d="M28 11.7951L17.8281 11.1388L13.9891 1.5083L10.1499 11.1388L0 11.7951L7.78745 18.4231L5.22807 28.4638L13.9891 22.9185L22.75 28.4638L20.1906 18.4231L28 11.7951Z" fill="#992E9D" />
                                        <path d="M20.1906 18.4231L22.75 28.4638L13.9891 22.9185V1.5083L17.8281 11.1388L28 11.7951L20.1906 18.4231Z" fill="#B73BBE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_611">
                                            <rect width="28" height="28" fill="white" transform="translate(0 0.986084)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="merits-right">
                            <p className="f-20 woodsmoke-950">Industry Recognized</p>
                            <p className="f-16 woodsmoke-700">Forge lasting connections with a global network of tech experts and experienced peers.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Certificate;