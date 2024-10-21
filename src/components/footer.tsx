import Link from "next/link";
import { data } from "@/utils/constants/data";
import ImageHelper from "./imageHelper";

const Footer = () => {
  const { footer } = data;
  return (
    <footer className=" mx-auto w-[calc(100%-50px)]">
      <div className="grid md:grid-cols-3 gap-2 mt-5 dark:text-white ">
        {footer.map(({ name, body, href, src }, index) => (
          <div className="flex ml-8 space-x-4" key={index}>
            {/* image */}
            <Link href={href} key={index}>
              <div className="w-8 h-8">
                <ImageHelper src={src} alt={`${name}-logo`} />
              </div>
              {/*header and text*/}
              <div>
                <h1 className="tracking-wider font-bold">{name}</h1>
                <p className="text-gray-400">{body}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          &copy;2024 mohcoder | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
