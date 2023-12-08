import React from "react";
import Company1 from "../../public/img/acid.png";
import Company2 from "../../public/img/tech.jpg";
import Image from "next/image";

const experinces = [
  {
    id: 1,
    company: "Acid Integration",
    role: "Junior React Developer",
    date: "Nov 2022 - Dec 2023",
    description:
      "I worked with Acid Integration, contributing to the design and development of a social media application tailored for football enthusiasts. This project facilitated communication among players, coaches, clubs, and agents, allowing coaches and clubs to assign games, events, and other tasks to the players.",
    image: Company1,
  },
  {
    id: 2,
    company: "21st Tech",
    role: "React Developer | Internship",
    date: "Aug 2022 - Nov 2022",
    description:
      "I worked with Acid Integration 21st Tech, as their React developer as internship, focusing on the frontend application and its seamless integration with the admin dashboard. My primary responsibilities revolved around skillfully managing API integrations.",
    image: Company2,
  },
];

const Experience = () => {
  return (
    <div id="experience" className="my-8">
      <h1 className="text-center text-3xl my-8">Experience</h1>

      <div className="max-w-6xl flex sm:flex-row flex-col justify-between mx-auto gap-x-6 px-6 sm:px-0">
        {experinces.map((experince) => (
          <div
            key={experince.id}
            className="flex sm:flex-row flex-col items-center justify-between max-w-xl gap-x-14 shadow-lg rounded-md px-6 py-8 hover:scale-105 ease-in duration-200 cursor-pointer"
          >
            <div className="space-y-3 whitespace-pre flex flex-col items-center">
              <Image
                src={experince.image}
                alt={experince.company}
                width={100}
                height={100}
                className="rounded-full bg-green-600"
              />
              <div>
                <h2 className="text-base font-medium text-center">
                  {experince.company}
                </h2>
                <p className="text-xs text-gray-500">{experince.date}</p>
              </div>
            </div>
            <div className="space-y-2 mt-2 sm:mt-0">
              <h1 className="text-xl font-medium sm:text-start text-center">
                {experince.role}
              </h1>
              <p className="text-sm text-gray-600">{experince.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
