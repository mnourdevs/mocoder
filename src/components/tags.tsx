import { ContactFormProps } from "@/utils/types";

export const ContactFormInput = ({
  type,
  label,
  name,
  value,
  handleChange,
}: ContactFormProps) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        id={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer focus:border-b-2 border-gray-300 focus:border-black dark:text-white dark:focus:border-gray-300" 
        placeholder=" "
        required
      />
      <label
        htmlFor={name}
        className="text-gray-400 peer-focus:text-black peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-mono dark:peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  );
};

export const ContactFormTextarea = ({
  label,
  name,
  value,
  handleChange,
}: ContactFormProps) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <textarea
        id={label}
        name={name}
        value={value}
        onChange={handleChange}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-b-2 peer border-gray-300 focus:border-black dark:text-white dark:focus:border-gray-300"
        placeholder=" "
        required
      />
      <label
        htmlFor={label}
        className="text-md peer-focus:font-medium absolute duration-300 text-gray-400 peer-focus:text-black transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-mono dark:peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  );
};
