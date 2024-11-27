"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MainHeroImage from "@/assets/img/MainHeroImage.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const MainHeroOrganism = () => {
  const router = useRouter();

  const cardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [, setIsVisible] = useState(true);

  useEffect(() => {
    const card = cardRef.current;
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;
    const button = buttonRef.current;

    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (heading) {
      gsap.fromTo(
        heading,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }

    if (subHeading) {
      gsap.fromTo(
        subHeading,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 1 }
      );
    }

    if (button) {
      gsap.fromTo(
        button,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 1.5 }
      );
    }
  }, []);

  const handleMoreClick = () => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        router.push("/about");
      },
    });

    timeline
      .to(buttonRef.current, { opacity: 0, scale: 0.8, duration: 0.5 })
      .to(
        subHeadingRef.current,
        { opacity: 0, x: 50, duration: 0.5, delay: 0.3 },
        "<"
      )
      .to(
        headingRef.current,
        { opacity: 0, x: -50, duration: 0.5, delay: 0.6 },
        "<"
      )
      .to(
        cardRef.current,
        { opacity: 0, y: -50, duration: 0.5, delay: 0.9 },
        "<"
      );
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${MainHeroImage.src})` }}
    >
      <div className="absolute inset-0 bg-white/50"></div>
      <div
        ref={cardRef}
        className="bg-black/80 w-1/2 h-1/2 flex flex-col items-center justify-center"
      >
        <h1 ref={headingRef} className="text-5xl text-white">
          안녕하세요 👋 <span className="ml-1 font-bold mr-1">이동욱</span>
          입니다.
        </h1>
        <h3 ref={subHeadingRef} className="text-2xl text-white mt-10">
          <span className="text-green-500">향상된 사용자 경험 제공</span>을
          목표하는 1년차 프론트엔드 개발자입니다!
        </h3>
        <button
          ref={buttonRef}
          className="mt-10 bg-blue-700/90 text-white w-52 h-14 font-bold rounded-lg"
          onClick={handleMoreClick}
        >
          더보기
        </button>
      </div>
    </section>
  );
};

export default MainHeroOrganism;
