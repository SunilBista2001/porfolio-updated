import React from "react";
import ReactSkills from "../../public/img/react.svg";
import NextSkills from "../../public/img/nextjs.svg";
import NodeSkills from "../../public/img/nodejs.png";
import ExpressSkills from "../../public/img/express.svg";
import MongoDBSkills from "../../public/img/mongo.png";
import TailwindSkills from "../../public/img/tailwind.svg";
import JavaScriptSkills from "../../public/img/js.svg";
import HtmlSkills from "../../public/img/html.svg";
import CssSkills from "../../public/img/css.svg";
import GitSkills from "../../public/img/git.svg";
import ApiSkills from "../../public/img/api.svg";
import Image from "next/image";

const skills = [
  {
    name: "ReactJs",
    image: ReactSkills,
    type: "Proficient",
  },
  {
    name: "NextJs",
    image: NextSkills,
    type: "Intermediate",
  },
  {
    name: "NodeJs",
    image: NodeSkills,
    type: "Beginner",
  },
  {
    name: "ExpressJs",
    image: ExpressSkills,
    type: "Beginner",
  },
  {
    name: "MongoDB",
    image: MongoDBSkills,
    type: "Beginner",
  },
  {
    name: "Tailwind",
    image: TailwindSkills,
    type: "Advanced",
  },
  {
    name: "JavaScript",
    image: JavaScriptSkills,
    type: "Advanced",
  },
  {
    name: "Html",
    image: HtmlSkills,
    type: "Proficient",
  },
  {
    name: "Css",
    image: CssSkills,
    type: "Advanced",
  },
  {
    name: "Git",
    image: GitSkills,
    type: "Intermediate",
  },
  {
    name: "Api",
    image: ApiSkills,
    type: "Advanced",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="sm:my-0 my-5">
      <h1 className="text-3xl text-center">Skills</h1>
      <p className="text-center text-base text-gray-500 mb-4 px-4 sm:px-0">
        Here are some of the technologies I have worked with:
      </p>
      <div className="w-full flex items-center justify-center ">
        <div className="max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-24 gap-y-8   ">
          {skills.map((skill) => (
            <div className="flex flex-col items-center" key={skill.name}>
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 object-fill border-4 border-purple-800 rounded-full p-1"
              />
              <h2 className="text-xl font-medium">{skill.name}</h2>
              <span className="text-red-500 text-lg font-normal">
                {skill.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
