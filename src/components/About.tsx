export function About() {
  return (
    <section className="py-32 bg-surface-container-low px-8" id="about">
      <div className="max-w-7xl mx-auto editorial-grid">

        {/* Left column — text only. Headings/paragraphs scaled to exactly 1.2× original */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          {/* Original: text-4xl → 1.2× = text-5xl (4 × 1.2 = 4.8 → nearest = 5xl) */}
          <h2 className="font-headline text-5xl font-bold mb-8 text-on-surface">About Me</h2>
          {/* Original: text-lg (1.125rem) → 1.2× = 1.35rem — use [1.35rem] */}
          <p className="text-on-surface-variant text-[1.35rem] leading-relaxed mb-6">
            I'm a BS Computer Science student at GC University Faisalabad with a 3.8+ CGPA. I've completed a full-stack development internship and built real-world web applications using the MERN stack.
          </p>
          <p className="text-on-surface-variant text-[1.35rem] leading-relaxed">
            I focus on writing clean, maintainable code, building responsive interfaces, and delivering functional software. I'm actively seeking junior software engineering or MERN stack internship opportunities.
          </p>
          <div className="flex gap-6 pt-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors text-[1.35rem]" href="https://github.com/TALHA2495" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-[1.35rem]" href="https://www.linkedin.com/in/talha-javed-005b24328" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-[1.35rem]" href="mailto:tjaveed507@gmail.com">Email</a>
          </div>
        </div>

        {/* Right column — image only */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-center justify-center">
          <div className="w-full overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="/assets/images/about-picture.png"
              alt="Talha Javed — MERN Stack Developer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
