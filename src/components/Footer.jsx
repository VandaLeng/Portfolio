import { HiMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="contact"
      className="mx-auto flex flex-col justify-center gap-8 p-4 pb-8 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Contact Me
      </h1>
      <div className="w-full md:flex md:flex-row md:justify-between md:gap-5 md:px-4">
        <a href="#">
          <h2 className="font-impact text-3xl">
            <span className="text-primary">&lt;V</span>anda
            <span className="text-primary">/&gt; </span>
          </h2>
        </a>
        <div className="flex flex-col items-center gap-4 py-4 md:flex-row md:py-0">
          <a
            className="inline-flex items-center gap-2"
            href="https://github.com/VandaLeng"
          >
            <GoMarkGithub /> Vanda_L
          </a>
          <a
            className="inline-flex items-center gap-2"
             href="https://www.linkedin.com/in/vanda-leng-5bb8b5344/"
          >
            <BsLinkedin /> Vanda Leng
          </a>
          <a
            className="inline-flex items-center gap-2"
            href="vandaleng21@gmail.com"
          >
            <HiMail /> vandaleng21@gmail.com
          </a>
        </div>
      </div>
      <h1 className="py-2 text-xs font-bold text-primary">
        Design Inspired by
        <a
          href="https://www.figma.com/@ontalex"
          className="hover:text-secondary"
        >
          {" "}
          Ontalex
        </a>{" "}
        & built by{" "}
        <a
          className="hover:text-secondary"
          href="https://github.com/Yomna-J/Portfolio"
        >
          Vanda Leng
        </a>
      </h1>
    </div>
  );
};

export default Footer;
