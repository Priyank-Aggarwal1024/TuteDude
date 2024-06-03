import React from 'react';
import '../../styles/testimonials.css'
import Star from './Star';
function Testimonials(props) {
    return (
        <section className="section testimonials">
            <h2 className="section-heading testimonials-heading">
                Testimonials from <span className="testimonials-heading-gradient">
                    Our Students!
                </span>
            </h2>
            <div className="testimonials-cards">
                <div className="testimonial-card testimonial-card-1">
                    <div className="testimonial-card-post">Completed a fantastic MERN stack course through Tutedude. The content and support were top-notch, making the learning process smooth and enjoyable. Highly recommend Tutedude for its valuable insights and practical knowledge. Looking forward to more courses!</div>
                    <div className="testimonials-hl"></div>
                    <div>
                        <p className="testimonial-card-publisher">Santhosh</p>
                        <p className="testimonial-card-designation">
                            <Star />
                        </p>
                    </div>
                </div>
                <div className="testimonial-card testimonial-card-2">
                    <div className="testimonial-card-post">Tutedude offers genuine knowledge and excellent 1-on-1 mentorship. Chatra sir provides timely guidance, making it a great decision to join. Highly recommend and eager to enroll in more courses.</div>
                    <div className="testimonials-hl"></div>
                    <div>
                        <p className="testimonial-card-publisher">Kuldeep Verma</p>
                        <p className="testimonial-card-designation"><Star /></p>
                    </div>
                </div>
                <div className="testimonial-card testimonial-card-3">
                    <div className="testimonial-card-post">Completed the Ethical Hacking online course as a beginner and received my certificate today. Satisfied with the knowledge gained and thankful for Tutedude's skillful content.</div>
                    <div className="testimonials-hl"></div>
                    <div>
                        <p className="testimonial-card-publisher">Ayyan Raghav</p>
                        <p className="testimonial-card-designation"><Star /></p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;