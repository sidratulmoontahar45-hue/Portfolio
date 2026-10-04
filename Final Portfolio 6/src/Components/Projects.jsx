import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {FaExternalLinkAlt,FaGithub,FaFlask,FaBrain,FaStore,FaUniversity,FaTimes,FaChevronLeft,FaChevronRight,FaImages,} from "react-icons/fa";
import { SectionHeading, fadeIn } from "./Shared";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Uparzo",
    subtitle: "E-Commerce Platform",
    description: "A live e-commerce platform for managing online stores, products and orders.",
    tags: ["Web", "E-Commerce"],
    status: "LIVE",
    icon: <FaStore />,
    link: "https://uparzo.com/",
    linkText: "Visit Website",
  },
  {
    id: 2,
    number: "02",
    title: "Groundwater Depletion Prediction",
    subtitle: "Machine Learning Research",
    description:
      "Ongoing research using CNN and LSTM models to predict groundwater depletion in rural areas.",
    tags: ["Python", "CNN", "LSTM"],
    status: "ONGOING",
    icon: <FaFlask />,
    link: null,
    linkText: "In Progress",
  },
  {
    id: 3,
    number: "03",
    title: "AI-Powered Learning Assistant APP",
    subtitle: "Full-Stack MERN App",
    description:
      "A current semester project building an AI-powered learning assistant with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB"],
    status: "BUILDING",
    icon: <FaBrain />,
    link: null,
    linkText: "In Development",
  },
  {
    id: 4,
    number: "04",
    title: "ATM & Bank Management System",
    subtitle: "Java + MySQL",
    description:
      "A completed banking management system implementing accounts and core ATM operations.",
    tags: ["Java", "MySQL"],
    status: "COMPLETED",
    icon: <FaUniversity />,
    github: "https://github.com/sidratulmoontahar45-hue/ATM-Bank-Management-System",
    link: null,
    linkText: "View GitHub",
  },
  {
    id: 5,
    number: "05",
    title: "Smart Plant Monitoring & Watering System",
    subtitle: "IoT + Embedded System + Custom App",
    description:
      "An automated plant monitoring and watering system with real-time monitoring, automatic watering and a custom mobile app for remote control.",
    tags: ["IoT", "Arduino", "Sensors", "Mobile App"],
    status: "COMPLETED",
    icon: <FaFlask />,
    link: null,
    linkText: "View Photos",
    images: [
      "/plant-system.jpeg",
      "/plant-app.jpeg",
      "/plant-display.jpeg",
      "/plant-diagram.jpeg",
      "/plant-watering.jpeg",
    ],
  },
];

const statusText = {
  LIVE: "Currently Live",
  ONGOING: "Research",
  BUILDING: "Development",
  COMPLETED: "Completed",
};

const buttonClass =
  "inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-3.5 py-2 text-xs font-bold text-gray-800 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 sm:text-sm";

const ProjectButton = ({ project, onOpenGallery }) => {
  if (project.images) {
    return (
      <motion.button
        onClick={() => onOpenGallery(project)}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.96 }}
        className={buttonClass}
      >
        <FaImages />
        View Photos
      </motion.button>
    );
  }
  if (project.link) {
    return (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.96 }}
        className={buttonClass}
      >
        {project.linkText}
        <FaExternalLinkAlt className="text-[10px]" />
      </motion.a>
    );
  }

  if (project.github) {
    const noLinkYet = project.github === "YOUR_GITHUB_LINK_HERE";

    return (
      <motion.a
        href={noLinkYet ? "#" : project.github}
        onClick={(e) => {
          if (noLinkYet) e.preventDefault();
        }}
        target={noLinkYet ? undefined : "_blank"}
        rel="noopener noreferrer"
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.96 }}
        className={buttonClass}
      >
        <FaGithub />
        {project.linkText}
      </motion.a>
    );
  }
  return (
    <span className="rounded-lg border-2 border-gray-300 bg-gray-50 px-3.5 py-2 text-xs font-semibold text-gray-600 sm:text-sm">
      {project.linkText}
    </span>
  );
};

const ProjectCard = ({ project, index, onOpenGallery }) => {
  return (
    <motion.article
      {...fadeIn({ y: 35, duration: 0.55, delay: index * 0.08, amount: 0.15 })}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-300 bg-white shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-xl"
    >
      <div className="relative flex h-36 items-center justify-center overflow-hidden border-b-2 border-gray-300 bg-gray-50">
        {project.images ? (
          <>
            <img
              src={project.images[0]}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/25" />

            <button
              onClick={() => onOpenGallery(project)}
              className="relative z-10 flex items-center gap-2 rounded-lg border-2 border-white bg-black/60 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/80"
            >
              <FaImages />
              View Photos
            </button>
          </>
        ) : (
          <>
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-100/60 blur-3xl transition-transform duration-700 group-hover:scale-125" />

            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-gray-300 bg-white text-2xl text-cyan-600 shadow-sm"
            >
              {project.icon}
            </motion.div>
          </>
        )}
        <span className="absolute left-4 top-4 z-20 rounded-md border-2 border-gray-300 bg-white px-2.5 py-1 text-xs font-bold tracking-wider text-gray-700">
          {project.number}
        </span>
        <div className="absolute right-4 top-4 z-20">
          {project.status === "LIVE" ? (
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-3 py-1.5 text-xs font-bold tracking-wide text-green-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>
              LIVE
            </span>
          ) : (
            <span className="rounded-full border-2 border-gray-300 bg-white px-3 py-1.5 text-xs font-bold tracking-wide text-gray-700 shadow-sm">
              {project.status}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-tight text-gray-950 transition-colors duration-300 group-hover:text-cyan-700 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-1.5 text-sm font-semibold text-cyan-700 sm:text-base">
          {project.subtitle}
        </p>

        <p className="mt-3 text-[15px] font-medium leading-6 text-gray-700 sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border-2 border-gray-300 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 transition-colors duration-200 group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-cyan-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-7">
          <span className="text-xs font-semibold text-gray-600 sm:text-sm">
            {statusText[project.status]}
          </span>

          <ProjectButton project={project} onOpenGallery={onOpenGallery} />
        </div>
      </div>
    </motion.article>
  );
};

const arrowClass =
  "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/90";

const Gallery = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const lastImage = project.images.length - 1;

  const nextImage = () => {
    setCurrentImage(currentImage === lastImage ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? lastImage : currentImage - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
        >
          <FaTimes />
        </button>

        <div className="relative flex h-[55vh] min-h-[300px] items-center justify-center bg-gray-950">
          <img
            src={project.images[currentImage]}
            alt={`${project.title} ${currentImage + 1}`}
            className="max-h-full max-w-full object-contain"
          />

          <button onClick={previousImage} className={arrowClass + " left-4"}>
            <FaChevronLeft />
          </button>

          <button onClick={nextImage} className={arrowClass + " right-4"}>
            <FaChevronRight />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white">
            {currentImage + 1} / {project.images.length}
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">{project.title}</h3>

          <p className="mt-1 text-sm font-semibold text-cyan-700">{project.subtitle}</p>

          <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
            {project.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setCurrentImage(index)}
                className={
                  "h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-24 " +
                  (currentImage === index ? "border-cyan-500" : "border-gray-200")
                }
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative w-full  overflow-hidden  bg-white px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-20"
      >
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-50/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            small="Selected Work"
            title="My"
            highlight="Projects"
            text="A selection of my projects, research and development work."
          />

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenGallery={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {selectedProject && (
          <Gallery project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};
export default Projects;
