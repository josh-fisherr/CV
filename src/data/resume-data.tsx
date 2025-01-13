import { GitHubIcon, LinkedInIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Joshua Fisher",
  initials: "JF",
  location: "Chapman University @ Orange, CA",
  locationLink: "https://maps.app.goo.gl/9wEgD3dtC7e1aaj57",
  about:
    "Software Engineering Student | Passionate about using technology to help people | Founder of Bathroom Hub iOS App | Experienced in C++, Python, Swift, and cloud technologies",
  summary:
    "Hi! I'm Joshua Fisher, a software engineering student at Chapman University. I love creating impactful applications and exploring new technologies. My passion lies in solving real-world problems through code and contributing to meaningful projects.",
  avatarUrl: "https://avatars.githubusercontent.com/josh-fisherr",
  personalWebsiteUrl: "",
  contact: {
    email: "joshfisher@chapman.edu",
    tel: "(301) 456-9500",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/josh-fisherr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joshua-m-fisherr",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Chapman University - Fowler School of Engineering",
      link: "https://www.chapman.edu/engineering/index.aspx",
      degree: "Bachelor of Science in Software Engineering, Minor in Entrepreneurship",
      start: "Aug 2022",
      end: "May 2026",
      courses: [
        "Multi-variable Calculus",
        "Discrete Mathematics",
        "Linear Algebra",
        "Data Structures & Algorithms",
        "Python, Java, C++",
      ],
    },
  ],
  work: [
    {
      company: "Bathroom Hub",
      link: "",
      badges: ["Founder", "iOS Developer"],
      title: "Swift, Firebase, Firestore",
      logo: "",
      start: "June 2024",
      end: "Present",
      description:
        "Designed and developed 'Bathroom Hub,' an iOS app enabling users to find and share bathroom access codes. Integrated Apple Maps for location tracking and used Firebase for secure data storage.",
    },
    {
      company: "Chapman University GCI Lab",
      link: "",
      badges: ["3D Printing Specialist"],
      title: "Lab Assistant",
      logo: "",
      start: "Jan 2023",
      end: "Present",
      description:
        "Assisted student teams in designing and prototyping GCI projects. Supervised equipment like 3D printers, laser cutters, and CNC machines, ensuring safety and proper usage.",
    },
    {
      company: "Lexploration LLC.",
      link: "",
      badges: ["iOS Development Intern"],
      title: "Swift Developer",
      logo: "",
      start: "May 2021",
      end: "June 2021",
      description:
        "Collaborated on mental health-focused apps, learning Swift and improving UX design. Enhanced Ace Parking's interface for user accessibility and applied user-centered design principles to improve usability.",
    },
    {
      company: "Sage IT",
      link: "",
      badges: ["Technician"],
      title: "Remote & Onsite Support",
      logo: "",
      start: "Jan 2021",
      end: "June 2022",
      description:
        "Resolved technical issues for over 100 clients. Specialized in networking and software troubleshooting, and improved client satisfaction with consistent follow-ups.",
    },
  ],
  skills: [
    "C++",
    "Python",
    "Java",
    "Swift",
    "Docker",
    "Git",
    "Firebase",
    "Linux",
    "Cloud Firestore",
    "3D Printing",
    "Laser Cutting",
    "CNC Machines",
  ],
  projects: [
    {
      title: "Bathroom Hub",
      techStack: ["Swift", "Firebase", "Firestore"],
      description:
        "Location-based iOS app for users to find bathroom access codes. Features real-time updates and integrates Apple Maps for navigation.",
      logo: "",
      link: {
        label: "GitHub Repo",
        href: "https://github.com/josh-fisherr",
      },
    },
    {
      title: "Oil Sensor Development",
      techStack: ["C++"],
      description:
        "Developed a robot to detect weak points in oceanic oil pipelines. Designed and tested sensors to identify variations in metal thickness, contributing to environmental safety by detecting potential pipeline failures.",
      logo: "",
      link: {
        label: "LinkedIn Post",
        href: "https://www.linkedin.com/in/joshua-m-fisherr",
      },
    },
  ],
} as const;
