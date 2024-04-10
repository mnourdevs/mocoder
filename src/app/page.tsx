import Link from "next/link";
import ImageHelper from "@/components/imageHelper";
import Button from "@/components/button";
import { SlideRight } from "@/components/slide";
import software from "../../public/images/web-development(1).png";
import { data } from "@/utils/data";
import Underliner from "@/components/underliner";

export default function Home() {
  const { name, job, content } = data.home;
  return (
    <main>
      {/* introduction section */}
      <section className="flex justify-center items-center my-6 mx-12 ">
        <SlideRight>
          <div>
            {/* introduction-text */}
            <div className="flex max-md:flex-col justify-center items-center p-3 gap-x-14">
              <div className="mb-3 md:mb-0 ">
                <h1 className="font-bold text-4xl uppercase text-blue-300">
                  {name}.
                  <Underliner />
                </h1>
                <span className="inline-block uppercase my-3 font-bold text-md text-gray-400">
                  {job}
                </span>
                {content.map((item, index) => (
                  <p className="text-gray-700 mb-2 dark:text-gray-400" key={index}>
                    {item}
                  </p>
                ))}

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
