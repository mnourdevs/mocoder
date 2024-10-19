"use client";
import { motion } from "framer-motion";
import { ChildrenProps } from "@/utils/types";

export const SlideRight = ({ children }: ChildrenProps) => {
  return (
    <div >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const SlideDown = ({ children }: ChildrenProps) => {
  return (
    <div className="sticky top-0 z-50">
      <motion.div
        initial={{ y: "-80vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const SlideUp = ({ children }: ChildrenProps) => {
  return (
    <div>
      <motion.div
        initial={{ y: "80vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
