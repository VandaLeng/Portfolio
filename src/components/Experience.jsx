import ExperienceCard from "./ui/ExperienceCard";

import {default as BakToukLogo} from "../assets/BakToukLogo.png";
import {default as PNC} from "../assets/PNC.png"
 
const Experience = () => {
    var pncSkills = [
    "Collaborated with the development team to build responsive and secure web applications.",
    "Developed and maintained clean, efficient, and scalable front-end code using modern web standards.",
    "Integrated security best practices into web development workflows and deployment pipelines.",
    "Used debugging tools and performed regular code reviews to identify and fix front-end vulnerabilities.",
    "Contributed to improving UI/UX designs, ensuring accessibility and responsiveness across devices.",
    "Managed website performance, optimized loading speeds, and ensured cross-browser compatibility."
  ];

      var baktoukSkills = [
      "Student learning about Society subject.",
      "Studying social values, culture, and human behavior."
    ];
     return (
    <div
      id="experience"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center  md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Experience & Education
      </h1>
      <ExperienceCard
        logo= {PNC}
        name="PNC"
        job="Web developer"
        duration="Sep. 2024 - Present"
        skills={pncSkills}
      />
            {/* Experience Cards */}
      <ExperienceCard
        logo={BakToukLogo}
        name="BakTouk"
        job="Society"
        duration="Jan. 2018 - 2023"
        skills={baktoukSkills}
      />
    </div>
  );
};

export default Experience;
