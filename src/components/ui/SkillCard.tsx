import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface SkillCardProps {
  title: string;
  items: string[];
  icon: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  items,
  icon,
  index
}) => {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-[#111111] rounded-xl shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 p-6 border border-gray-800"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white">
            <IconComponent size={24} />
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-100">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {items.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
              viewport={{ once: true }}
              className="px-3 py-1.5 bg-[#1a1a1a] text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;