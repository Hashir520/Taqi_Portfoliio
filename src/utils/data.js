import {
  IoLogoJavascript,
  
  IoLogoHtml5,
 
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs"; // Import Bootstrap logo

export const PROFILE_DATA = {
  profilePicture: "taqi.jp",
  name: "Taqi Quershi",
  tagline: "A skilled Python developer specializing in backend development, automation, and data processing. Proficient in frameworks like Django and Flask, with a focus on writing clean, efficient code. Experienced in building scalable applications and contributing to open-source projects. Passionate about solving complex problems and optimizing performance.",
  jobTitle: "Python Developer",
  location: "Pakistan",
  yearsOfExperience: "1",
  skills: [
    "Graphic Designing",
    "Tailwind CSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
   "Python",
  ],
  email: "mtaqiquershi@gmail.com",
  phone: "+923010141286",
  website: "https://www.linkedin.com/in/muhammad-taqi-96931323a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  ",
};

export const SKILLS = [
  {
    id: "01",
    Icon: IoLogoJavascript,
    name: "JavaScript",
    comment:
      "JavaScript is my core programming language, and I’ve been working with it for 6 months. I use it to build dynamic, interactive web applications and handle both frontend and backend logic. Its versatility has helped me improve my problem-solving skills.",
  },
 
  {
    id: "04",
    Icon: FaPython,
    name: "Python",
    comment:
      "A Python developer specializing in backend development, automation, and data processing. Proficient in frameworks like Django and Flask, with expertise in writing clean and efficient code. Experienced in building scalable applications and optimizing performance. Passionate about problem-solving and contributing to open-source projects.",
  },
  {
    id: "05",
    Icon: RiTailwindCssFill,
    name: "Tailwind CSS",
    comment:
      "Tailwind CSS has been my go-to framework for creating responsive, modern web designs over the past 6 months. I love its utility-first approach, which allows me to rapidly build custom layouts while maintaining clean and organized code.",
  },
  {
    id: "06",
    Icon: IoLogoHtml5,
    name: "HTML",
    comment:
      "I’ve been working with HTML for 6 months, creating well-structured, semantic web pages that ensure accessibility and SEO optimization. It forms the backbone of my projects, and I’ve mastered using it alongside CSS and JavaScript for dynamic layouts.",
  },
  {
    id: "03",
    Icon: BiPencil, // Replacing IoLogoNodejs with Adobe logo
    name: "Graphic Designing",
    comment:
      "A creative graphic designer specializing in visual storytelling, branding, and digital design. Skilled in Adobe Creative Suite, UI/UX design, and creating impactful visuals. Passionate about crafting unique designs that enhance user experiences and brand identity.",
  },
  {
    id: "02",
    Icon: BsBootstrap, // Replacing IoLogoReact with Bootstrap logo
    name: "Bootstrap",
    comment:
      "I’ve been working with Bootstrap for 6 months, building responsive and mobile-friendly web interfaces. I have experience using Bootstrap’s grid system, components, and utilities to create visually appealing and consistent designs efficiently.",
  },
  

];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "S-Tech",
    position: "Product Head",
    duration: "Dec 2024 - Present",
    description:
      "As the Product Head at S-Tech, I lead product strategy, development, and innovation, ensuring seamless execution and market success. I drive cross-functional collaboration to build impactful solutions.",
  },
  {
    id: "02",
    company: "Alpha Fitness",
    position: "Social Media Manager",
    duration: "Mar 2024 - Aug 2024",
    description:
      "As a Social Media Manager at Alpha Fitness, I strategize, create, and manage content to enhance brand presence and engagement. I analyze trends and optimize campaigns for maximum impact.",
  },
  {
    id: "03",
    company: "S-Tech",
    position: "Graphic Designer",
    duration: "Nov 2023 - Jan 2020",
    description:
      "As a Graphic Designer at S-Tech, I create visually compelling designs that enhance branding and user engagement. I specialize in digital design, UI/UX, and marketing creatives.",
  },
];

export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm Taqi Quershi, a Associate Software Engineer based in Pakistan. I have been working with Python,Javascript,Tailwind CSS for 1 year now. I have built multiple projects using these technologies.",
    background: "I have a Bachelor's degree in Computer Science from Superior University. I have built multiple projects using Python,Javascript,Tailwind CSS.",
    skills: "I am proficient in  Tailwind CSS, HTML, CSS, JavaScript,Python.",
    projects: "I have built multiple projects using Python,Javascript,Tailwind CSS. Some of the projects that I have built are: Brain Tumor Detection Using MRI, Dawai Web Application.",
    interests: "I am interested in building scalable and efficient web applications. I am also interested in learning new technologies and frameworks.",
    careerGoals: "My career goal is to become a Python Developer and work on challenging projects that will help me grow as a developer.",

    stats:{
        yearsOfExperience: "1",
        projectsCompleted: "5",
        clientsWorkedWith: "10",

    },
};
