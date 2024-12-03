import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const projects = [
    {
      name: "CarbonAware",
      subtitle: "Made with Hiuk Ming Hong and Zhou Jing for CODE_EXP 2024",
      description: "OCR, LLM-based carbon footprint tracker, on AWS.",
      writeup:
      "Want to do your part for the environment, but think it's too troublesome? CarbonAware uses OCR technology to instantly log your purchases from receipts, making tracking your carbon footprint hassle-free. For unrecognized items, a LLM is used to give a smart estimate of its carbon emissions. Built on AWS and Android Studio.",
      link: "https://github.com/Walnit/CarbonAware",
      icon: "projects/carbonaware_icon.png",
      image: "projects/carbonaware.png",
    },
    {
      name: "FriendZone",
      subtitle: "Made with Hiuk Ming Hong, Tran Duc Nam and Raghav Kumar for iNTUition v10.0",
      description: "Anti-fake-friend-call-scam protection via Speech-to-Text and GPT-4.",
      writeup: "In 2023, 'fake friend' call scams have risen by 225%, with many of those whom we know having been contacted by these scammers first friend. To combat this rising problem, we used Twilio to emulate a call screener, using Vosk and GPT-4 to analyse the callers speech for signs of such a scam.",
      link: "https://github.com/Walnit/FriendZone",
      icon: "projects/friendzone_icon.png",
      image: "projects/friendzone.png",
    },
    {
      name: "Diskut",
      subtitle: "Made with Zhou Jing and Tan Junheng for NUSH Hack 2023.",
      description: "Catalysing conversations between students, teachers, and staff.",
      writeup: "Diskut is a gamified platform that facilitates physical interaction between users. Via NFC and Bluetooth, tapping phones together will allow users to earn points, as well as give common topics between the two users.",
      link: "https://devpost.com/software/diskut",
      icon: "projects/diskut_icon.png",
      image: "projects/diskut.png",
    },
    {
      name: "KnockKnock",
      subtitle: "NUSH Android App Development (CS4131) Project",
      description: "An end-to-end encrypted chat messaging app for Android.",
      writeup:
        "KnockKnock is a chat messaging app for Android phones. Developed using Kotlin on Android Studio, it utilizes the Signal protocol to securely encrypt messages in an end-to-end fashion. KnockKnock also features the ability to hide certain contacts, which can be accessed either by a rhythm-based 'Knock Code', or a PIN code.",
      link: "https://github.com/Walnit/KnockKnock",
      icon: "projects/knockknock_icon.png",
      image: "projects/knockknock.png",
    },
    {
      name: "OskiHealth",
      subtitle: "Made with Hiuk Ming Hong for OskiHacks 2023",
      description: "AI-powered mental health tracking app.",
      writeup:
      "OskiHealth has three main features - an AI chatbot, a messaging platform with sentiment analysis built in, and a statistics tracking page based on the data from the messaging platform. The chatbot was powered by OpenAI's GPT 3.5. ",
      link: "https://github.com/Walnit/OskiHealth",
      icon: "projects/oskihealth_icon.png",
      image: "projects/oskihealth.png",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="flex flex-col justify-center items-center w-5/6 h-svh snap-start shrink-0"
      >
        <div className="w-full h-5/6">
          <h1 className="text-5xl font-bold text-center text-red-900">
            Projects
          </h1>
          <div className="flex flex-row items-center my-4 h-5/6">
            <div className="flex overflow-auto flex-col gap-2 pr-1 w-1/3 h-full">
              {projects.map((project, i) => (
                <ProjectCard
                  title={project.name}
                  desc={project.description}
                  img={project.icon}
                  selected={selectedProject == i}
                  onClick={() => setSelectedProject(i)}
                />
              ))}
            </div>
            <div className="p-8 w-2/3 h-full">
              <h1 className="text-3xl font-bold">
                {projects[selectedProject].name}
              </h1>
              <h2 className="text-xl font-light">
                {projects[selectedProject].subtitle}
              </h2>
              <img
                src={projects[selectedProject].image}
                className="py-4 h-80"
              ></img>
              <p className="text-xl">{projects[selectedProject].writeup}</p>
              <a href={projects[selectedProject].link} target="_blank">
              <button className="px-8 py-4 mt-4 text-xl font-bold bg-red-50 rounded-xl">
                <div className="flex flex-row">
                  <svg
                    className="w-[24px] fill-red-950"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                  </svg>
                  <p className="pl-4 text-xl font-bold text-red-950">See More</p>
                </div>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
