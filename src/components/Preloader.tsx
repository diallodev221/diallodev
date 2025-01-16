import { useEffect, useRef } from "react";
import gsap from "gsap";
const Preloader = () => {
  const svgRef = useRef(null);
  // const svgTextRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const svgText = document.querySelector(
      ".hero-section .intro_text svg text"
    );
    const tl = gsap.timeline({
      onComplete: () => startStrokeAnimation(svgText),
    });

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut",
    });
    tl.to(".preloader", {
      y: -1500,
    }).to(".preloader", {
      zIndex: -1,
      display: "none",
    });
  }, []);

  const startStrokeAnimation = (svgText: Element | null) => {
    if (svgText) svgText.classList.add("animate-stroke");
  };

  return (
    <div className="preloader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path ref={svgRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="preloader-heading">
        <div className="load-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
