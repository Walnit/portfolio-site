import SmallTextCard from "./SmallTextCard";

export default function Skills() {
  const languages = [
    { name: "Python", preferred: true },
    { name: "Kotlin" },
    { name: "Java" },
    { name: "JavaScript" },
  ];
  const frameworks = [  
    { name: "React", preferred: true},
    { name: "Tailwind CSS", preferred: true },
    { name: "Flask", preferred: true },
    { name: "PyTorch", preferred: true },
    { name: "Linux", preferred: true },
    { name: "Git", preferred: true },
    { name: "AWS", preferred: true },
    { name: "Godot", preferred: true },
    { name: "Android Studio", preferred: true },
    { name: "GPT-4", preferred: true },
    { name: "Node" },
    { name: "SQL" },
    { name: "Tensorflow" },
    { name: "Numpy" },
    { name: "Pandas" },
    { name: "JavaFX" },
    { name: "Arduino" },
    { name: "RPI" },
    { name: "Networking" },
    { name: "Twilio" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Computer Organization" },
  ];
  
  return (
    <>
      <div
        id="skills"
        className="flex flex-col justify-center items-center w-5/6 h-svh snap-center shrink-0"
      >
        <img className="w-16 md:w-48" src="lightbulb.png" alt="lightbulb" />
        <h1 className="text-3xl font-bold text-red-900 md:text-5xl">Still learning.</h1>
        <p className="pt-4 text-xl text-center">
          I love trying different things out! Here's a list of some things
          I've picked up along the way.
        </p>
        <p className="py-2 text-xl"><span className="px-2 text-red-900">•</span>Preferred<span className="px-2 pl-4 text-red-50">•</span>Additional Skills</p>
        <div className="py-4"></div>
        <div className="flex flex-row flex-wrap gap-2 justify-center py-4">
          {languages.map((info, i) => (
            <SmallTextCard key={i} name={info.name} strong={info.preferred} />
          ))}
        </div>
        <div className="flex overflow-x-scroll flex-row flex-wrap gap-2 justify-center py-4 max-h-1/4">
          {frameworks.map((info, i) => (
            <SmallTextCard key={i} name={info.name} strong={info.preferred} />
          ))}
        </div>
      </div>
    </>
  );
}
