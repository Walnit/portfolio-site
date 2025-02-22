import { useState, useEffect } from "react";

function getWindowWidth() {
  const width = window.innerWidth;
  return width;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowWidth(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
