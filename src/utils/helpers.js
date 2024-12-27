import { gsap } from 'gsap';
import $ from 'jquery';

export const homeSlideshowParallax = (slideshowRef) => {
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

export const slideshowSwitch = (slideshowRef, index) => {
  const slideshow = $(slideshowRef.current);
  const slides = slideshow.find('.slides');
  slides.removeClass('is-active');
  slides.eq(index).addClass('is-active');

  // GSAP animation for slide opacity
  gsap.to(slides.eq(index), { opacity: 1, duration: 1 });
};

export const slideshowNext = (slideshowRef, previous, setActiveSlide) => {
  const nextIndex = previous ? 0 : 1; // Example logic
  slideshowSwitch(slideshowRef, nextIndex);
  setActiveSlide(nextIndex);
};
