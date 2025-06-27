import { default as blob } from "../assets/blob.svg";
import ReactTypingEffect from "react-typing-effect";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import {default as vandaleng} from "../assets/vandaleng.png"

const Hero = () => {
  var code = `let button_menu = document.querySelector(".header_button");
let float_menu  = document.querySelector(".header_menu--float");
let line_top   = document.querySelector(".header_button_line--top");
let line_under = document.querySelector(".header_button_line--bottom");

button_menu.isSelected = false;

function addEffectWriting(element, time) {
  let element_array = element.innerText.split("");

  element.count     = 0;
  element.innerText = "";

  function writeSymbols() {
    element.innerText += element_array[element.count];
    element.count++;

    if (element.count <= element_array.length) {
      setTimeout(() => {
        writeSymbols();
      }, time);
    } else if (element.count >= element_array.length) {
      element.count     = 0;
      element.innerText = "";

      writeSymbols();
    }
  }
  writeSymbols();
} 
`;
  return (
    <div
      id="about"
      className=" mx-auto	flex h-[100vh] flex-col justify-center overflow-hidden px-4 py-1 text-center md:flex-row md:items-center md:justify-between md:text-left lg:max-w-7xl"
    >
      <div className="py-4 md:w-1/2 md:flex-col">
        <p className="inline py-1 text-5xl font-black text-primary md:text-7xl">
          V
        </p>
        <ReactTypingEffect
          speed="300"
          typingDelay="150"
          eraseDelay="1000"
          className="py-1 text-5xl font-black text-primary md:text-7xl"
          text="anda Leng"
        />
        <h2 className="py-1 text-3xl font-bold">Web developer</h2>
        <p className="py-1 text-xl md:w-3/4">
         I'm a web developer with a strong foundation in front-end technologies and a passion 
         for building responsive, user-friendly websites. I enjoy creating clean, modern designs 
         and delivering great user experiences through UI/UX best practices.
        </p>
        <div className="flex items-center justify-center gap-4 py-4 md:justify-start md:py-6">
          <a
            className="inline-flex items-center gap-2"
            href="https://github.com/VandaLeng"
          >
            <GoMarkGithub className="text-2xl" />
          </a>
          <a
            className="inline-flex items-center gap-2"
            href="https://www.linkedin.com/in/vanda-leng-5bb8b5344/"
          >
            <BsLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="relative whitespace-pre text-[.50rem] text-primary text-opacity-30 md:text-base">
          {code}
          <img
            className="absolute top-0 left-0 w-full "
            src={blob}
            alt="blob"
            
          />
          {/* Extra Large Circular Profile Image */}
          <img
            className="absolute top-[45%] left-1/2 w-[300px] h-[400px] object-cover z-10 transform -translate-x-1/2 -translate-y-1/2"
            src={vandaleng}
            alt="Vanda Leng"
          />

        </div>
      </div>
    </div>
  );
};

export default Hero;
