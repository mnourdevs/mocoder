import { ButtonProps } from "@/utils/types";

const Button = ({ text, children }: ButtonProps) => {
  if (children) {
    return (
      <button
        type="submit"
        className="outline hover:bg-blue-300 hover:text-white rounded-md py-1.5 px-3 text-center md:my-0 outline-blue-300 hover:outline-offset-2 outline-1 font-serif dark:text-white hover:animate-wiggle"
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="submit"
      className="border border-blue-200 hover:bg-blue-300 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 hover:font-bold rounded-lg py-2.5 text-center text-gray-500 dark:text-white hover:animate-pulse w-full"
    >
      {text}
    </button>
  );
};

/*className="border rounded-lg shadow-md uppercase py-2 px-4  bg-white text-blue-500 hover:bg-gray-100" version 2.0
 */
export default Button;
