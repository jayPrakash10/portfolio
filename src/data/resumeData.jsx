import AngularIcon from "../assets/angular.png";
import BootstrapIcon from "../assets/bootstrap.png";
import CSSIcon from "../assets/css.png";
import ExpressIconDark from "../assets/express-dark.png";
import ExpressIconLight from "../assets/express-light.png";
import FlutterIcon from "../assets/flutter.png";
import GitHubIconDark from "../assets/github-dark.png";
import GitHubIconLight from "../assets/github-light.png";
import HTMLIcon from "../assets/html.png";
import JavaScriptIcon from "../assets/javascript.png";
import MongoDBIcon from "../assets/mongodb.png";
import NodeIcon from "../assets/nodejs.png";
import ReactIcon from "../assets/react.png";
import TailwindIcon from "../assets/tailwind.png";
import ProfileImage from "../assets/JP.PNG";

import NBLogo from "../assets/nb-logo.png";
import NB1 from "../assets/projects/nb-1.png";
import NB2 from "../assets/projects/nb-2.png";
import NB3 from "../assets/projects/nb-3.png";
import NB4 from "../assets/projects/nb-4.png";
import NB5 from "../assets/projects/nb-5.png";
import NB6 from "../assets/projects/nb-6.png";
import NB7 from "../assets/projects/nb-7.png";
import NB8 from "../assets/projects/nb-8.png";
import NB9 from "../assets/projects/nb-9.png";
import NB10 from "../assets/projects/nb-10.png";

import ET1 from "../assets/projects/et-1.png";
import ET2 from "../assets/projects/et-2.png";
import ET3 from "../assets/projects/et-3.png";

import DC1 from "../assets/projects/dc-chat.png";
import DC2 from "../assets/projects/dc-home.png";
import DC3 from "../assets/projects/dc-search.png";
import DC4 from "../assets/projects/dc-login.png";
import DC5 from "../assets/projects/dc-signup.png";

import ANKLogo from "../assets/aankade-logo.png";
import ANK1 from "../assets/projects/aankade-1.png";
import ANK2 from "../assets/projects/aankade-2.png";
import ANK3 from "../assets/projects/aankade-3.png";
import ANK4 from "../assets/projects/aankade-4.png";
import ANK5 from "../assets/projects/aankade-5.png";
import ANK6 from "../assets/projects/aankade-6.png";

import ANG1 from "../assets/projects/ang-login.png";
import ANG2 from "../assets/projects/ang-signup.png";
import ANG3 from "../assets/projects/ang-home.png";

import BS1 from "../assets/projects/books-1.png";
import BS2 from "../assets/projects/books-2.png";

import TTT1 from "../assets/projects/ss_ttt_welcome.png";
import TTT2 from "../assets/projects/ss_ttt_game.png";
import TTT3 from "../assets/projects/ss_ttt_player_turn.png";
import TTT4 from "../assets/projects/ss_ttt_winner.png";

import M1 from "../assets/projects/media-1.png";
import M2 from "../assets/projects/media-2.png";

import TD1 from "../assets/projects/todo-list.png";
import TD2 from "../assets/projects/todo-grid.png";
import TD3 from "../assets/projects/todo-task.png";
import TD4 from "../assets/projects/todo-add.png";

import OIGLogo from "../assets/oig-logo.png";
import OIG1 from "../assets/projects/oig-1.png";
import OIG2 from "../assets/projects/oig-2.png";
import OIG3 from "../assets/projects/oig-3.png";

// Material Icons
import { Api, Laptop, PhoneAndroid, Storage } from "@mui/icons-material";
import { Header, Li, Paragraph, Ul } from "../components/ProjectTypograph";

