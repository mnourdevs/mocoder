import { data } from "@/utils/constants/data";
import { AboutMeCard } from "@/components/card";

const AboutMe = () => {
  const { aboutMe } = data;
  return (
    <div>
      {/* title */}
      <p className="tracking-widest text-center mb-4 text-gray-500 font-bold">
        About Me
      </p>
      {/* cards */}
      <div className="grid md:grid-cols-2 mx-16 gap-6 mb-11">
        {aboutMe.map(({ topic, body, color, Icon }, index) => (
          <AboutMeCard
            key={index}
            topic={topic}
            body={body}
            color={color}
            Icon={Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
