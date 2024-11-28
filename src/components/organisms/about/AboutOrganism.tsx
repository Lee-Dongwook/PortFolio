import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutOrganism = () => {
  return (
    <>
      <section className="h-screen flex items-center pt-6 pb-8 mb-0 md:pb-12 md:py-20 lg:py-32 space-y-6">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src=""
            alt=""
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
          />
          <h1 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
            Lee DongWook
          </h1>
          <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
            Frontend Developer
          </h3>
          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <Link
              href={"https://github.com/Lee-DongWook"}
              target="_blank"
              rel="noopener noreferrer"
            ></Link>
            <Link href={"/contact"} rel="noreferrer"></Link>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"></div>
      </section>
    </>
  );
};

export default AboutOrganism;
