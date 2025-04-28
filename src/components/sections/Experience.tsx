import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";
import { experience } from "../../data/experience";
import { achievements } from "../../data/personal";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="My Journey" 
          subtitle="A chronological journey through my professional and educational experience"
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              subtitle={exp.company}
              description={exp.description}
              date={exp.duration}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-4">Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;