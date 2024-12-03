import { useState } from "react";
import ProjectCard from "./ProjectCard";
import AchievementCard from "./AchievementCard";

export default function Achievements() {
  const [expand, setExpand] = useState(false);
  const achievements = [
    {
      name: "CSIT Computing Scholarship",
      from: "Centre for Strategic Infocomm Technologies (CSIT)",
      description:
        "The CSIT Computing Scholarship is a highly prestigious award aimed at nurturing young talents in pursuing an education in the tech industry. Under this scholarship, I also attended the CSIT Experiential Journey, which taught invalulable skills such as Cloud Infrastructure and Cybersecurity.",
    },
    {
      name: "MOE Engineering and Tech Programme Scholarship (ETPS)",
      from: "Ministry of Education (MOE)",
      description:
        "ETPS is an award awarded by MOE meant to develop prominent youths who are interested in technology. I am due to attend the ETPS Flagship Workshop in Jan 2025, as well as an industry work attachment in Jun 2025!",
    },
    {
      name: "GeekOut 2024 (2nd Place)",
      from: "GovTech",
      description:
        "GeekOut is an annual bootcamp/hackathon organized by GovTech, targeted at pre-university students. Despite it not being the most techincally challenging hackathon I've been to, the exposure during the camp key to igniting my interest for tech roles in public service!",
    },
    {
      name: "Outstanding Citizen Contributor",
      from: "GovTech",
      description:
        "In 2022, my NCC unit proposed the idea of creating a video game to promote Total Defence to MINDEF. This project became Total Defence Tower Defence, which was then launched in 2023. To thank us for our contributions, MINDEF nominated us for the Award which we eventually won!",
    },
    {
      name: "iNTUition v9.0 (FinTech Track Winner)",
      from: "IEEE NTU Student Branch",
      description:
        "iNTUition is a hackathon targeted at University students. Despite being in Secondary 4, we managed to win the FinTech track in 2023, creating a node-based payment network that provided high throughput at resiliency. This would be one of my best performances in a hackathon!",
    },
  ];
  return (
    <>
      <div
        id="achievements"
        className="flex flex-col justify-center items-center w-5/6 h-svh snap-start shrink-0"
      >
        <div className="flex flex-col justify-center items-center w-full h-5/6">
          <h1 className="text-5xl font-bold text-center text-red-900">
            Achievements
          </h1>
          <p className="pt-4 text-xl text-center">
            Here are some achievments I'm proud of! As such it is truncated from
            the list over on{" "}
            <a
              className="text-red-900 underline"
              href="https://www.linkedin.com/in/wongyueheng/"
            >
              Linkedin
            </a>
            .
          </p>
          {/* TODO: ADD TRANSITIONS */}
          <div className="flex flex-row items-center py-4 my-4">
            <div className="grid grid-cols-2 gap-2 w-full transition-all">
              {achievements.map((achievement, i) => (
                <AchievementCard
                  name={achievement.name}
                  from={achievement.from}
                  description={achievement.description}
                  visible={expand || i < 2}
                />
              ))}
            </div>
          </div>
          <button className="px-8 py-4 mt-4 text-xl font-bold bg-red-50 rounded-xl hover:bg-red-100" onClick={() => setExpand(!expand)}>
            <div className="flex flex-row">
              <svg
                className="w-[24px] fill-red-950"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {
                    expand?
                    <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
                    :
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                }
              </svg>
              <p className="pl-4 text-xl font-bold text-red-950">{expand ? "See Less" : "See More"}</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
