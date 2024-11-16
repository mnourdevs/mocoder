"use client"
import { data } from "@/utils/constants/data";
import { Typewriter } from "react-simple-typewriter";

const Typist = () => {
  return (
    <div className="w-full">
      <Typewriter
        words={data.home.job}
        cursor={true}
        cursorBlinking={true}
        loop={false}
      />
    </div>
  );
};

export default Typist;
