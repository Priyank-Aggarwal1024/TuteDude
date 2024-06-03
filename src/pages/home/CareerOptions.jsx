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
import C1 from '../../assets/C1.png'
import C2 from '../../assets/C2.png'
import C3 from '../../assets/C3.png'
import C4 from '../../assets/C4.png'
function CareerOptions(props) {
    const careerCard = [{ heading: "Data Analyst ", about: 'Understand business problems and use your technical & analytical skills to solve them with the help of data.', img: C1 },
    { heading: "Machine learning Engineer ", about: 'Create and maintain rich interactive visualizations through data interpretation and analysis.', img: C2 },
    { heading: "Business Analyst ", about: 'Uses domain knowledge and technical aspects of the data industry to drive business decisions.', img: C3 },
    { heading: "Data Scientist ", about: 'Design, develop and test machine learning systems and implement ML algorithms.', img: C4 },
    ]
    return (
        <>
            <section className="section career">
                <h1 className="career-heading f-36">Top career options in <span className="gradient">Data Science</span></h1>
                <div className="career-cards">
                    {
                        careerCard.map((item, idx) => (
                            <div className="career-card-1 career-card" key={idx}>
                                <img src={item.img} alt="Career card image" />
                                <div>
                                    <p className="career-lp">{item.heading}</p>
                                    <p className="career-sp">{item.about}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
            <section className="section tools">

                <h1 className="tool-heading"><span className="text-pink">Data Science</span>  Tools and Languages you will Learn</h1>
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