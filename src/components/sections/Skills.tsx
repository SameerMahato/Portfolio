import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import { skillCategories } from "../../data/skills";

const techStackIcons = [
  { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A showcase of my technical abilities and expertise"
          className="text-gray-100"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              items={category.items}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#111111] p-8 rounded-xl shadow-2xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Tech Stack Workflow
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStackIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.15,
                  y: -6,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#1a1a1a] p-4 flex items-center justify-center mb-3 shadow-lg group-hover:shadow-cyan-500/20"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-3/4 h-1 bg-[#1a1a1a] rounded-full relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
