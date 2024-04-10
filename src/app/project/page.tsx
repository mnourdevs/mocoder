import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Projects"
}

const Project = () => {
  return ( 
    <div className="flex max-h-screen h-full items-center justify-center text-3xl  text-blue-500 dark:text-blue-300">
      <p className="border p-3 rounded-logo animate-wiggle border-blue-500 dark:text-blue-300">
        Comming Soon
      </p>
    </div>
   );
}
 
export default Project;