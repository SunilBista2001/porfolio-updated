/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import MyImage from "../../public/img/man.jpeg";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FileIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="me"
      className="w-full min-h-screen flex sm:flex-row flex-col justify-center items-center gap-y-12 sm:gap-x-16 md:gap-x-20 lg:gap-x-24 "
    >
      <Image
        src={MyImage}
        alt="hero"
        className="max-w-xs md:max-w-sm md:h-[24rem] object-fill rounded-full"
        priority
      />
      <div className="space-y-3 w-full text-center sm:text-start sm:w-1/5">
        <h1 className="text-3xl sm:text-4xl font-medium ">
          Hi, I'm Sunil <span className="animate-bounce">👋🏻</span>
        </h1>
        <div className="w-full flex justify-center sm:justify-start text-xl font-medium  gap-x-1 whitespace-pre ">
          and I'm{" "}
          <p className="text-red-500">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "Web Developer",
                  "React Developer",
                  "UI Designer",
                  "Freelancer",
                  "Frontend Developer",
                  "Backend Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="w-full flex items-center justify-center sm:justify-start gap-x-4">
          <Link href={"https://github.com/SunilBista2001"} target="_blank">
            <Button className="outline">
              <GithubIcon size={"icon"} className="mr-2" />
              Github
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
