import Link from "next/link";
import { data } from "@/utils/data";
import ImageHelper from "./imageHelper";

const Navigation = ({ pathname }: { pathname: string }) => {
  const { navigation } = data;
  return navigation.map(({ name, href, src }, index) => (
    <Link href={href} key={index}>
      <div
        className={`${
          pathname === href && "border-0 border-t-2 border-blue-300"
        } flex items-center transition-all p-2 gap-1 hover:text-slate-100 icons hover:bg-black dark:hover:bg-white dark:hover:text-black`}
      >
        <li>{name}</li>
        <span>
          <ImageHelper src={src} alt={`${name}-logo`} />
        </span>
      </div>
    </Link>
  ));
};

export default Navigation;
