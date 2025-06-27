import { default as python } from "./assets/icons/python.svg";
import { default as html } from "./assets/icons/HTML5.svg";
import { default as css } from "./assets/icons/CSS3.svg";
import { default as php } from "./assets/icons/PHP.svg";
import { default as react } from "./assets/icons/react.svg";
import { default as bootstrap } from "./assets/icons/bootstrap.svg";
import { default as canva } from "./assets/icons/canva.svg";
import { default as figma } from "./assets/icons/figma.svg";
import { default as mysql } from "./assets/icons/mysql.svg";
import { default as phpmyadmin } from "./assets/icons/phpmyadmin.svg";
import { default as linux } from "./assets/icons/linux.svg";
import { default as vercel } from "./assets/icons/vercel.svg";
import { default as xampp } from "./assets/icons/xampp.svg";
import { default as tailwindcss } from "./assets/icons/tailwindcss.svg";
import { default as typescript } from "./assets/icons/typescript.svg";
import { default as nodejs } from "./assets/icons/nodejs.svg";
import { default as firebase } from "./assets/icons/firebase.svg";
import { default as laravel } from "./assets/icons/laravel.svg";
import { default as JavaScript } from "./assets/icons/javascript.svg";
import { default as oop } from "./assets/icons/oop.svg"
import { default as sass } from "./assets/icons/sass.svg"
import { default as vuejs } from "./assets/icons/vuejs.svg";
import { default as angular } from "./assets/icons/angular.svg";
import { default as postman } from "./assets/icons/postman.svg";
import { default as thundeclient } from "./assets/icons/thundeclient.svg";
import { default as mindomo } from "./assets/icons/mindomo.svg";
import { default as jira } from "./assets/icons/jira.svg";
import { default as git } from "./assets/icons/git.svg";
import { default as github } from "./assets/icons/github.svg";
import { default as netlify } from "./assets/icons/netlify.svg";
import { default as chatgpt } from "./assets/icons/chatgpt.svg";
import { default as vscode } from "./assets/icons/vscode.svg";
import { default as uml } from "./assets/icons/UML.svg";


const data = {
    languages: [
        { id: 2, alt: "Python", img: python },
        { id: 3, alt: "JavaScript", img: JavaScript },
        { id: 28, alt: "TypeScript", img: typescript },
        { id: 4, alt: "HTML5", img: html },
        { id: 5, alt: "CSS3", img: css },
        { id: 8, alt: "PHP", img: php },
    ],
    lib: [
        { id: 10, alt: "React JS", img: react },
        { id: 29, alt: "Tailwind CSS", img: tailwindcss },
        { id: 30, alt: "Node.js", img: nodejs },
        { id: 13, alt: "Bootstrap", img: bootstrap },
        { id: 35, alt: "Laravel", img: laravel },
        { id: 35, alt: "sass", img: sass },
        { id: 36, alt: "Vue.js", img: vuejs },
        { id: 37, alt: "Angular", img: angular },
        { id: 38, alt: "OOP", img: oop }, // No icon for OOP
    ],
    design: [
        { id: 14, alt: "canva", img: canva },
        { id: 16, alt: "Figma", img: figma },
    ],
    tools: [
        { id: 19, alt: "MySQL", img: mysql },
        { id: 20, alt: "phpMyAdmin", img: phpmyadmin },
        { id: 22, alt: "Linux", img: linux },
        { id: 26, alt: "Vercel", img: vercel },
        { id: 27, alt: "Xampp", img: xampp },
        { id: 31, alt: "Firebase", img: firebase },
        { id: 39, alt: "Postman", img: postman },
        { id: 40, alt: "Thunde Client", img: thundeclient },
        { id: 41, alt: "Mindomo", img: mindomo },
        { id: 42, alt: "Git", img: git },
        { id: 43, alt: "GitHub", img: github },
        { id: 44, alt: "Netlify", img: netlify },
        { id: 44, alt: "Jira", img: jira },
        { id: 44, alt: "Chatgpt", img: chatgpt },
        { id: 44, alt: "Vscode", img: vscode },
    ],
    project1: [


        { id: 16, alt: "Figma", img: figma },
        { id: 16, alt: "HTML%", img: html },
        { id: 16, alt: "CSS", img: css },
        { id: 16, alt: "SASS", img: sass },
        { id: 16, alt: "GIT", img: git },
        { id: 16, alt: "GITHUB", img: github },
        { id: 16, alt: "Netlify", img: netlify },
        { id: 34, alt: "ChatGPT API", img: chatgpt },
    ],
    project2: [
        { id: 10, alt: "TypeScript", img: typescript },
        { id: 10, alt: "UML", img: uml },
        { id: 10, alt: "OOP", img: oop },
        { id: 16, alt: "Nodejs", img: nodejs },
        { id: 34, alt: "Git", img: git },
        { id: 34, alt: "Git", img: github },
        { id: 34, alt: "ChatGPT API", img: chatgpt },

    ],
    project3: [
        { id: 10, alt: "Mysql", img: mysql },
        { id: 29, alt: "jira", img: jira },
        { id: 28, alt: "GIt", img: git },
        { id: 30, alt: "Github", img: github },
        { id: 31, alt: "PHP", img: php },
        { id: 16, alt: "Figma", img: figma },
        { id: 16, alt: "JavaScript", img: JavaScript },
        { id: 26, alt: "Css", img: css },
        { id: 26, alt: "HTML5", img: html },
        { id: 34, alt: "ChatGPT API", img: chatgpt },

    ],
    project4: [
        { id: 10, alt: "HTML", img: html },
        { id: 29, alt: "CSS", img: css },
        { id: 30, alt: "Javascript", img: JavaScript },
        { id: 34, alt: "ChatGPT API", img: chatgpt },
        { id: 34, alt: "Git", img: git },
        { id: 34, alt: "Github", img: github },
        { id: 34, alt: "Firebase", img: firebase }
    ],
    card1: [],
    card2: [],
    card3: [
        { id: 3, alt: "JavaScript", img: JavaScript },
        { id: 4, alt: "HTML5", img: html },
        { id: 13, alt: "Bootstrap", img: bootstrap },
    ],
    card4: [
        { id: 3, alt: "JavaScript", img: JavaScript },
        { id: 8, alt: "PHP", img: php },
        { id: 4, alt: "HTML5", img: html },
        { id: 19, alt: "MySQL", img: mysql },
        { id: 13, alt: "Bootstrap", img: bootstrap },
    ],

};

export default data;