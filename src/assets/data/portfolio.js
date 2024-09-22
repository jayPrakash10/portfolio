import DC1 from "../portfolio/dc-chat.png";
import DC2 from "../portfolio/dc-home.png";
import DC3 from "../portfolio/dc-search.png";
import DC4 from "../portfolio/dc-login.png";
import DC5 from "../portfolio/dc-signup.png";

import ANK1 from "../portfolio/aankade-1.png";
import ANK2 from "../portfolio/aankade-2.png";
import ANK3 from "../portfolio/aankade-3.png";
import ANK4 from "../portfolio/aankade-4.png";
import ANK5 from "../portfolio/aankade-5.png";

import ANG1 from "../portfolio/ang-login.png";
import ANG2 from "../portfolio/ang-signup.png";
import ANG3 from "../portfolio/ang-home.png";

import BS1 from "../portfolio/books-1.png";
import BS2 from "../portfolio/books-2.png";

import TTT1 from "../portfolio/ss_ttt_welcome.png";
import TTT2 from "../portfolio/ss_ttt_game.png";
import TTT3 from "../portfolio/ss_ttt_player_turn.png";
import TTT4 from "../portfolio/ss_ttt_winner.png";

import M1 from "../portfolio/media-1.png";
import M2 from "../portfolio/media-2.png";

import TD1 from "../portfolio/todo-list.png";
import TD2 from "../portfolio/todo-grid.png";
import TD3 from "../portfolio/todo-task.png";
import TD4 from "../portfolio/todo-add.png";

export const portfolio = [
  {
    projectName: "Aankade",
    images: [ANK2, ANK3, ANK1, ANK4, ANK5],
    client: "Aankade",
    url: "https://aankade.com/",
    description: "",
    slug: "aankade",
    tech: { front: "Angular", style: "CoreUI" },
  },
  {
    projectName: "Chat App",
    images: [DC1, DC2, DC3, DC4, DC5],
    client: "Self",
    url: "https://demochat-web.web.app",
    description: "",
    slug: "realtime-chat",
    tech: { front: "React", style: "Bootstrap", back: "Firestore/Firebase" },
  },
  {
    projectName: "Todo List",
    images: [TD1, TD2, TD3,  TD4],
    client: "Self",
    url: "https://todo-task-manager.web.app/",
    description: "",
    slug: "todo-tasks",
    tech: { front: "React", style: "Tailwind" },
  },
  // {
  //   projectName: "Chat Mobile App",
  //   images: [],
  //   client: "",
  //   url: "",
  //   description: "",
  //   slug: "aankade",
  //   tech: { front: "React Native", style: "" },
  // },
  {
    projectName: "SignIn/SignUp Page in Angular",
    images: [ANG1, ANG2, ANG3],
    client: "Self",
    url: "https://angular-signinsignup.web.app",
    description: "",
    slug: "angular-signin",
    tech: { front: "Angular", style: "CSS" },
  },
  {
    projectName: "Books Search App",
    images: [BS2, BS1],
    client: "Self",
    url: "https://bookstoremanager.web.app",
    description: "",
    slug: "bookapp",
    tech: { front: "React", style: "Bootstrap" },
  },
  {
    projectName: "Tic-Tac-Toe in Flutter",
    images: [TTT1, TTT2, TTT3, TTT4],
    client: "Self",
    url: "",
    description: "",
    slug: "flutter-tictactoe",
    tech: { front: "Flutter" },
  },
  {
    projectName: "Rearrange/Sort feature",
    images: [M1, M2],
    client: "Self",
    url: "https://imagearranger.web.app",
    description: "",
    slug: "sort-media",
    tech: { front: "React", style: "Bootstrap" },
  },
];
