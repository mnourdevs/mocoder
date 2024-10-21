"use client"
import { data } from "@/utils/constants/data";
import { Typewriter } from "react-simple-typewriter";

const Typist = () => {
  return (
    <Typewriter
      words={data.home.job}
      cursor={true}
      cursorBlinking={true}
      loop={false}
    />
  );
};

export default Typist;
