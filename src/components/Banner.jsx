import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Banner.css';
import newProfileImg from '../assets/newProfile.png';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from('.banner-left h3, .banner-left h1, .banner-left p, .banner-buttons', {
      opacity: 1,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.banner-section',
        start: 'top center'
      }
    });

    gsap.fromTo('.profile-container img', 
      { scale: 0.9, y: -20, opacity: 1 },
      { scale: 1, y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: {
        trigger: '.banner-section',
        start: 'top center'
      }}
    );

    gsap.to('.profile-container img', {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: 'sine.inOut'
    });

    gsap.to('.scroll-tags span', {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: 'linear'
    });

    gsap.to('.scroll-track', {
      x: "-50%",
      duration: 20,
      ease: "linear",
      repeat: -1
    });
  }, []);

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918277608357', '_blank');
  };

  return (
    <>
      <section className="banner-section" id="home">
        <div className="banner-container">
          <div className="banner-left">
            <h3>Hello!</h3>
            <h1><span className='highlight3'>We are</span> <span className="highlight">MEDAL INVESTMENTS</span></h1>
            <p className="tagline">EMI for the Future</p>
            <p>We provide personalized investment consultation according to your life needs.</p>
            <div className="banner-buttons">
              <button className="about-btn" onClick={handleAboutClick}>About Us</button>
              <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                <FaWhatsapp /> WhatsApp
              </button>
            </div>
          </div>
          <div className="banner-right">
            <div className="profile-container">
              <img src={newProfileImg} alt="Founder" />
            </div>
          </div>
        </div>
      </section>

      <div className="scrolling-categories">
        <div className="scroll-track">
          <div className="category-item">Financial Planning <span className="category-icon">✦</span></div>
          <div className="category-item">Mutual Funds <span className="category-icon">✦</span></div>
          <div className="category-item">Alternate Investments <span className="category-icon">✦</span></div>
          <div className="category-item">SWP Planning <span className="category-icon">✦</span></div>
          <div className="category-item">SIP Planning <span className="category-icon">✦</span></div>
          <div className="category-item">Financial Planning <span className="category-icon">✦</span></div>
          <div className="category-item">Mutual Funds <span className="category-icon">✦</span></div>
          <div className="category-item">Alternate Investments <span className="category-icon">✦</span></div>
          <div className="category-item">SWP Planning <span className="category-icon">✦</span></div>
          <div className="category-item">SIP Planning <span className="category-icon">✦</span></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
