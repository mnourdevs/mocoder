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
      <section className="flex justify-center items-center my-6 mx-12 ">
        <SlideRight>
          <div>
            {/* introduction-text */}
            <div className="flex max-md:flex-col justify-center items-center p-3 space-x-14">
              <div className="mb-3 md:mb-0 ">
                <h1 className=" text-5xl capitalize text-sky-300 font-bold">
                  {name}.
                  <Underliner />
                </h1>
                <span className="inline-block capitalize my-3 font-thin text-md text-gray-500">
                  <Typist />
                </span>
                  <p
                    className="text-gray-700 mb-2 dark:text-gray-400"
                  >
                    Discuss a project ? 
                  </p>
                <Button>
                  <Link href={"/contact"}>Say hello</Link>
                </Button>
              </div>
              {/* introduction-image */}
              <div>
                <ImageHelper src={software} alt={`software=logo`} />
              </div>
              {/* soon to add-- years of experience, clients and completed projects */}
            </div>
          </div>
        </SlideRight>
      </section>
    </main>
  );
}
