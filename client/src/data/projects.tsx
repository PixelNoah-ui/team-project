/**
 * Project Data Types and Sample Data
 * 
 * This file contains all project-related type definitions and sample data
 * used throughout the portfolio application.
 */


// Type definition for individual project
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  cover: string;
  gallery: string[];
  categories: ("Web" | "Mobile" | "AI" | "Design")[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Sample project data - replace with your actual projects
export const projectsData: Project[] = [
  {
    id: "1",
    title: "AI-Powered Task Manager",
    shortDescription: "Smart productivity app with AI-driven task prioritization and natural language processing",
    longDescription: "A revolutionary task management application that leverages artificial intelligence to automatically prioritize tasks, suggest optimal scheduling, and provide intelligent insights into productivity patterns. The app features natural language processing for voice commands, smart categorization, and predictive analytics to help users achieve maximum efficiency.",
    cover: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Web", "AI"],
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example-ai-task.com",
    repoUrl: "https://github.com/PixelNoah-ui/team-project.git"
  },
  {
    id: "2",
    title: "E-Commerce Mobile App",
    shortDescription: "React Native shopping app with advanced filtering, AR preview, and seamless checkout",
    longDescription: "A comprehensive mobile e-commerce solution built with React Native, featuring augmented reality product preview, advanced search and filtering capabilities, secure payment integration, and personalized recommendations. The app provides a seamless shopping experience with offline support and push notifications for deals and order updates.",
    cover: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Mobile"],
    tech: ["React Native", "Redux", "Firebase", "Stripe", "AR Core"],
    liveUrl: "https://example-ecommerce.com",
    repoUrl: "https://github.com/example/ecommerce-app"
  },
  {
    id: "3",
    title: "Creative Design Portfolio",
    shortDescription: "Interactive design showcase with 3D animations, case studies, and immersive galleries",
    longDescription: "An award-winning creative portfolio website featuring interactive 3D animations, detailed case studies, and immersive project galleries. Built with cutting-edge web technologies, the site showcases creative work through dynamic storytelling, smooth transitions, and engaging user interactions that bring designs to life.",
    cover: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Web", "Design"],
    tech: ["React", "Three.js", "GSAP", "WebGL", "Framer Motion"],
    liveUrl: "https://example-portfolio.com",
    repoUrl: "https://github.com/example/creative-portfolio"
  },
  {
    id: "4",
    title: "Machine Learning Dashboard",
    shortDescription: "Real-time ML analytics platform with interactive visualizations and model monitoring",
    longDescription: "A comprehensive machine learning operations dashboard that provides real-time monitoring of ML models, interactive data visualizations, and predictive analytics. Features include model performance tracking, data drift detection, automated alerting, and collaborative tools for data science teams to manage their ML pipeline effectively.",
    cover: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Web", "AI"],
    tech: ["Python", "FastAPI", "React", "D3.js", "TensorFlow"],
    liveUrl: "https://example-ml-dashboard.com",
    repoUrl: "https://github.com/example/ml-dashboard"
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    shortDescription: "Comprehensive health and fitness mobile app with workout plans and progress tracking",
    longDescription: "A full-featured fitness tracking application that helps users achieve their health goals through personalized workout plans, nutrition tracking, progress monitoring, and social features. Includes integration with wearable devices, custom workout builder, meal planning, and achievement system to keep users motivated.",
    cover: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Mobile"],
    tech: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
    liveUrl: "https://example-fitness.com",
    repoUrl: "https://github.com/example/fitness-app"
  },
  {
    id: "6",
    title: "Brand Identity System",
    shortDescription: "Complete brand identity design with logo, guidelines, and marketing collateral",
    longDescription: "A comprehensive brand identity system created for a tech startup, including logo design, color palette, typography guidelines, business card designs, website mockups, and marketing collateral. The project involved extensive research, concept development, and iterative design process to create a cohesive visual identity that reflects the brand values.",
    cover: "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Design"],
    tech: ["Adobe Illustrator", "Figma", "Photoshop", "InDesign"],
    liveUrl: "https://example-brand.com"
  },
  {
    id: "7",
    title: "Real-time Chat Platform",
    shortDescription: "Scalable messaging platform with video calls, file sharing, and team collaboration features",
    longDescription: "A modern real-time communication platform built for teams and organizations. Features include instant messaging, video conferencing, file sharing, screen sharing, channel management, and integration with popular productivity tools. The platform is built with scalability in mind, supporting thousands of concurrent users with low latency messaging.",
    cover: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Web"],
    tech: ["Node.js", "Socket.io", "React", "MongoDB", "WebRTC"],
    liveUrl: "https://example-chat.com",
    repoUrl: "https://github.com/example/chat-platform"
  },
  {
    id: "8",
    title: "AI Image Generator",
    shortDescription: "Advanced AI-powered image generation tool with custom training and style transfer",
    longDescription: "An innovative AI-powered image generation platform that allows users to create unique artworks using advanced machine learning models. Features include style transfer, custom model training, batch processing, and an intuitive interface for prompt engineering. The platform supports multiple AI models and provides high-resolution output for professional use.",
    cover: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    categories: ["Web", "AI"],
    tech: ["Python", "PyTorch", "FastAPI", "React", "CUDA"],
    liveUrl: "https://example-ai-art.com",
    repoUrl: "https://github.com/example/ai-image-gen"
  }
];

// Category configuration with icons
export const categories = [
  { name: "All", icon: "Filter" },
  { name: "Web", icon: "Code" },
  { name: "Mobile", icon: "Smartphone" },
  { name: "AI", icon: "Brain" },
  { name: "Design", icon: "Palette" }
] as const;

// Type for category names
export type CategoryName = typeof categories[number]["name"];