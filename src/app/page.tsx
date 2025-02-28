import Link from "next/link";
import ImageHelper from "@/components/imageHelper";
import Button from "@/components/button";
import { SlideRight } from "@/components/slide";
import software from "../../public/images/web-development(1).png";
import { data } from "@/utils/constants/data";
import Underliner from "@/components/underliner";
import Typist from "@/components/typewriter";

export default function Home() {
  const { name } = data.home;
  return (
    <main>
      {/* introduction section */}
      <SlideRight>
        <section className="flex justify-center items-center w-full md:mt-10 p-10 md:p-0">
          {/* introduction-text */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-xl w-full">
            <div className="mb-3 md:mb-0 w-full basis-1/2 space-y-5">
              <h1 className=" text-5xl capitalize text-sky-300 font-bold">
                {name}.
                <Underliner />
              </h1>
              <div className="capitalize my-3 font-thin text-md text-gray-500 whitespace-nowrap ">
                <Typist />
              </div>
              <p className="text-gray-700 mb-2 dark:text-gray-400">
                Discuss a project ?
              </p>
              <Button>
                <Link href={"/contact"}>Say hello</Link>
              </Button>
            </div>
            {/* introduction-image */}
            <div className="w-full basis-1/2">
              <ImageHelper src={software} alt={`software=logo`} />
            </div>
            {/* soon to add-- years of experience, clients and completed projects */}
          </div>
        </section>
      </SlideRight>
    </main>
  );
}
