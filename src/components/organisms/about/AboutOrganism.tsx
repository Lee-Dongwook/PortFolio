"use client";
import React, { useEffect, useRef } from "react";
import MainHeroImage from "@/assets/img/MainHeroImage.png";
import { gsap } from "gsap";

const AboutOrganism = () => {
  const cardWidth = 500;
  const cardHeight = 200;
  const offset = 50;

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const arrow12Ref = useRef<SVGLineElement>(null);
  const arrow13Ref = useRef<SVGLineElement>(null);
  const arrow14Ref = useRef<SVGLineElement>(null);
  const arrow15Ref = useRef<SVGLineElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      card1Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
    );

    timeline.fromTo(
      arrow12Ref.current,
      { opacity: 0, drawSVG: "0%" },
      { opacity: 1, drawSVG: "100%", duration: 0.7, ease: "power3.out" },
      "+=0.2"
    );

    timeline.fromTo(
      card2Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
    );

    timeline.fromTo(
      arrow13Ref.current,
      { opacity: 0, drawSVG: "0%" },
      { opacity: 1, drawSVG: "100%", duration: 0.7, ease: "power3.out" },
      "+=0.2"
    );

    timeline.fromTo(
      card3Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
    );

    timeline.fromTo(
      arrow14Ref.current,
      { opacity: 0, drawSVG: "0%" },
      { opacity: 1, drawSVG: "100%", duration: 0.7, ease: "power3.out" },
      "+=0.2"
    );

    timeline.fromTo(
      card4Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
    );

    timeline.fromTo(
      arrow15Ref.current,
      { opacity: 0, drawSVG: "0%" },
      { opacity: 1, drawSVG: "100%", duration: 0.7, ease: "power3.out" },
      "+=0.2"
    );

    timeline.fromTo(
      card5Ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${MainHeroImage.src})` }}
    >
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="bg-black/80 w-full h-5/6 flex items-center justify-center relative">
        {/* SVG로 화살표 연결 */}
        <svg
          className="absolute w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 화살표 선 */}
          <line
            ref={arrow12Ref}
            x1="50%"
            y1="50%"
            x2={`calc(50% - ${cardWidth / 2 + offset}px)`}
            y2={`calc(50% - ${cardHeight / 2 + offset}px)`}
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <line
            ref={arrow13Ref}
            x1="50%"
            y1="50%"
            x2={`calc(50% + ${cardWidth / 2 + offset}px)`}
            y2={`calc(50% - ${cardHeight / 2 + offset}px)`}
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <line
            ref={arrow14Ref}
            x1="50%"
            y1="50%"
            x2={`calc(50% - ${cardWidth / 2 + offset}px)`}
            y2={`calc(50% + ${cardHeight / 2 + offset}px)`}
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <line
            ref={arrow15Ref}
            x1="50%"
            y1="50%"
            x2={`calc(50% + ${cardWidth / 2 + offset}px)`}
            y2={`calc(50% + ${cardHeight / 2 + offset}px)`}
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* 화살표 머리 */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="white" />
            </marker>
          </defs>
        </svg>

        {/* 중앙 카드 */}
        <div
          ref={card1Ref}
          className="absolute bg-gray-700 text-white flex items-center justify-center text-xl font-bold rounded-md shadow-lg"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          1
        </div>

        {/* 좌측 상단 2 */}
        <div
          ref={card2Ref}
          className="absolute bg-gray-700 text-white flex items-center justify-center text-xl font-bold rounded-md shadow-lg"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            left: `calc(50% - ${cardWidth / 2 + offset}px)`,
            top: `calc(50% - ${cardHeight / 2 + offset}px)`,
            transform: "translate(-100%, -100%)",
          }}
        >
          2
        </div>

        {/* 우측 상단 3 */}
        <div
          ref={card3Ref}
          className="absolute bg-gray-700 text-white flex items-center justify-center text-xl font-bold rounded-md shadow-lg"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            left: `calc(50% + ${cardWidth / 2 + offset}px)`,
            top: `calc(50% - ${cardHeight / 2 + offset}px)`,
            transform: "translate(0, -100%)",
          }}
        >
          3
        </div>

        {/* 좌측 하단 4 */}
        <div
          ref={card4Ref}
          className="absolute bg-gray-700 text-white flex items-center justify-center text-xl font-bold rounded-md shadow-lg"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            left: `calc(50% - ${cardWidth / 2 + offset}px)`,
            top: `calc(50% + ${cardHeight / 2 + offset}px)`,
            transform: "translate(-100%, 0%)",
          }}
        >
          4
        </div>

        {/* 우측 하단 5 */}
        <div
          ref={card5Ref}
          className="absolute bg-gray-700 text-white flex items-center justify-center text-xl font-bold rounded-md shadow-lg"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            left: `calc(50% + ${cardWidth / 2 + offset}px)`,
            top: `calc(50% + ${cardHeight / 2 + offset}px)`,
            transform: "translate(0, 0%)",
          }}
        >
          5
        </div>
      </div>
    </section>
  );
};

export default AboutOrganism;
