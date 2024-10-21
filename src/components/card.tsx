import Image from "next/image";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { CardProps, ProjectProps } from "@/utils/types";
import Underliner from "./underliner";
import Link from "next/link";

export const ProjectCard = ({
  title,
  imageUrl,
  liveUrl,
  tags,
}: ProjectProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-sky-400">
      {/* Image Container with Overlay */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="View Live Site"
            >
              <LinkOutlined className="w-6 h-6 text-gray-900" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col items-center">
        <h3 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
          {title}
        </h3>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

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
