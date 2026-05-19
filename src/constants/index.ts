type NavLinkType = "finder" | "contact" | "resume";

type DockAppId =
  | "finder"
  | "safari"
  | "photos"
  | "contact"
  | "terminal"
  | "trash";

type LocationType = "work" | "about" | "resume" | "trash";

type FileType = "txt" | "url" | "img" | "fig" | "pdf";

type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

interface NavLink {
  id: number;
  name: string;
  type: NavLinkType;
}

interface NavIcon {
  id: number;
  img: string;
}

interface DockApp {
  id: DockAppId;
  name: string;
  icon: string;
  canOpen: boolean;
}

interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

interface TechStackItem {
  category: string;
  items: string[];
}

interface SocialLink {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

interface PhotosLink {
  id: number;
  icon: string;
  title: string;
}

interface LocationNodeBase {
  id: number;
  name: string;
  icon: string;
  kind: "folder" | "file";
  position?: string;
}

interface FolderNode extends LocationNodeBase {
  kind: "folder";
  windowPosition?: string;
  children: LocationNode[];
}

interface FileNode extends LocationNodeBase {
  kind: "file";
  fileType: FileType;
  href?: string;
  imageUrl?: string;
  subtitle?: string;
  image?: string;
  description?: string[];
}

type LocationNode = FolderNode | FileNode;

interface LocationRoot extends FolderNode {
  type: LocationType;
}

interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: LocationNode | null;
}

type WindowConfig = Record<WindowKey, WindowState>;

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons: NavIcon[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps: DockApp[] = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack: TechStackItem[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials: SocialLink[] = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks: PhotosLink[] = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
};

const WORK_LOCATION: LocationRoot = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "HolaAmigo Language Exchange & Video Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "HolaAmigo.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The HolaAmigo app is a friendly, modern platform for language exchange, built to help people meet, chat, and practice together.",
            "Instead of just messaging, it pairs real-time chat with seamless video calls so learning feels social and alive.",
            "Think of it as a digital language partner hub—find new friends, send requests, and jump into a call in seconds.",
            "It's built with React (Vite), Tailwind, and Stream Chat/Video on a Node/Express backend for fast performance, responsive design, and reliable real-time features.",
          ],
        },
        {
          id: 2,
          name: "holamigo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://holaamigo-od71.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "holamigo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "MaskOff Deepfake Detection Web Application.",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "MaskOff.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "MaskOff is a focused web platform built to detect deepfakes in images and videos with speed and clarity.",
            "Instead of a basic upload tool, it delivers a clean, guided experience that analyzes content frame-by-frame and reports results confidently.",
            "Think of it as a digital authenticity checkpoint—helping users spot manipulated media in seconds.",
            "It's built with React, TypeScript, Vite, and Tailwind on the frontend, with a Django REST backend powering the analysis.",
          ],
        },
        {
          id: 2,
          name: "maskoff.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://maskoff-92.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "maskoff.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "HandscriptBCA Academic Resource Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "HandscriptBCA.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The HandscriptBCA website is a dedicated educational platform designed for finding and sharing handwritten BCA notes and exam papers.",
            "Instead of scattered PDFs and unorganized folders, it delivers a centralized, easy-to-navigate hub with structured study materials for every semester.",
            "Think of it like having an organized campus library tailored specifically for BCA students—but accessible right from your phone or laptop.",
            "It's built with HTML, CSS, and JavaScript, ensuring fast performance, responsive design, and a clean, user-friendly look.",
          ],
        },
        {
          id: 2,
          name: "Handscriptbca.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://7azz.github.io/HandscriptBCA/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "handscriptbca.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION: LocationRoot = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/tanveer.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/tanveer-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/tanveer-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/tanveer-pic.jpg",
      description: [
        "Hey! I’m Tanveer 👋, an MCA student figuring out my path into tech while building real-world projects along the way.",
        "I’ve got a solid grip on frontend and right now I’m diving into backend—exploring things like Node.js to become a more complete developer.",
        "I like keeping things practical: learning fast, building things that actually work, and constantly leveling up my skills as a developer.",
        "Outside of coding, I’m usually overthinking my next move, tweaking my setup, or grinding late at night trying to level up (even if I procrastinate a bit 😅).",
      ],
    },
  ],
};

const RESUME_LOCATION: LocationRoot = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION: LocationRoot = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: WindowConfig = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
