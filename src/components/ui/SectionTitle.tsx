import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  className = ""
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      <motion.h2
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-3xl md:text-4xl font-bold mb-3 relative inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        {title}
        <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;