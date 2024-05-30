import React from 'react';
import '../../styles/career.css'
import Boy from '../../assets/image 726.png'
import I1 from '../../assets/image 664.png'
import I2 from '../../assets/image 665.png'
import I3 from '../../assets/image 666.png'
import I4 from '../../assets/image 667.png'
import I5 from '../../assets/image 668.png'
import I6 from '../../assets/image 669.png'
import I7 from '../../assets/image 670.png'
import I8 from '../../assets/image 671.png'
import I9 from '../../assets/image 672.png'
function CareerOptions(props) {
    return (
        <>
            <section className="section career">
                <h1 className="section-heading career-heading f-36">Top career options in <span className="gradient">Data Science</span></h1>
                <div className="career-cards">
                    <div className="career-card-1 career-card">
                        <img src={Boy} alt="Career card boy image" />
                        <div>
                            <p className="career-lp">Data Scientist</p>
                            <p className="career-sp">Understand business problems and use your technical & analytical skills to solve them with the help of data.</p>
                        </div>
                    </div>
                    <div className="career-card-2 career-card">
                        <img src={Boy} alt="Career card boy image" />
                        <div>
                            <p className="career-lp">Data Scientist</p>
                            <p className="career-sp">Create and maintain rich interactive visualizations through data interpretation and analysis.</p>
                        </div>
                    </div>
                    <div className="career-card-3 career-card">
                        <img src={Boy} alt="Career card boy image" />
                        <div>
                            <p className="career-lp">Data Scientist</p>
                            <p className="career-sp">Uses domain knowledge and technical aspects of the data industry to drive business decisions.</p>
                        </div>
                    </div>
                    <div className="career-card-4 career-card">
                        <img src={Boy} alt="Career card boy image" />
                        <div>
                            <p className="career-lp">Data Scientist</p>
                            <p className="career-sp">Design, develop and test machine learning systems and implement ML algorithms.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section tools">
                <div className="tool-button">
                    <p>TOOLS COVERED</p>
                </div>
                <h1 className="tool-heading"><span className="gradient">Full Stack Developer</span>  Tools and Languages you will Learn</h1>
                <div className="tool-icon">
                    <img src={I1} alt="HTML Icon" />
                    <img src={I7} alt="JS icon" />
                    <img src={I8} alt="React icon" />
                    <img src={I9} alt="Bootstrap Icon" />
                    <img src={I2} alt="Node js Icon" />
                    <img src={I3} alt="Express js icon" />
                    <img src={I4} alt="Mongo db icon" />
                    <img src={I5} alt="VS Code icon" />
                    <img src={I6} alt="CSS icon" />
                </div>
            </section>
        </>
    );
}

export default CareerOptions;