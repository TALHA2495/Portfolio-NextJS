"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Defined at module scope so the useEffect closure is never stale
const WORDS = ["MERN Stack Developer", "Software Engineer"];

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % WORDS.length;
      const fullText = WORDS[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && text === fullText) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typeSpeed = 500;
      }

      timer = setTimeout(handleType, typeSpeed);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="min-h-screen pt-32 pb-16 px-8 relative overflow-hidden flex items-center" id="home">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/5 blur-[150px] rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute inset-0 opacity-10 bg-dot-grid"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10 editorial-grid">
        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-label text-primary tracking-[0.2em] text-xs uppercase mb-4 block">Junior Software Engineer | CS Undergraduate</span>
          <h1 className="font-headline text-[clamp(3rem,8vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-8">
            TALHA <span className="text-outline-variant">JAVED</span>
            <br />
            <span className="text-primary font-serif font-normal lowercase tracking-normal border-r-[3px] border-primary animate-blink pr-1">
              {text}
            </span>
          </h1>
          <p className="text-on-surface-variant text-xl md:text-lg max-w-3xl mb-6 font-medium leading-relaxed">
            Computer Science undergraduate with hands-on experience building full-stack web applications using <span className="text-on-surface underline decoration-primary/40 underline-offset-4">React.js, Node.js, Express.js, and MongoDB</span>. Passionate about creating responsive user interfaces, building clean REST APIs, and solving real-world problems through code.
          </p>
          <div className="flex items-center gap-2 mb-8 text-on-surface-variant font-label text-sm uppercase tracking-wider">
            <span>📍 Faisalabad, Pakistan</span>
          </div>
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="#projects"
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-4 py-4 rounded-lg font-bold text-lg shadow-lg shadow-primary/10 transition-transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="bg-surface-container-high border border-outline-variant/20 text-on-surface px-4 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-colors"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React.js", "Node.js", "MongoDB", "Express.js", "Next.js", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-[10px] uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
