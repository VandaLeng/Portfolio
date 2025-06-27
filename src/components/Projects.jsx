import p4 from "../assets/p4.png";
import p3 from "../assets/p3.png";
import p5 from "../assets/OOPImage.jpg";
import p6 from "../assets/Library.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/Note-taker.png";
import MiniProjectCard from "./ui/MiniProjectCard";
import { default as blob } from "../assets/blob.svg";
import data from "../data";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl">
        Projects
      </h1>
      {/* RECENT PROJECTS */}
      <ProjectCard
        title="Virtual Company One (VC1) Management System Project"
        subtitle="Full-stack Ecommerce"
        description="This project focused on building an internal management system for Virtual Company One (VC1) to streamline and automate the employee's team-related projects. The system allowed employees to submit, approve, or reject corporate events. We developed the system using PHP with the MVC (Model-View-Controller) structure and used a MySQL database to store data."
        picture={p1}
        github="https://github.com/Charyna-chab/VC1-Group8-Drink"
        tools={data.project3}
      />
      <ProjectCard
        title="OOP-Project(Movie Booking)"
        subtitle="Managing System"
        description="This project is developed to demonstrate concepts of Object-Oriented Programming (OOP). The main goal is to showcase OOP principles through code whose output is displayed in the console log."
        picture={p5}
        github="https://github.com/Seavmey-Yem/MovieBookingSystem-A3"
        tools={data.project2}
        isImageOnLeft={true}
      />
      <ProjectCard
        title="Project Note Taker (Note Taker App)"
        subtitle="Landing Page"
        description="A feature-rich note-taking application with cloud sync, reminders, and categorization. Available on both Android and iOS platforms with a clean, minimalist design. The app allows users to create, edit, and organize notes with rich text formatting, attach images, and set reminders. We implemented real-time synchronization across devices and offline functionality for a seamless user experience."
        picture={p2}
        github="https://github.com/Sokleap-Seng/project-Note-Taker-G5"
        tools={data.project4}
      />
      <ProjectCard
        title="PROJECT LIBRARY (static website interface)"
        subtitle="Static Website"
        description="Library Project (Static Website Interface), I worked from 21st September 2024 to 4th November 2024. My team and I developed a static website for the library CSA. We structured sections according to each user's needs and implemented a clean, modern design. We used HTML, CSS, and JavaScript to create a website that is made responsive for different devices."
        picture={p6}
        tools={data.project1}
        isImageOnLeft={true}
      />
      {/* OTHER PROJECTS */}
      <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2 lg:grid-cols-4">
        {/* PROJECT CARD */}
        <MiniProjectCard
          github="https://github.com/Yomna-J/public_transport_app_Flutter"
          picture="https://github.com/Yomna-J/public_transport_app_Flutter/raw/main/ui.jpg"
          title="Public Transport Application - UI"
          description="Mobile application that allows users to check available transports and buy tickets"
        >
          {data.card1.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/Yomna-J/habits_tracking_app_Flutter"
          picture="https://github.com/Yomna-J/habits_tracking_app_Flutter/raw/main/ui.jpg"
          title="Habits Tracking App - UI"
          description="Mobile application that shows the user's habits and activities"
        >
          {data.card2.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
          website="https://yomna-j.github.io/YoumnaJaza-CIS201/"
          picture={p3}
          title="Basic Portfolio - UI"
          description="A simple portfolio that shows skills and certificates"
        >
          {data.card3.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/Yomna-J/YoumnaJaza-SWE322"
          picture={p4}
          title="Fit Gym"
          description="A website that allows users to create an account to view and register in sport courses"
        >
          {data.card4.map((tool) => {
            return <img key={tool.id} alt={tool.alt} src={tool.img} />;
          })}
        </MiniProjectCard>
      </div>
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;