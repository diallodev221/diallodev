import {useEffect} from 'react'


const BacktoTop = () => {

useEffect(() => {
  // Toggle light/dark theme
  const toggleTheme = () => {
    const body = document.body;
    const switchElement = document.querySelector(".switch");
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      switchElement?.classList.remove("switched");
    } else {
      body.classList.add("light");
      switchElement?.classList.add("switched");
    }
  };

  const switchElement = document.querySelector<HTMLDivElement>(".switch");
  switchElement?.addEventListener("click", toggleTheme);

  // Handle progress bar and scrolling
  const path = document.querySelector<SVGPathElement>(".progress-wrap path");
  if (path) {
    const pathLength = path.getTotalLength();

    // Initialize progress bar
    // path.style.transition = path.style.WebkitTransition = "none";
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    path.getBoundingClientRect(); // Trigger layout

    // path.style.transition = path.style.WebkitTransition =
    //   "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollTop / (docHeight - windowHeight);
      const drawLength = pathLength * (1 - scrollPercentage);
      path.style.strokeDashoffset = `${drawLength}`;
    };

    // Update progress bar on scroll
    window.addEventListener("scroll", updateProgress);
    updateProgress();

    // Handle progress bar visibility
    const handleScroll = () => {
      const progressWrap =
        document.querySelector<HTMLDivElement>(".progress-wrap");
      if (window.scrollY > 50) {
        progressWrap?.classList.add("active-progress");
      } else {
        progressWrap?.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scroll to top on click
    const progressWrap =
      document.querySelector<HTMLDivElement>(".progress-wrap");
    progressWrap?.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Cleanup event listeners
    return () => {
      switchElement?.removeEventListener("click", toggleTheme);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", handleScroll);
    };
  }
}, []);
  return (
    <div className="progress-wrap" id="scrollUp">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
};

export default BacktoTop;
