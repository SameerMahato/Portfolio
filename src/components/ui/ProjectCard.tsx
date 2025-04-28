import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import Button from "./Button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  duration: string;
  features: string[];
  technologies: string[];
  image: string;
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  duration,
  features,
  technologies,
  image,
  link,
  index
}) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <p className="text-gray-300 text-sm font-medium">{duration}</p>
            <h3 className="text-white text-xl md:text-2xl font-bold">{title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <Button 
            variant="primary" 
            size="sm"
            icon={<ExternalLink size={16} />}
          >
            View Project
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            icon={<Github size={16} />}
          >
            Source Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;