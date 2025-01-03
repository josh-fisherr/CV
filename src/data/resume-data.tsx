import { GitHubIcon, LinkedInIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Joshua Fisher",
  initials: "JF",
  location: "Chapman University @ Orange, CA",
  locationLink: "https://maps.app.goo.gl/9wEgD3dtC7e1aaj57",
  about:
    "Software Engineering Student | Passionate about using technology to help people | Founder of Bathroom Hub iOS App | Experienced in C++, Python, Swift, and cloud technologies",
  summary: (
    <>
      Hi! I'm Joshua Fisher, a software engineering student at Chapman University. 
      I love creating impactful applications and exploring new technologies. My passion lies in solving real-world problems through code and contributing to meaningful projects.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/josh-fisherr",
  personalWebsiteUrl: "https://josh-fisherr.vercel.app",
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
      logo: "", // Placeholder for a logo
      start: "June 2024",
      end: "Present",
      description: (
        <>
          Designed and developed 'Bathroom Hub,' an iOS app enabling users to find and share bathroom access codes.
          <ul>
            <li>Integrated Apple Maps for location tracking</li>
            <li>Used Firebase for secure data storage</li>
          </ul>
        </>
      ),
    },
    {
      company: "Chapman University GCI Lab",
      link: "",
      badges: ["3D Printing Specialist"],
      title: "Lab Assistant",
      logo: "", // Placeholder for a logo
      start: "Jan 2023",
      end: "Present",
      description: (
        <>
          Assisted student teams in designing and prototyping GCI projects.
          <ul>
            <li>Supervised equipment like 3D printers, laser cutters, and CNC machines</li>
            <li>Ensured safety and proper equipment usage</li>
          </ul>
        </>
      ),
    },
    {
      company: "Lexploration LLC.",
      link: "",
      badges: ["iOS Development Intern"],
      title: "Swift Developer",
      logo: "", // Placeholder for a logo
      start: "May 2021",
      end: "June 2021",
      description: (
        <>
          Collaborated on mental health-focused apps, learning Swift and improving UX design.
          <ul>
            <li>Enhanced Ace Parking's interface for user accessibility</li>
            <li>Applied user-centered design principles to improve app usability</li>
          </ul>
        </>
      ),
    },
    {
      company: "Sage IT",
      link: "",
      badges: ["Technician"],
      title: "Remote & Onsite Support",
      logo: "", // Placeholder for a logo
      start: "Jan 2021",
      end: "June 2022",
      description: (
        <>
          Resolved technical issues for over 100 clients.
          <ul>
            <li>Specialized in networking and software troubleshooting</li>
            <li>Improved client satisfaction with consistent follow-ups</li>
          </ul>
        </>
      ),
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
      description: (
        <>
          Location-based iOS app for users to find bathroom access codes.
          <ul>
            <li>Features real-time updates</li>
            <li>Integrated Apple Maps for navigation</li>
          </ul>
        </>
      ),
      logo: "", // Placeholder for a logo
      link: {
        label: "GitHub Repo",
        href: "https://github.com/josh-fisherr",
      },
    },
    {
      title: "Oil Sensor Development",
      techStack: ["C++"],
      description: (
        <>
          Developed a robot to detect weak points in oceanic oil pipelines.
          <ul>
            <li>Designed and tested sensors to identify variations in metal thickness</li>
            <li>Contributed to environmental safety by detecting potential pipeline failures</li>
          </ul>
        </>
      ),
      logo: "", // Placeholder for a logo
      link: {
        label: "LinkedIn Post",
        href: "https://www.linkedin.com/in/joshua-m-fisherr",
      },
    },
  ],
} as const;
