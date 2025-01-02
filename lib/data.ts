import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wartafenoImg from "@/public/images/project/wartefeno/1.png";
import siakadImg from "@/public/images/project/siakad/1.png";
import amikomImg from "@/public/images/project/amikom/1.png";
import hrtoolsImg from "@/public/images/project/hr-tools/1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Student at Politeknik Caltex Riau",
    location: "Politeknik Caltex Riau",
    description:
      "Currently studying at Politeknik Caltex Riau. Served as Project Manager for multiple semesters, overseeing projects across various domains including web, application, game, and animation development. Successfully led teams and managed project deliverables.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Present",
  },
  {
    title: "Divisi Kominfo, KM PCR Rokan Hilir",
    location: "Politeknik Caltex Riau",
    description:
      "Active in the KM PCR Rokan Hilir campus organization, serving in the Information and Communication Division (Kominfo). Contributed to communication efforts and the development of media and information systems for the organization.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Present",
  },
  {
    title: "Best Poster Award - Animation, JTI EXPO 2024",
    location: "Politeknik Caltex Riau",
    description:
      "Awarded Best Poster in the Animation category at the JTI EXPO 2024 for an outstanding animation project, demonstrating creativity and skill in the field of animation.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024",
  },

] as const;

export const projectsData = [
  {
    title: "SENILOKA",
    description:
      "Seniloka is a digital platform designed to preserve and promote Indonesia's local cultural arts. The platform integrates various features such as art galleries, cultural information, art events, and creative communities to support local artists and culture lovers. With a user-friendly interface and reliable security system, Seniloka is a space for collaboration and art exploration to increase appreciation for Indonesia's rich culture.",
    screenshots: [
      "images/project/seniloka/1.jpg",
      "images/project/seniloka/2.jpg",
      "images/project/seniloka/3.jpg",
    ],
    image: "images/project/seniloka/2.jpg",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Cultural Showcase: Displays a variety of local art and cultural works through an interactive digital gallery.",
      "Art Gallery: Provides a dedicated space to explore and enjoy artworks from local artists.",
      "Art Upload: Enables artists to upload and share their creations with a broader audience.",
      "Content & User Management: Offers an admin panel for efficient management of art content and user interactions to maintain platform quality.",
    ],
    languages: ["Laravel", , "MYSQL 8.0", "ReactJs"],
  },
  {
    title: "SIPMB",
    description:
      "SIPMB is an advanced system developed to streamline the admission process for new students at educational institutions. It provides features for online registration, document verification, announcement of results, and management of applicant data. The platform ensures an efficient, transparent, and user-friendly experience for both applicants and administrators.",
    screenshots: [
      "images/project/sipmb/1.png",
      "images/project/sipmb/2.png",
      "images/project/sipmb/3.png",
      "images/project/sipmb/4.png",
      "images/project/sipmb/5.png",
      "images/project/sipmb/6.png",
    ],
    image: "images/project/sipmb/5.png",
    tech: [
      "/images/icon/codeigniter.svg",
      "/images/icon/bootstrap.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Online Registration: Simplifies the application process by enabling students to register online from anywhere, anytime.",
      "Document Verification: Provides a secure system for uploading and verifying required documents electronically.",
      "Results Announcement: Ensures timely and transparent communication of admission results to applicants.",
      "Applicant Data Management: Offers tools to manage and analyze applicant data effectively for administrative purposes.",
    ],

    languages: ["CodeIgniter", "Bootstrap", "MYSQL 8.0"],
  },
  {
    title: "SILA",
    description:
      "SILA is a Geographic Information System (GIS) designed to map the distribution of laundry services in Pekanbaru. The platform displays detailed location information and offers insights into each laundry service, allowing users to easily find and access the closest laundry providers. By utilizing OpenLayers, the system provides an interactive and user-friendly map for efficient location-based searches.",
    screenshots: [
      "images/project/sila/1.png",
      "images/project/sila/2.png",
      "images/project/sila/3.png",
      "images/project/sila/4.png",
    ],
    image: "images/project/sila/1.png",
    tech: [
      "/images/icon/openlayers.svg",
      "images/icon/javascript.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Interactive Map: Displays the distribution of laundry services across Pekanbaru, allowing users to view locations on an interactive map using OpenLayers.",
      "Laundry Details: Provides comprehensive information about each laundry service, including contact details, services offered, and ratings.",
      "Location Search: Allows users to search for nearby laundries based on their location or specific area in Pekanbaru.",
      "Filter Options: Enables users to filter laundries by service type, distance, and rating to find the best options that suit their needs.",
    ],
    languages: ["React", "OpenLayers", "Leaflet", "MySQL"],
  },
  {
    title: "Laundrify Mobile Apps",
    description:
      "Laundrify Mobile Apps is a mobile application designed for laundry owners to manage their business operations efficiently. The app enables owners to track and manage orders, customers, and payments, as well as perform CRUD operations on laundry data using Firebase and Kotlin. With real-time updates and an intuitive user interface, Laundrify ensures a seamless management experience for laundry business owners.",
    screenshots: [
      "images/project/laundrify/1.png",
      "images/project/laundrify/2.png",
      "images/project/laundrify/3.png",
      "images/project/laundrify/4.png",
      "images/project/laundrify/5.png",
    ],
    image: "images/project/laundrify/7.png",
    tech: [
      "/images/icon/firebase.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "CRUD Operations: Allows owners to Create, Read, Update, and Delete data related to orders, customers, and payments.",
      "Real-Time Data Sync: Utilizes Firebase for real-time data synchronization across devices, ensuring up-to-date information is always available.",
      "Order Management: Lets owners manage laundry orders, track status, and update progress easily from the mobile app.",
      "Customer Management: Provides features for tracking customer details, history, and communication.",
      "Payment Tracking: Enables tracking of payments, including pending and completed transactions.",
      "User Management: Admin can manage user access with different roles, such as owner and staff.",
      "Data Backup and Recovery: Supports data backup on Firebase to avoid data loss and enables easy recovery.",
    ],
    languages: ["Kotlin", "Firebase", "MySQL", "Android SDK"],
  },
  {
    title: "Coming Soon - Project 1",
    description: "This project is coming soon. Stay tuned for updates.",
    image: "images/project/coomingsoon1/comingsoon1.png",
    tech: [],
    demoUrl: null,
    githubUrl: null,
    features: ["Project under development, coming soon."],
  },

  {
    title: "Coming Soon - Project 2",
    description: "This project is coming soon. Stay tuned for updates.",
    image: "images/project/coomingsoon2/comingsoon2.png",
    tech: [],
    demoUrl: null,
    githubUrl: null,
    features: ["Project under development, coming soon."],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "Kotlin",
  "Tailwind",
  "Bootstrap",
  "Codeigneter",
  "Laravel",
  "React",
  "MYSQL",
  "Git",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 8,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 4,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 5,
    imgUrl: "/images/icon/codeigniter.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/mysql.svg",
  },

  {
    id: 9,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/javascript.svg",
  },
  {
    id: 1,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    id: 6,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;
