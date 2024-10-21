import { data } from "@/utils/constants/data";
import Link from "next/link";
import ImageHelper from "./imageHelper";
import { ThemeToggler } from "./darkTheme";

const AsideContactMe = () => {
  const { connectSocial } = data;
  //md:top-[calc(50%-(165px/2))]
  return (
    <aside className="fixed left-0 top-0 z-50 flex flex-col bottom-0 items-center justify-center">
      {/* dark mode section */}
      <div className="rounded-full dark:text-white absolute top-6 hover:bg-blue-300 flex items-center justify-center p-2 hover:text-white">
        <ThemeToggler />
      </div>
      {connectSocial.slice(0, 4).map(({ name, href, src }, index) => (
        <Link
          key={index}
          href={href}
          title={`connect on ${name}`}
          target="_blank"
        >
          <span className="flex gap-3 transition-all icons py-1 px-2">
            <ImageHelper src={src} alt={`${name}-logo`} />
          </span>
        </Link>
      ))}
    </aside>
  );
};

export default AsideContactMe;
