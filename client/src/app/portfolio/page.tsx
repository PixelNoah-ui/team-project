"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

// UI Components
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Icons
import { 
  ExternalLink, 
  Github, 
  Code, 
  Smartphone, 
  Brain, 
  Palette,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Filter
} from "lucide-react";

// Data and utilities
import { projectsData, categories } from "@/data/projects";
import type { Project, CategoryName } from "@/data/projects";

import { cn } from "@/lib/utils";
//Image Carousel Component
interface ImageCarouselProps {
  images: string[];
}
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  // Current image index state
  const [currentIndex, setCurrentIndex] = useState(0);
   //Navigate to previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  //Navigate to next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="carousel-container relative h-64 w-full">
      {/* Image track - slides horizontally based on current index */}
      <div 
        className="carousel-track h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide h-full">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation controls - only show if multiple images */}
      {images.length > 1 && (
        <>
          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          
        </>
      )}
    </div>
  );
};
// Project Card Component
interface ProjectCardProps {
  project: Project;
  onOpenDialog: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDialog }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for 3D tilt effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
//  Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse offset from center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Convert to rotation values (reduced intensity with 0.02 multiplier)
    setMousePosition({ x: mouseX * 0.02, y: mouseY * 0.02 });
  };
   //Reset card position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "project-card-hover cursor-pointer",
        isHovered ? "glow-border-active" : "glow-border"
      )}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenDialog}
      // Framer Motion hover animation
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-xl">
        {/* Project cover image */}
        <div className="relative h-48 w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyy9SAAAAOqr1jESOxbEUED3Kj4u7jS4eoGHKhpWOqQhTHIlMbhzSSu9xYa02Iz3YLLCMg0DWJjdMprPNwNhF9sO2vU99KgpKp3W7oZNJHhGw+q4OYGu9xQUOrr0KjdBDFOyDpvQSM6KTgRJ7bFE5vYK3Cro/l80uOjGKGNcvCe6AogSAAD8pKTOPgPc5Z/9k="
            /> 
          </motion.div>
          
          {/* Category badge */}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-black/20 text-white border-0">
              {project.categories[0]}
            </Badge>
          </div>
        </div>
        
        {/* Card content */}
        <CardHeader className="pb-3">
          <CardTitle className="gradient-text text-lg font-bold">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm">
            {project.shortDescription}
          </CardDescription>
        </CardHeader>
        
        {/* Tech stack badges */}
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="tech-badge text-xs"
              >
                {tech}
              </Badge>
            ))}
            {/* Show count if more than 4 technologies */}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="tech-badge text-xs">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        
        {/* Action button */}
        <CardFooter>
          <Button 
            size="sm" 
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
//Filter Button Component
interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ 
  category, 
  isActive, 
  onClick,
  icon
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
        isActive 
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg" 
          : "bg-white/80 text-gray-600 hover:bg-white shadow-md hover:shadow-lg"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="font-medium">{category}</span>
    </motion.button>
  );
};
//Icon Renderer Component
interface IconRendererProps {
  iconName: string;
  className?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ iconName, className = "w-4 h-4" }) => {
  const iconMap = {
    Filter: <Filter className={className} />,
    Code: <Code className={className} />,
    Smartphone: <Smartphone className={className} />,
    Brain: <Brain className={className} />,
    Palette: <Palette className={className} />
  };
  
  return iconMap[iconName as keyof typeof iconMap] || <Filter className={className} />;
};
//Main Portfolio Component

export default function Portfolio() {
  // State management
  const [selectedCategory, setSelectedCategory] = useState<CategoryName>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Refs for scroll animations
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  //Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(selectedCategory as any));
   //Open project detail dialog
   
  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };
  
  //Close project detail dialog
  const closeProjectDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header Section */}
      <section id="filter-bar" className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Showcasing innovative projects that blend creativity with cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Category Filter Bar */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <FilterButton
                key={category.name}
                category={category.name}
                icon={<IconRenderer iconName={category.icon} />}
                isActive={selectedCategory === category.name}
                onClick={() => setSelectedCategory(category.name)}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Projects Grid Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4" ref={containerRef}>
          {/* AnimatePresence for smooth category transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1, // Staggered animation
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <ProjectCard
                    project={project}
                    onOpenDialog={() => openProjectDialog(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AnimatePresence>
          {isDialogOpen && selectedProject && (
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Dialog Header */}
                <DialogHeader>
                  <DialogTitle className="text-2xl gradient-text">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    {selectedProject.shortDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6 space-y-6">
                  {/* Project Image Gallery */}
                  <ImageCarousel images={selectedProject.gallery} />
                  
                  {/* Project Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="tech-badge"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Categories */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.categories.map((category) => (
                        <Badge key={category} className="bg-gradient-to-r from-purple-500 to-blue-500">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {/* Live Demo Button */}
                    {selectedProject.liveUrl && (
                      <Button 
                        asChild
                        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                      >
                        <a 
                          href={selectedProject.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </a>
                      </Button>
                    )}
                    
                    {/* GitHub Repository Button */}
                    {selectedProject.repoUrl && (
                      <Button 
                        asChild
                        variant="outline"
                        className="border-gray-300 hover:bg-gray-50"
                      >
                        <a 
                          href={selectedProject.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </div>
  );
}