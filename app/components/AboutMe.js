import React from "react";
import ProgrammerGif from "../../public/img/programer.gif";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div id="about" className="text-center w-full sm:my-0 my-5">
      <h5 className="">Get To Know</h5>
      <h1 className="text-3xl">About Me</h1>
      <div className="flex sm:flex-row flex-col max-w-6xl items-center justify-between mx-auto px-5 md:px-6 ">
        <Image
          src={ProgrammerGif}
          alt="Programmer Gif"
          width={600}
          height={400}
          className="object-cover"
          priority
        />

        <div className="text-start">
          <p className="text-base mb-5">
            A passionate Full Stack Software Developer 🚀 having a special
            interest in Frontend technologies and experience of building Web
            applications with JavaScript / Reactjs / Nodejs / Expressjs and some
            other cool libraries and frameworks. I am a Computer Science student
            who just graduated from the Tribhuvan University Kathmandu in
            Computer Science Majors. I am a highly skilled professional
            developer who loves to take on the challenges and then solve them.
          </p>
          <Link href={"#contact"}>
            <Button variant="destructive">
              <PhoneCall size={"icon"} className="mr-2" />
              Call Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
