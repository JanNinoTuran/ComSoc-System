import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    image: "/assets/covers/cover1.png",
    titleTop: "Transform Ideas",
    titleBottom: "Into Reality.",
    text: "Book printing services online, track your appointments, and let the Computing Society bring your creative ideas to life.",
  },
  {
    image: "/assets/covers/cover2.png",
    titleTop: "Code. Save.",
    titleBottom: "Deploy.",
    text: "Powered by the Computer Science Department of BISU Bilar Campus, we streamline everything from bookings to receipts in one system.",
  },
  {
    image: "/assets/covers/cover3.png",
    titleTop: "Build Better",
    titleBottom: "Tomorrow.",
    text: "Join a community of creators, developers, and innovators. Explore our sub-organizations and services built for students.",
  },
];

const INTERVAL = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer.current);
  }, [current]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover ${i === current ? "animate-kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-800/40" />
          <div className="absolute inset-0 bg-navy-950/30" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8 lg:px-12">
        <div key={current} className="max-w-2xl animate-fadeIn">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Computing Society · BISU Bilar
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {SLIDES[current].titleTop}
            <br />
            {SLIDES[current].titleBottom}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {SLIDES[current].text}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#signin" className="btn-primary px-8 py-3 text-base">
              Sign In
            </a>
            <a href="#signup" className="btn-outline px-8 py-3 text-base">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="group absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white hover:text-navy-800 sm:inline-flex"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="group absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white hover:text-navy-800 sm:inline-flex"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-brand-blue" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