export const resumeData = {
  personalInfo: {
    name: {
      firstName: "Jay Prakash",
      lastName: "Kumar",
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    title: "Full Stack Developer",
    profileImage: ProfileImage,
    dob: "01-11-1998",
    email: "10125prakash@gmail.com",
    phone: {
      country: "IN",
      areaCode: "+91",
      number: "6361479764",
      get phoneNumber() {
        return `${this.areaCode} ${this.number}`;
      },
      get callURL() {
        return `tel:${this.areaCode}${this.number}`;
      },
      get whatsappURL() {
        return `https://wa.me/${this.areaCode}${this.number}`;
      },
    },
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      get fullAddress() {
        return `${this.city}, ${this.state}, ${this.country}`;
      },
    },
    images: [],
    summary:
      "I am Web developer located in Bengaluru, Karnataka. I have experience of working in React, Angular and NextJS in frontend, and NodeJs, Express and Firebase data storage in backend. \
      <br/><br/> I am passionate about developing user friendly websites. I have all the skills to develop quality website and improve existing website. \
      <br/><br/> I am looking to take on more work and to increase my skills as a Web Developer.",
  },

  links: {
    github: "https://github.com/jayPrakash10",
    linkedin: "https://www.linkedin.com/in/jay-prakash-6a7807190/",
    resume:
      "https://drive.google.com/uc?export=download&id=1Cz25TUF3WrwYbwOSi-BH9Ezp--JUlF9n",
  },

  services: [
    {
      icon: <Laptop color="primary" sx={{ fontSize: 80 }} />,
      title: "Web Development",
      description:
        "Building responsive and interactive web applications using modern frameworks.",
    },
    {
      icon: <Storage color="primary" sx={{ fontSize: 80 }} />,
      title: "Backend Development",
      description:
        "Designing and implementing robust server-side applications.",
    },
    {
      icon: <Api color="primary" sx={{ fontSize: 80 }} />,
      title: "API Development",
      description:
        "Creating RESTful APIs and integrating them with frontend applications.",
    },
    {
      icon: <PhoneAndroid color="primary" sx={{ fontSize: 80 }} />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with Flutter for both iOS and Android platforms.",
    },
  ],

  experience: [
    {
      company: "Atomic House",
      position: "Frontend Developer Intern",
      location: "Remote",
      description:
        "Engineered an URL bookmarking web app and browser extension, utilizing modern technologies and solving complex problems to improve team workflow and organization. Utilized an AI tool to accelerate workflow, leading to an 80% increase in project completion speed. Simultaneously, managed a shopify store for a client.",
      website: "",
      skills: [
        "NextJS",
        "Tailwind CSS",
        "Node.js",
        "TypeScript",
        "REST API",
        "Google Maps API",
        "GitHub",
        "Shopify",
      ],
      duration: {
        start: "Oct 2024",
        end: "May 2025",
        get duration() {
          return `${this.start} - ${this.timePeriod}`;
        },
        get timePeriod() {
          return this.end === "" ? "Present" : this.end;
        },
      },
    },
    {
      company: "Codolin Technologies",
      position: "Associate Web Developer",
      location: "Bengaluru, Karnataka",
      description:
        "Delivered tailored solutions to meet client requirements by developing a diverse range of features, ensuring high client satisfaction and project success. Developed and implemented reusable code modules, which reduced development time by 20% and improved team efficiency. Spearheaded the integration of the latest technology into all project upgrades, ensuring the codebase remained modern, secure, and performant.",
      website: "",
      skills: [
        "ReactJS",
        "Angular",
        "Bootstrap",
        "Node.js",
        "REST API",
        "Facebook API",
        "GitHub",
      ],
      duration: {
        start: "Jun 2022",
        end: "Feb 2024",
        get duration() {
          return `${this.start} - ${this.timePeriod}`;
        },
        get timePeriod() {
          return this.end === "" ? "Present" : this.end;
        },
      },
    },
    {
      company: "Vitra.ai",
      position: "Full Stack Developer Intern",
      location: "Remote",
      description:
        "Enhanced application performance and functionality by leveraging modern tools and frameworks such as NextJS and NestJS. Contributed to the development of a scalable web architecture, working alongside a team of developers to build a robust foundation for future growth.",
      website: "",
      skills: [
        "NextJS",
        "NestJS",
        "TypeScript",
        "REST API",
        "Node.js",
        "Express",
        "MySQL",
        "GitHub",
      ],
      duration: {
        start: "Dec 2021",
        end: "May 2022",
        get duration() {
          return `${this.start} - ${this.timePeriod}`;
        },
        get timePeriod() {
          return this.end === "" ? "Present" : this.end;
        },
      },
    },
  ],

  education: [
    {
      institution: "",
      degree: "",
      duration: "",
      description: "",
    },
  ],

  skills: {
    technical: [
      {
        name: "React",
        level: "Intermediate",
        icon: {
          light: ReactIcon,
          dark: ReactIcon,
        },
      },
      {
        name: "Angular",
        level: "Intermediate",
        icon: {
          light: AngularIcon,
          dark: AngularIcon,
        },
      },
      {
        name: "Tailwind CSS",
        level: "Intermediate",
        icon: {
          light: TailwindIcon,
          dark: TailwindIcon,
        },
      },
      {
        name: "Bootstrap",
        level: "Intermediate",
        icon: {
          light: BootstrapIcon,
          dark: BootstrapIcon,
        },
      },
      {
        name: "HTML",
        level: "Intermediate",
        icon: {
          light: HTMLIcon,
          dark: HTMLIcon,
        },
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        icon: {
          light: JavaScriptIcon,
          dark: JavaScriptIcon,
        },
      },
      {
        name: "CSS",
        level: "Intermediate",
        icon: {
          light: CSSIcon,
          dark: CSSIcon,
        },
      },
      {
        name: "GitHub",
        level: "Intermediate",
        icon: {
          light: GitHubIconLight,
          dark: GitHubIconDark,
        },
      },
      {
        name: "MongoDB",
        level: "Intermediate",
        icon: {
          light: MongoDBIcon,
          dark: MongoDBIcon,
        },
      },
      {
        name: "Node.js",
        level: "Intermediate",
        icon: {
          light: NodeIcon,
          dark: NodeIcon,
        },
      },
      {
        name: "Express.js",
        level: "Intermediate",
        icon: {
          light: ExpressIconLight,
          dark: ExpressIconDark,
        },
      },
      {
        name: "Flutter",
        level: "Intermediate",
        icon: {
          light: FlutterIcon,
          dark: FlutterIcon,
        },
      },
    ],
    soft: [
      "Problem Solving",
      "Team Work",
      "Good Listener",
      "Adaptability",
      "Self Learning",
    ],
  },

  projects: [
    {
      id: "newboard",
      logo: NBLogo,
      name: "NewBoard",
      technologies: {
        frontend: "NextJS",
        styling: "Tailwind CSS",
        uiLibrary: "HeroUI",
      },
      website: "https://newboard.io/",
      images: [NB1, NB2, NB3, NB4, NB5, NB6, NB7, NB8, NB9, NB10],
      shortDescription: "Save and manage your favorite urls",
      description: (
        <div className="space-y-4">
          <Header>Overview</Header>
          <Paragraph>
            Newboard is an innovative web-based platform designed to
            revolutionize how users save, organize, and manage website URLs,
            functioning as a highly advanced and collaborative bookmarking tool.
            Beyond simple link saving, Newboard provides robust features for
            categorization, multiple viewing options, and sophisticated team
            management capabilities, making it an ideal solution for individuals
            and teams seeking an efficient way to curate and share web
            resources.
          </Paragraph>
          <Header>Features</Header>
          <Ul>
            <Li>
              <strong>Boards and List :</strong> Users can organize their saved
              links into Boards and List, allowing for logical grouping of
              related content. Additionally, an Unsorted section provides
              flexibility for quick saves.
            </Li>
            <Li>
              <strong>Layout View :</strong> Newboard offers multiple visual
              representations (List View, Grid View, and Card View) for saved
              links, catering to different user preferences.
            </Li>
            <Li>
              <strong>Drag and Drop :</strong> Users can intuitively rearrange,
              categorize, or move links between lists and boards using a
              seamless drag-and-drop interface.
            </Li>
            <Li>
              <strong> Team Management :</strong> Newboard facilitates
              collaborative link management with robust team features.
            </Li>
          </Ul>
        </div>
      ),
    },
    {
      id: "aankade",
      logo: ANKLogo,
      name: "Aankade",
      technologies: {
        frontend: "Angular",
        styling: "CoreUI",
      },
      website: "https://aankade.com/",
      images: [ANK6, ANK2, ANK3, ANK1, ANK4, ANK5],
      shortDescription:
        "Web app to link and schedule post on your social media platform",
      description: (
        <div className="space-y-4">
          <Header>Overview</Header>
          <Paragraph>
            Aankade is a robust web application meticulously designed to
            streamline the process of scheduling posts across various social
            media platforms. It serves as a comprehensive solution for
            individuals, businesses, and marketing teams aiming to optimize
            their social media presence, maintain consistent engagement, and
            efficiently manage their content calendar.
          </Paragraph>
          <Header>Features</Header>
          <Ul>
            <Li>
              <strong>Social Platform Linking :</strong> Users can securely
              connect their various social media accounts (e.g., Facebook,
              Twitter, Instagram, LinkedIn) to Aankade. This involves
              OAuth-based authorization flows, allowing the application to post
              on behalf of the user without storing their direct credentials.
            </Li>
            <Li>
              <strong>Scheduling Posts :</strong> The core functionality enables
              users to compose posts and schedule them for future publication
              across one or multiple linked social media accounts. This includes
              options for setting specific dates and times, attaching media
              (images, videos), and previewing content before scheduling.
            </Li>
            <Li>
              <strong>Event Management Calendar :</strong> A highly intuitive
              calendar interface provides a visual overview of all scheduled
              posts. Users can easily view upcoming content, and identify gaps
              in their content strategy, offering a comprehensive content
              planning tool.
            </Li>
            <Li>
              <strong>Statistics :</strong> The platform provides analytics and
              performance metrics for published posts. Users can view key
              statistics such as reach, engagement rates (likes, comments,
              shares), and audience demographics, enabling them to assess
              content effectiveness and refine their social media strategy.
            </Li>
          </Ul>
        </div>
      ),
    },
    {
      id: "expense-tracker",
      name: "Expense Analyzer",
      technologies: {
        frontend: "NextJS",
        styling: "Shadcn UI",
        charts: "Recharts",
        backend: "NodeJS",
        database: "MongoDB",
      },
      website: "https://jayprakash10.github.io/expense-front",
      images: [ET1, ET2, ET3],
      shortDescription: "Track and analyse your expenses",
      description: (
        <div className="space-y-4">
          <Header>Overview</Header>
          <Paragraph>
            The Expense Analyzer is a comprehensive web application designed to
            empower users with robust tools for managing their personal
            finances. It provides an intuitive platform to effortlessly add,
            meticulously track, and gain insightful analysis of income and
            expenditure.
          </Paragraph>
          <Header>Features</Header>
          <Ul>
            <Li>
              <strong>Income vs. Expense :</strong> The application provides
              clear, visual comparisons between a user's total income and total
              expenses over specified periods
            </Li>
            <Li>
              <strong>Expense Categories :</strong> Users can define and assign
              custom categories to their expenses (e.g., "Groceries,"
              "Utilities," "Entertainment," "Transportation"). This feature
              allows for detailed organization of spending, making it easier to
              track where money is going and identify areas for potential
              savings.
            </Li>
            <Li>
              <strong>Quick Add :</strong> A streamlined interface enables users
              to rapidly input new expenses or income transactions with minimal
              effort.
            </Li>
            <Li>
              <strong>Insightful Analysis :</strong> Beyond simple tracking, the
              Expense Analyzer offers detailed statistical breakdowns and
              reports.
            </Li>
          </Ul>
        </div>
      ),
    },
    {
      id: "chat",
      name: "Realtime Chat App",
      technologies: {
        frontend: "React",
        styling: "Bootstrap",
        backend: "Firebase",
      },
      website: "https://demochat-web.web.app",
      images: [DC1, DC2, DC3, DC4, DC5],
      shortDescription: "Realtime chat app using firebase",
      description: (
        <div className="space-y-4">
          <Header>Overview</Header>
          <Paragraph>
            The Realtime Chat App is designed to facilitate instant
            communication between users. It provides a seamless platform for
            real-time messaging, enabling individuals to connect, converse, and
            share information instantaneously. Built with a focus on
            responsiveness and user experience, this application addresses the
            fundamental need for immediate digital interaction, whether for
            personal conversations or collaborative discussions.
          </Paragraph>
        </div>
      ),
    },
    {
      id: "online-invoise",
      logo: OIGLogo,
      name: "Free Online Invoice Generator",
      technologies: {
        frontend: "Angular",
        styling: "Bootstrap",
      },
      website: "https://www.freeonlineinvoicegenerator.com/",
      images: [OIG1, OIG2, OIG3],
      shortDescription: "Simple pure JavaScript based invoice generator",
      description: (
        <div className="space-y-4">
          <Header>Overview</Header>
          <Paragraph>
            The Online Invoice Generator is a lightweight and efficient web
            application designed to provide a straightforward solution for
            generating invoices. Developed with a focus on simplicity and direct
            functionality, this tool empowers users to quickly input billing
            details and instantly produce a printable PDF invoice based on a
            single, clean template. Its pure JavaScript foundation ensures a
            responsive and client-side driven experience.
          </Paragraph>
        </div>
      ),
    },
    {
      id: "angular-auth",
      name: "Angular Signin/Signup",
      technologies: {
        frontend: "Angular",
        styling: "CSS",
      },
      website: "https://angular-signinsignup.web.app",
      images: [ANG1, ANG2, ANG3],
      shortDescription: "Authentication form with form validation",
      description: (
        <div className="space-y-4">
          <Header>Overview</Header>
          <Paragraph>
            The Angular Signin/Signup Module is a fundamental web application
            component meticulously developed to provide a secure and
            user-friendly authentication experience. This project serves as a
            robust foundation for any web application requiring user
            registration and login functionalities, with a strong emphasis on
            client-side form validation, route protection, and responsive
            design.
          </Paragraph>
          <Header>Features</Header>
          <Ul>
            <Li>
              <strong>Form Validation :</strong> Implemented robust validation
              rules for all required input fields and provided visual cues and
              error messages to users, guiding them to correctly fill out the
              forms.
            </Li>
            <Li>
              <strong>Route Protection :</strong> Developed and integrated
              Angular Auth Guards to protect specific routes within the
              application. This ensures that only authenticated users can access
              certain pages, redirecting unauthorized users to the login page.
            </Li>
            <Li>
              <strong>Responsive Design :</strong> Designed the forms and
              overall layout to adapt seamlessly to various screen sizes, from
              large desktop monitors to tablets and mobile phones.
            </Li>
          </Ul>
        </div>
      ),
    },
    {
      id: "todo-list",
      name: "Todo List",
      technologies: {
        frontend: "React",
        styling: "Tailwind CSS",
      },
      website: "https://todo-task-manager.web.app/",
      images: [TD1, TD2, TD3, TD4],
      shortDescription:
        "Simple Todo List app with filter, sort and layout option",
      description: "",
    },
    {
      id: "tictactoe",
      name: "Tic Tac Toe",
      technologies: {
        frontend: "Flutter",
      },
      website: "",
      images: [TTT1, TTT2, TTT3, TTT4],
      shortDescription: "Tic Tac Toe Mobile game",
      description: "",
    },
  ],
};
