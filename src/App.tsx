import imgUrl from "./me.jpg";
import "./App.css";
import '../node_modules/devicon/devicon.min.css';
import { background, backgroundAlt } from "./theme.js";
import { ReactNode, useEffect, useRef, useState } from "react";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;

/**
 * A hook which updates the background and text color of a ref on an interval to appear like a 
 * blinking terminal cursor. In general, the ref should be set on a span containing one character
 * of monospaced text to appear correctly.
 * @returns the ref
 */
const useCursor = () => {
  const cursor = useRef(null);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (blink) {
      (cursor.current as unknown as HTMLElement).style.backgroundColor = "black";
      (cursor.current as unknown as HTMLElement).style.color = "white";
      return;
    }
    (cursor.current as unknown as HTMLElement).style.backgroundColor = "unset";
      (cursor.current as unknown as HTMLElement).style.color = "black";
  }, [blink])

  useEffect(() => {
    const id = setInterval(() => {
     setBlink(prev => !prev); 
    }, 700)
    return () => {
      clearInterval(id);
    }
  })
  return cursor;
}

const Header = () => {
  const cursor = useCursor();

  return (
    <>
      <div
        className={`h-screen grid grid-cols-1 content-center text-center ${background}`}
      >
        <p className="text-6xl">👨‍💻</p>
        <h1 className="text-2xl">
          <p>Justin Mancusi</p>
        </h1>
        <p className="font-mono">FULL-STACK SOFTWARE ENGINEE<span ref={cursor}>R</span></p>
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <div className={`h-full text-center ${backgroundAlt} pb-12 max-w-5xl mx-auto`}>
      <h1 className="text-2xl p-8">About Me</h1>
      <div className="flex flex-col sm:flex-row justify-evenly gap-12 px-2">
        <img className={"w-80 rounded mx-auto"} alt={"A picture of myself."} src={imgUrl}/>
        <div className={"text-left max-w-2xl"}>
          <p>
            👋 I'm Justin Mancusi. I'm a full-stack software engineer who graduated in 2018 with
            bachelor's degrees in Computer Science and Mathematics from the University of Virginia.
            I love solving scalability problems, hacking on new technologies, and building out great
            tooling for other developers. I currently work at Yext on a number of web
            apps and microservices mainly built with React, Go, and Java. 
          </p>
          <br />
          <p>
            When I'm not at work I like to read about science and history, hike in Shenandoah
            National Park, enjoy a craft beer, and support the Hoos — particularly in college
            basketball.
          </p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="h-full text-center grid bg-zinc-800 text-white pb-4">
      <h1 className="text-2xl pt-8">Skills</h1>
      <SkillRow>
        <SkillCard skill={"Go"} />
        <SkillCard skill={"Java"} />
        <SkillCard skill={"Python"} />
        <SkillCard skill={"Javascript"} />
        <SkillCard skill={"Typescript"} />
        <SkillCard skill={"MySQL"} />
        <SkillCard skill={"React"} />
        <SkillCard skill={"Kafka"} deviconClass={"apachekafka"} />
        {/* <SkillCard skill={"Bazel"} /> */}
        <SkillCard skill={"Kubernetes"} />
        <SkillCard skill={"Docker"} />
        <SkillCard skill={"Bash"} />
      </SkillRow>
    </div>
  )
}

const SkillRow = ({children}: {children: ReactNode}) => {
  return (
      <div className="flex flex-wrap justify-center gap-2 pt-2">
        {children}
      </div>
  )
} 

const SkillCard = ({ skill, deviconClass }: { skill: string, deviconClass?: string }) => {
  let iconClass = deviconClass || skill;
  return (
    <div className="bg-zinc-700 rounded-md p-2 w-24 text-sm">
    <div className={`text-3xl devicon-${iconClass.toLowerCase()}-plain`} />
    <div className="pt-2">{skill}</div>
    </div>
  )
}

const Experience = () => {
  return (
    <div className={`h-80 flex justify-center ${background}`}>
      PLACEHOLDER EXPERIENCE CONTENT
    </div>
  )
}

const Footer = () => {
  return (
    <div className={`h-full bg-black text-white flex flex-column justify-center text-xl content-evenly pt-10 pb-10`}>
      <div className="flex w-40 justify-evenly">
        <a href="https://www.linkedin.com/in/mancusi/" className="devicon-linkedin-plain" />
        <a href="https://github.com/mancusi/" className="devicon-github-plain" />
        <a href="http://twitter.com/justinmancusi" className="devicon-twitter-plain" />
      </div>
    </div>
  )
}