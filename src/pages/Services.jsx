import React, { useState, useEffect, useRef } from 'react';
import '../styles/Services.css';
import { FaChartLine, FaPiggyBank, FaUsers, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { initial: 'S', name: 'Sanjali Dharamshi', comment: "'I'm really thankful to Prafful for encouraging me to start investing in mutual funds. His practical advice and steady guidance have made a big difference in how I handle my finances."},
  { initial: 'B', name: 'Bhoumik Nandu', comment: 'Praful has been an excellent investment advisor, consistently making smart and timely decisions that have strengthened my portfolio.' },
  { initial: 'C', name: 'Chirag Patel', comment: 'Clear guidance on SIP/SWP, very trustworthy service.' },
  { initial: 'D', name: 'Divya Joshi', comment: 'They made finance easy to understand. Great experience!' },
  { initial: 'E', name: 'Eshan Verma', comment: 'Alternate investments explained beautifully. Gained a lot.' },
  { initial: 'F', name: 'Fatima Khan', comment: 'Peace of mind through excellent financial planning advice.' },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);
  const animationDirection = useRef('next'); // keep track of direction

  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".testimonial-box",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Handle next with animation
  const handleNext = () => {
    animationDirection.current = 'next';
    animateTestimonialChange((currentIndex + 1) % testimonials.length);
  };

  // Handle prev with animation
  const handlePrev = () => {
    animationDirection.current = 'prev';
    animateTestimonialChange(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  // Animate testimonial card out, change index, animate in
  const animateTestimonialChange = (newIndex) => {
    const node = testimonialRef.current;
    if (!node) return;

    const direction = animationDirection.current === 'next' ? 1 : -1;

    // Animate out
    gsap.to(node, {
      x: 100 * direction,
      opacity: 0,
      duration: 0.4,
      ease: 'power1.in',
      onComplete: () => {
        // Change testimonial index
        setCurrentIndex(newIndex);

        // Reset position instantly to opposite side for entry animation
        gsap.set(node, { x: -100 * direction });

        // Animate in
        gsap.to(node, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power1.out',
        });
      },
    });
  };

  return (
    <div className="services-page">
      {/* Header */}
      <div className="services-header1">
        <h1>SERVICES</h1>
        <p><Link to="/" className="plain-link">Home</Link> &gt; Services</p>
      </div>

      {/* Section Title */}
      <div className="services-title">
        <h2><span className='highlight'>Services</span> We Provide</h2>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        <div className="service-card">
          <FaUsers className="icon" />
          <h3>Family Financial Planning</h3>
          <p>Family financial planning involves setting shared life goals, evaluating household income and resources, and creating a strategy to manage savings, investments, and expenses for long-term financial stability and future security.</p>
        </div>
        <div className="service-card">
          <FaChartLine className="icon" />
          <h3>SIP/SWP Planning</h3>
          <p>SIP (Systematic Investment Plan) involves investing fixed amounts regularly in mutual funds. SWP (Systematic Withdrawal Plan) enables periodic withdrawals, offering liquidity and income post-retirement or during financial needs.</p>
        </div>
        <div className="service-card">
          <FaPiggyBank className="icon" />
          <h3>Alternate Investments</h3>
          <p>Alternate investments are non-traditional assets like real estate, hedge funds, private equity, or commodities. They offer diversification, potential high returns, and hedge against market volatility, but carry higher risks.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-section">
        <p className="subtitle">— Client Testimonials</p>
        <h2>The Impact of Our Work: <span className='highlight'>Client Testimonials</span></h2>

        <div className="testimonial-slider">
          <button onClick={handlePrev}><FaArrowLeft /></button>

          <div className="testimonial-box" ref={testimonialRef}>
            <div className="stars">★★★★★</div>
            <p className="comment">"{testimonials[currentIndex].comment}"</p>
            <div className="author">
              <div className="initial-avatar">{testimonials[currentIndex].initial}</div>
              <div>
                <strong>{testimonials[currentIndex].name}</strong><br />
                {testimonials[currentIndex].title}
              </div>
            </div>
          </div>

          <button onClick={handleNext}><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Services;
