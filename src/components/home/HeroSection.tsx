import React from "react";
import Container from "../common/Container";
import Microsoft from "@/assets/images/clients/microsoft.svg";
import Aribnb from "@/assets/images/clients/airbnb.svg";
import Google from "@/assets/images/clients/google.svg";
import GoogleCloud from "@/assets/images/clients/google-cloud.svg";
import Netflix from "@/assets/images/clients/netflix.svg";
import Ge from "@/assets/images/clients/ge.svg";
import Image from "next/image";
import Link from "next/link";
import { APP_ROUTES } from "@/lib/utils";
const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h5 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              {/* Shaping a world with{" "} */}
              <span className="text-purple-800">EDUCA</span> International{" "}
              <span className="text-primary dark:text-white">School.</span>
            </h5>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              incidunt nam itaque sed eius modi error totam sit illum. Voluptas
              doloribus asperiores quaerat aperiam. Quidem harum omnis beatae
              ipsum soluta!
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Link
                href={`/${APP_ROUTES.LOGIN}`}
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </Link>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-300 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The lowest price
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The fastest on the market
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                  The most loved
                </h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={Microsoft}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={Aribnb}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={Google}
                className="h-9 w-auto m-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={Ge}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={Netflix}
                className="h-8 w-auto m-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <Image
                src={GoogleCloud}
                className="h-12 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
