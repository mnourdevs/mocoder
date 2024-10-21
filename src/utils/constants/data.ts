import { DataProps } from "@/utils/types";
import home from "../../../public/images/home.png";
import aboutme from "../../../public/images/programmer(1).png";
import project from "../../../public/images/app-development.png";
import github from "../../../public/images/github.png";
import linkedin from "../../../public/images/linkedin.png";
import email from "../../../public/images/email(4).png";
import email1 from "../../../public/images/email.png";
import whatsapp from "../../../public/images/whatsapp.png";
import whatsup from "../../../public/images/whatsapp(1).png";
import location from "../../../public/images/placeholder.png";
import phone from "../../../public/images/phone-call.png";
import contactme from "../../../public/images/contactme.png";
import netgh from "../../../public/images/netgh.jpg"
import {
  LaptopOutlined,
  BulbOutlined,
  ToolOutlined,
  CodeOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

export const whatsAppDefaultMessage: string =
  "Hey there! 🚀 How can I help you ? Looking forward to hearing from you!";

// action type for reducer
export enum ACTION_TRIGGERS {
  CHANGE_INPUT = "CHANGE_INPUT",
  CHANGE_ALERT = "CHANGE_ALERT",
  CHANGE_ERROR = "CHANGE_ERROR",
}

export const data: DataProps = {
  navigation: [
    { name: "Home", href: "/", src: home },
    { name: "About Me", href: "/about", src: aboutme },
    { name: "Projects", href: "/project", src: project },
    { name: "Contact Me", href: "/contact", src: contactme },
  ],
  connectSocial: [
    { name: "Github", href: "https://github.com/mnourdevs", src: github },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-hassan-a5373b249/",
      src: linkedin,
    },
    { name: "Email", href: "mailto:mnourdevs@gmail.com", src: email },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?phone=0509447674&text=${whatsAppDefaultMessage}`,
      src: whatsapp,
    },
    { name: "+233509447674", href: "tel:+233509447674", src: phone },
    {
      name: "+233509447674",
      href: `https://api.whatsapp.com/send?phone=0509447674&text=${whatsAppDefaultMessage}`,
      src: whatsup,
    },
    { name: "Accra, Ghana", href: "google.com", src: location },
    { name: "info@mocoder.com", href: "http://info@mocoder.com", src: email1 },
  ],

  home: {
    name: "Mo Nour",
    job: [
      "Software Developer",
      "Web Designer",
      "High-performance Solutions",
      "Performance-driven Applications",
    ],
    content: [
      "discussing project design?Let's connect!",
    ],
  },
  aboutMe: [
    {
      topic: "Full Stack Developer",
      body: "As a seasoned Full Stack Developer, I'm committed to turning your digital vision into reality with precision, creativity, and efficiency. With a robust skill set encompassing a myriad of technologies including RESTful API, React, Next.js, Node.js, Express, and Django, I bring over [X years] of hands-on experience to the table.",
      color: "#3B82F6",
      Icon: LaptopOutlined,
    },

    {
      topic: "Crafting Captivating Experiences",
      body: "My expertise lies in crafting captivating web experiences that seamlessly blend creativity with technical prowess. From front-end development utilizing HTML, CSS, and JavaScript to building dynamic and interactive applications with React and Next.js, I thrive on delivering high-performance solutions that exceed expectations",
      color: "#22C55E",
      Icon: BulbOutlined,
    },
    {
      topic: "Collaboration & Optimization",
      body: "Collaboration lies at the heart of my process. I thrive in team environments, consistently delivering exceptional results while prioritizing clean code practices and SEO optimization. This ensures that your website not only looks impressive but also ranks well in search engines, driving organic traffic to your online presence.",
      color: " #EAB308",
      Icon: ToolOutlined,
    },
    {
      topic: "Continuous Learning",
      body: " Committed to staying abreast of the latest industry trends, I invest in continuous learning to deliver cutting-edge solutions that push the boundaries of possibility. Your project benefits from the most innovative techniques and methodologies, ensuring it remains ahead of the curve in an ever-evolving digital landscape.",
      color: "#A855F7",
      Icon: CodeOutlined,
    },
    {
      topic: "Let's Create Together",
      body: "If you're seeking a dedicated Full Stack Developer to bring your digital aspirations to life, I'm here to make it happen. Let's connect and embark on a journey to create remarkable web experiences that resonate with your audience and drive success for your business",
      color: "#EC4899",
      Icon: ThunderboltOutlined,
    },
  ],
  footer: [
    { name: "Address", body: "Accra, Ghana", href: "", src: location },
    {
      name: "Let's Talk",
      body: "+233509447674",
      href: "tel:+233509447674",
      src: phone,
    },
    {
      name: "Email Me",
      body: "mnourcodes@gmail.com",
      href: "mailto:mnourcodes@gmail.com",
      src: email1,
    },
  ],
  projects:[
    {
      title: "Netgh ~ A film template",
      imageUrl: netgh,
      liveUrl: "https://netgh.onrender.com/",
      tags: ["Express", "EJS", "Node.js", "TS"]
    },
    // more projects...
  ]
};

export const keywords: string[] = [
  "Graphic Design",
  "Portfolio",
  "Freelance",
  "Illustration",
  "Web Development",
  "Projects",
  "Frontend",
  "Backend",
  "UX Design",
  "UI Design",
  "User Experience",
  "User Interface",
  "Sofware Developer",
  "Sofware Programer",
  "Fullstack Developer",
  "Fullstack",
  "Developer",
];

export const BASE_URL = `http://localhost:2024/`;
