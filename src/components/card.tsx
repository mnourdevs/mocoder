import { CardProps } from "@/utils/types";
import Underliner from "./underliner";

export const AboutMeCard = ({ topic, body, color, Icon }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 dark:bg-black dark:text-white dark:border dark:shadow-gray-50 dark:shadow-inner">
      <div className="flex items-center mb-4">
        <Icon className={`text-3xl mr-4`} style={{ color: color }} />
        <div>
          <h3 className={`text-xl font-bold mb-2`}>
            {topic}
            <Underliner color={color} />
          </h3>
          <p className={`text-gray-700 dark:text-gray-400`}>{body}</p>
        </div>
      </div>
    </div>
  );
};
