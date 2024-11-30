import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import $ from 'jquery'; // Use jQuery only when absolutely necessary

const Practice = () => {
  const slideshowRef = useRef(null); // Ref for slideshow element
  const [activeSlide, setActiveSlide] = useState(0); // State to keep track of active slide
  const totalSlides = 3; // Example: total number of slides (adjust as needed)

  useEffect(() => {
    // Initial setup for slideshow parallax effect
    const homeSlideshowParallax = () => {
      const scrollTop = $(window).scrollTop();
      if (scrollTop > window.innerHeight) return;

      const slideshow = $(slideshowRef.current);
      const inner = slideshow.find('.slideshow-inner');
      const newHeight = window.innerHeight - scrollTop / 2;
      const newTop = scrollTop * 0.8;

      inner.css({
        transform: `translateY(${newTop}px)`,
        height: newHeight,
      });
    };

    // Set the parallax effect on scroll
    $(window).on('scroll', homeSlideshowParallax);

    // Cleanup scroll listener when component unmounts
    return () => {
      $(window).off('scroll', homeSlideshowParallax);
    };
  }, []);

  useEffect(() => {
    // Update the slideshow (e.g., switching slides) using GSAP
    const slideshowSwitch = (index) => {
      const slideshow = $(slideshowRef.current);
      const slides = slideshow.find('.slides');
      slides.removeClass('is-active');
      slides.eq(index).addClass('is-active');

      // Use GSAP for animation
      gsap.to(slides.eq(index), { opacity: 1, duration: 1 });
    };

    // Switch to the active slide
    slideshowSwitch(activeSlide);
  }, [activeSlide]);

  const slideshowNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides); // Example: cycling through total slides
  };

  return (
    <div ref={slideshowRef} className="main-content">
      <div className="slideshow">
        <div className="slideshow-inner">
          {/* Your slideshow slides go here */}
          <div className={`slides ${activeSlide === 0 ? 'is-active' : ''}`}>Slide 1</div>
          <div className={`slides ${activeSlide === 1 ? 'is-active' : ''}`}>Slide 2</div>
          <div className={`slides ${activeSlide === 2 ? 'is-active' : ''}`}>Slide 3</div>
        </div>
      </div>
      <button onClick={slideshowNext}>Next Slide</button>
    </div>
  );
};

export default Practice;
