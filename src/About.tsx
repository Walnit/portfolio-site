export default function About() {
  return (
    <>
      <div
        id="about"
        className="flex flex-row justify-center items-center w-5/6 h-svh snap-start shrink-0"
      >
        <div className="flex flex-col w-1/3">
          <img className="" src="portrait.jpg" alt="portrait" />
          <p className="mt-2 text-xl font-bold text-center text-red-900 opacity-50">
            Vacation at Cameron Highlands, Malaysia (2024)
          </p>
        </div>
        <div className="flex flex-col justify-center p-32 w-2/3">
          <h1 className="py-4 text-5xl font-bold text-center text-red-900">
            That's Me!
          </h1>
          <p className="text-xl text-center">
            I'm a 17-year-old studying at NUS High School of Math and Science.
          </p>
          <p className="text-xl text-center">
            Currently an ExCo member of AppVenture, NUSH's CS Interest Group, as well
            as a Cadet Officer of the National Cadet Corps.
          </p>
          <p className="pt-2 text-xl text-center">
            In my free time, I like to fix up old and broken things, such as laptops and typewriters.
          </p>
        </div>
        {/* <h1 className="text-5xl font-bold text-red-900">Still learning.</h1> */}
        {/* <p className="pt-4 text-3xl text-center md:w-2/3">Time flies, things change. Here's a list of languages or frameworks I've learned along the way.</p> */}
        {/* <div className="py-4"></div> */}
        {/* <LangCard name="Python" desc="Backend" img="python.png"/> */}
      </div>
    </>
  );
}