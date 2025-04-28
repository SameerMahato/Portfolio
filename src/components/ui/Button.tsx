import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  icon,
  disabled = false
}) => {
  const baseStyles = "rounded-md font-medium flex items-center justify-center transition-all duration-300 ease-in-out";
  
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 shadow-lg shadow-gray-900/20",
    outline: "border-2 border-gray-300 text-gray-300 hover:border-purple-400 hover:text-purple-400"
  };
  
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;