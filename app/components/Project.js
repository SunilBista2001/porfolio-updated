import React from "react";
import NetflixBanner from "../../public/img/netflix.png";
import EcomBanner from "../../public/img/ecom.png";
import TravelBanner from "../../public/img/travel.jpg";
import InstaBanner from "../../public/img/insta.gif";
import Image from "next/image";

const projects = [
  {
    name: "Netflix Clone",
    image: NetflixBanner,
    description: "Built with Nextjs, NextAuth, MongoDB and NodeJs.",
  },
  {
    name: "Ecommerce Website",
    image: EcomBanner,
    description: "Built with Nextjs, ExpressJs, and MongoDB.",
  },
  {
    name: "Travel Website",
    image: TravelBanner,
    description: "Built with ReactVite, ExpressJs, MonogoDB and TailwindCSS.",
  },
  {
    name: "Instagram Clone",
    image: InstaBanner,
    description:
      "Built with NextJs, NextAuth, Reocil, Firebase and TailwindCSS.",
  },
];

const Project = () => {
  return (
    <div id="projects" className="my-10">
      <h1 className="text-center text-3xl">Projects</h1>
      <p className="text-center text-base text-gray-500 px-4 sm:px-0">
        Here are some of the projects I have worked on:
      </p>
      <div className="flex w-full justify-center">
        <div className="max-w-6xl grid gap-x-8 gap-y-6 my-8 grid-cols-1  sm:grid-cols-3 md:grid-cols-4 px-4 sm:px-0  ">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-4 max-w-xs border rounded-md cursor-pointer hover:scale-110 ease-in duration-150"
            >
              <Image
                src={project.image}
                alt="netflix"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="text-center mt-1">
                <h1 className="text-lg font-bold">{project.name}</h1>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
