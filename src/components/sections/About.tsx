import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { Download, GraduationCap } from "lucide-react";
import Button from "../ui/Button";
import { education } from "../../data/personal";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me and my background"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 mb-6 text-justify leading-relaxed">
          I am a passionate Full Stack Developer hailing from Jharkhand, India — a small-town individual with ambitious goals and a strong commitment to hard work.

Growing up in a middle-class family, I have been deeply inspired by the belief that "The future belongs to those who believe in the beauty of their dreams." I possess a natural ability to multitask, driven by curiosity, perseverance, and a continuous desire for learning and self-improvement. For me, giving up is never an option.

Currently, I am pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering at Lovely Professional University, where I am building a solid foundation in web technologies and modern programming languages. I am particularly passionate about creating responsive, user-friendly applications that effectively combine functionality with creative design.

Since April 2022, I have also been working as an Academic Content Editor and Graphic Designer at Scholarscribe. In this role, I refine academic content to ensure clarity and precision while designing visually engaging assets that enhance the presentation of ideas.

Outside of my academic and professional pursuits, I am deeply committed to fitness and wellness. I often spend my free time at the gym, experimenting with healthy recipes, or riding my bike to explore new places—activities that serve as both recreation and sources of inspiration.

My core passions—technology, fitness, and adventure—shape both my personal and professional life. I look forward to connecting with like-minded individuals to collaborate and create impactful projects.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button icon={<Download size={16} />}>
            Download Resume
          </Button>
        </div>

        {/* Redesigned Timeline */}
        <div className="mt-20 max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-12 text-center"
          >
            Education Journey
          </motion.h3>

          

          <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute -left-[26px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md" />
                
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
                    <GraduationCap className="w-5 h-5" />
                    <span>{edu.institution}</span>
                  </div>
                  <h4 className="text-md font-medium mb-1">{edu.degree}</h4>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                  <p className="text-sm text-blue-500 mt-2 font-semibold">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
