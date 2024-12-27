import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


interface CounterUpProps {
  initialValue?: number;
  count: number;
  duration?: number;
};

const CounterUp = ({ initialValue = 0 , count, duration = 2 }: CounterUpProps) => {
  const numberRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const numberElement = numberRef.current as HTMLElement;

    if (numberElement) {
      const initialIntValue = Math.floor(initialValue);
      const targetIntValue = Math.floor(count);

      // Set the initial value before starting the animation
      numberElement.innerText = initialIntValue.toString();

      // GSAP animation
      gsap.fromTo(
        numberElement,
        {
          innerText: initialIntValue.toString(),
        },
        {
          innerText: targetIntValue.toString(),
          duration: duration,
          roundProps: "innerText", // Ensure the value rounds up smoothly during the animation
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: numberElement, // Adjust this to your use case
            start: "top 80%",
            end: "bottom top",
            toggleActions: "restart none none reverse",
            markers: false,
          },
        }
      );
    }
  }, [initialValue, count, duration]);

  return <span className="odometer" ref={numberRef}></span>;
};

export default CounterUp;
