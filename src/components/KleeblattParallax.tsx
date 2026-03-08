import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Generate random scatter values for a single piece
function randomScatter() {
  const angle = Math.random() * Math.PI * 2;
  const distance = 180 + Math.random() * 160;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    rotation: (Math.random() - 0.5) * 320,
    scale: 2.0 + Math.random() * 1.0,
  };
}

export default function KleeblattParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const ctx = gsap.context(() => {
      const pieces = svgRef.current!.querySelectorAll("[data-piece]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current!,
          start: "top top",
          end: "80% bottom",
          scrub: 1.5,
          pin: ".kleeblatt-pin",
          pinSpacing: false,
        },
      });

      pieces.forEach((piece, i) => {
        const cfg = randomScatter();
        tl.fromTo(
          piece,
          {
            x: cfg.x,
            y: cfg.y,
            rotation: cfg.rotation,
            scale: cfg.scale,
            opacity: 0.15,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
            duration: 1,
          },
          i * 0.05,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* Pinned clover container */}
      <div className="kleeblatt-pin h-screen w-full flex items-center justify-center pointer-events-none">
        <svg
          ref={svgRef}
          width="184"
          height="275"
          viewBox="0 0 184 275"
          className="w-[40vw] max-w-[500px]"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="p_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,200.297083,-200.297083,0,119.33125,70.71625)">
              <stop offset="0" stopColor="#82c98f" />
              <stop offset="1" stopColor="#088252" />
            </linearGradient>
            <linearGradient id="p_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(66.0225,0,0,66.0225,28.19375,36.004167)">
              <stop offset="0" stopColor="#82c98f" />
              <stop offset="1" stopColor="#088252" />
            </linearGradient>
            <linearGradient id="p_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,65.555417,-65.555417,0,39.232917,60.22375)">
              <stop offset="0" stopColor="#82c98f" />
              <stop offset="1" stopColor="#088252" />
            </linearGradient>
            <linearGradient id="p_Linear4" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-63.087891,-2.411646,2.411646,-63.087891,135.336109,114.621571)">
              <stop offset="0" stopColor="#82c98f" />
              <stop offset="1" stopColor="#088252" />
            </linearGradient>
            <linearGradient id="p_Linear5" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,64.044167,-64.044167,0,120.126667,23.371667)">
              <stop offset="0" stopColor="#82c98f" />
              <stop offset="1" stopColor="#088252" />
            </linearGradient>
          </defs>

          {/* Shadow stem */}
          <path
            data-piece="0"
            d="M182.083,269.167c0,0 1.25,5.417 -1.25,5.417c-2.5,0.417 -15,0 -25.417,-2.917c-10.417,-2.917 -38.75,-22.917 -52.917,-39.583c-14.167,-16.667 -28.75,-26.667 -37.5,-48.333c-8.75,-21.667 -13.333,-48.333 -10.417,-66.667c1.667,-10.417 10.417,-27.083 13.333,-31.25c2.917,-4.167 6.667,-10 10.417,-11.25c3.75,-1.25 5.417,0.833 4.583,2.917c-0.833,2.083 -10.417,16.667 -12.083,22.083c-1.667,5.417 -8.333,20.833 -6.667,39.167c1.667,18.333 6.25,33.333 13.333,43.75c7.083,10.417 20,25 29.167,35c9.167,10 24.167,25 30,29.167c5.833,4.167 16.667,13.75 22.083,15.417c5.417,1.667 7.5,-1.25 10,0c2.5,1.25 13.333,7.083 13.333,7.083Z"
            fill="#162b17" fillRule="nonzero"
          />
          {/* Shadow leaf: top */}
          <path
            data-piece="1"
            d="M79.583,76.25c0,0 5.833,-6.667 10,-26.25c2.5,-11.25 5.417,-22.917 2.917,-30c-4.167,-10.833 -8.75,-13.333 -15.833,-14.583c-7.083,-1.25 -13.75,-1.667 -13.75,-1.667l-10,16.25l-22.5,-2.917c0,0 -3.333,8.333 -3.333,15.417c0,7.083 3.333,20 10.417,25c7.083,5 19.167,8.75 26.25,10.833c7.083,2.083 15.833,7.917 15.833,7.917Z"
            fill="#162b17" fillRule="nonzero"
          />
          {/* Shadow leaf: left */}
          <path
            data-piece="2"
            d="M76.25,80c0,0 -6.667,-5.833 -26.25,-10.833c-11.25,-2.917 -23.75,-7.083 -30.417,-4.167c-8.333,3.75 -11.667,6.25 -15.417,14.167c-2.917,6.25 -4.167,10.833 -4.167,10.833l17.5,12.083l-3.333,17.083c0,0 11.667,10 18.75,10c7.083,0.417 16.667,-4.583 22.083,-10.833c5.417,-6.25 9.583,-17.5 12.083,-24.167c2.5,-6.25 9.167,-14.167 9.167,-14.167Z"
            fill="#162b17" fillRule="nonzero"
          />
          {/* Shadow leaf: bottom */}
          <path
            data-piece="3"
            d="M78.75,80.833c0,0 -4.583,7.5 -6.667,27.917c-1.25,11.667 -2.5,24.167 0.417,30.833c5,10.417 9.583,12.5 16.667,12.917c7.083,0.417 13.333,0.417 13.333,0.417l7.917,-17.5l22.083,0.417c0,0 2.083,-8.75 1.25,-15.833c-0.833,-7.083 -5.417,-20 -12.917,-24.167c-7.5,-4.167 -19.167,-6.667 -26.25,-7.917c-6.667,-2.083 -15.833,-7.083 -15.833,-7.083Z"
            fill="#162b17" fillRule="nonzero"
          />
          {/* Shadow leaf: right */}
          <path
            data-piece="4"
            d="M81.667,76.667c0,0 6.667,5.833 26.667,10.417c11.25,2.5 23.333,5.833 30.417,3.75c11.25,-3.333 13.333,-7.917 15,-14.583c1.667,-6.667 2.083,-12.917 2.083,-12.917l-15.833,-10.833l3.75,-21.667c0,0 -8.333,-3.333 -15.417,-3.333c-7.083,-0.417 -20.417,2.5 -25.833,9.167c-5.417,6.667 -9.167,17.917 -11.667,25c-2.5,6.667 -9.167,15 -9.167,15Z"
            fill="#162b17" fillRule="nonzero"
          />
          {/* Main stem */}
          <path
            data-piece="5"
            d="M183.333,265.417c0,0 1.25,5.417 -1.25,5.417c-2.5,0.417 -15,0 -25.417,-2.917c-10.417,-2.917 -38.75,-22.917 -52.917,-39.583c-14.167,-16.667 -28.75,-26.667 -37.5,-48.333c-8.75,-21.667 -13.333,-48.333 -10.417,-66.667c1.667,-10.417 10.417,-27.083 13.333,-31.25c2.917,-4.167 6.667,-10 10.417,-11.25c3.75,-1.25 5.417,0.833 4.583,2.917c-0.833,2.083 -10.417,16.667 -12.083,22.083c-1.667,5.417 -8.333,20.833 -6.667,39.167c1.667,18.333 6.25,33.333 13.333,43.75c7.083,10.417 20,25 29.167,35c9.167,10 24.167,25 30,29.167c5.833,4.167 16.667,13.75 22.083,15.417c5.417,1.667 7.5,-1.25 10,0c2.5,1.25 13.333,7.083 13.333,7.083Z"
            fill="url(#p_Linear1)" fillRule="nonzero"
          />
          {/* Back leaf: top */}
          <path
            data-piece="6"
            d="M80.417,72.083c0,0 5.833,-6.667 10,-26.25c2.5,-11.25 5.417,-22.917 2.917,-30c-3.75,-10.833 -8.75,-12.917 -15.833,-14.167c-7.083,-1.25 -13.75,-1.667 -13.75,-1.667l-10,16.25l-22.5,-2.917c0,0 -3.333,8.333 -3.333,15.417c0,7.083 3.333,20 10.417,25c7.083,5 19.167,8.75 26.25,10.833c7.083,2.083 15.833,7.5 15.833,7.5Z"
            fill="url(#p_Linear2)" fillRule="nonzero"
          />
          {/* Back leaf: left */}
          <path
            data-piece="7"
            d="M77.5,75.833c0,0 -6.667,-5.833 -26.25,-10.833c-11.25,-2.917 -23.75,-7.083 -30.417,-4.167c-8.333,3.75 -11.667,6.25 -15.417,14.167c-2.917,6.25 -4.167,10.833 -4.167,10.833l17.5,12.083l-3.333,17.083c0,0 11.667,10 18.75,10c7.083,0.417 16.667,-4.583 22.083,-10.833c5.417,-6.25 9.583,-17.5 12.083,-24.167c2.5,-5.833 9.167,-14.167 9.167,-14.167Z"
            fill="url(#p_Linear3)" fillRule="nonzero"
          />
          {/* Front leaf: bottom */}
          <path
            data-piece="8"
            d="M79.583,77.083c0,0 -4.583,7.5 -6.667,27.917c-1.25,11.667 -2.5,24.167 0.417,30.833c5,10.417 9.583,12.5 16.667,12.917c7.083,0.417 13.333,0.417 13.333,0.417l7.917,-17.5l22.5,0c0,0 2.083,-8.75 1.25,-15.833c-0.833,-7.083 -5.417,-20 -12.917,-24.167c-7.5,-4.167 -19.167,-6.667 -26.25,-7.917c-7.083,-1.667 -16.25,-6.667 -16.25,-6.667Z"
            fill="url(#p_Linear4)" fillRule="nonzero"
          />
          {/* Front leaf: right */}
          <path
            data-piece="9"
            d="M82.917,72.5c0,0 6.667,5.833 26.667,10.417c11.25,2.5 23.333,5.833 30.417,3.75c11.25,-3.333 13.333,-7.917 15,-14.583c1.667,-6.667 2.083,-12.917 2.083,-12.917l-16.25,-10.417l3.75,-21.667c0,0 -8.333,-3.333 -15.417,-3.333c-7.083,-0.417 -20.417,2.5 -25.833,9.167c-5.417,6.667 -9.167,17.917 -11.667,25c-2.5,6.25 -8.75,14.583 -8.75,14.583Z"
            fill="url(#p_Linear5)" fillRule="nonzero"
          />
        </svg>
      </div>

      {/* Scroll content overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-screen" />
        <div className="relative pointer-events-auto">
          <div className="bg-gradient-to-b from-transparent via-background-light/80 to-background-light h-[100vh]" />
        </div>
      </div>
    </div>
  );
}
