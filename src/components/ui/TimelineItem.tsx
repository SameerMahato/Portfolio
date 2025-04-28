import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  description?: string[] | string;
  date: string;
  index: number;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  description,
  date,
  index,
  isLast = false
}) => {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex flex-col items-center mr-4 md:mr-8">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"></div>
        {!isLast && <div className="h-full w-0.5 bg-gray-300"></div>}
      </div>
      
      <div className={`pb-8 ${isLast ? "" : "mb-6"}`}>
        <span className="text-sm text-gray-500 font-medium">{date}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-1">{title}</h3>
        <p className="text-gray-700 font-medium mb-3">{subtitle}</p>
        
        {description && Array.isArray(description) ? (
          <ul className="list-disc list-inside text-gray-600">
            {description.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ul>
        ) : description ? (
          <p className="text-gray-600">{description}</p>
        ) : null}
      </div>
    </motion.div>
  );
};

export default TimelineItem;