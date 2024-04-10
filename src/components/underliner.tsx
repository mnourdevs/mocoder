const Underliner = ({ color }: { color?: string }) => {
  return (
    <span
      className={`w-20 h-1 rounded-md bg-blue-300 block mt-2`}
      style={{ background: color }}
    ></span>
  );
};

export default Underliner;
