import Searchbox from "./Searchbox";

export default function Hero() {
  return (
    <>
      <div id="hero" className="flex flex-col justify-center w-5/6 h-svh snap-start shrink-0">
        <div className="space-y-1 h-2/3 text-3xl md:text-5xl">
          <h1>Hi! I'm Yue Heng.</h1>
          <h1 className="font-bold text-red-900">How can I help you today?</h1>
          <div className="pt-6"></div>
          <Searchbox />
        </div>
        <div className="flex inset-x-0 bottom-4 flex-col items-center">
          <a href="#about" className="flex flex-col items-center">
            <p className="text-center">Read More</p>
            <svg
              className="w-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.96788 9.11619L3.0321 10.8838L12 15.6315Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
