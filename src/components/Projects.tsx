import Link from "next/link";

export function Projects() {
  return (
    <section className="py-16 px-8 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-label text-primary tracking-[0.2em] text-xs uppercase mb-4 block">Selected Works</span>
          <h2 className="font-headline text-5xl font-bold tracking-tight">Product Showcase</h2>
        </div>
        <div className="space-y-32">
          {/* Project 1 */}
          <div className="grid grid-cols-1 lg:col-span-12 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-surface-container aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  alt="Nexus Platform" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD34K061JvZDlepQUgHq0zVRptsRKpeEGEhxyyuFdLaKws7e_I_m-BZToejmRHosTWD_Ebh9FaCQ2vt_bePpqD7MovphCUE638j5uhilmsZUDmFPMGdfPuYOUVZux8EuNdQkysqGzJn1LWICflHCrV2z_SWJlpH3qTOOF2xZmbi_ejnUr04pP53DDeujqkuXZzAegJ6kb7R1lC4dEejviB3KGzmo5VnVPWqMhKZWIg677JPQ3YbHDYsEWo2RD37g3BZ7tAZ93t4qSY" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="mb-6">
                <span className="font-label text-on-secondary-container px-3 py-1 bg-secondary-container rounded-full text-[10px] uppercase tracking-widest">Collaboration Platform</span>
              </div>
              <h3 className="font-headline text-4xl font-bold mb-2">Nexus</h3>
              <p className="text-primary font-bold mb-6">Investor & Entrepreneur Collaboration Platform</p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                A full-stack collaboration platform connecting investors and entrepreneurs. Features include multi-user authentication, meetings scheduling, document management, and CRUD-based activity tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["React.js", "Node.js", "Express.js", "MongoDB", "JWT"].map(tech => (
                  <span key={tech} className="bg-surface-container-high px-4 py-1.5 rounded-lg text-sm font-semibold border border-outline-variant/10">
                    {tech}
                  </span>
                ))}
              </div>
              <Link href="#" className="text-primary font-bold text-lg flex items-center gap-2 group">
                Explore Case Study
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          {/* Project 2 */}
          <div className="grid grid-cols-1 lg:col-span-12 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="mb-6">
                <span className="font-label text-on-secondary-container px-3 py-1 bg-secondary-container rounded-full text-[10px] uppercase tracking-widest">E-Commerce</span>
              </div>
              <h3 className="font-headline text-4xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-primary font-bold mb-6">Full-Stack Shopping Platform</p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                A responsive e-commerce application with product browsing, user authentication, shopping cart, and product management. Built with reusable React components and Tailwind CSS for a polished UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"].map(tech => (
                  <span key={tech} className="bg-surface-container-high px-4 py-1.5 rounded-lg text-sm font-semibold border border-outline-variant/10">
                    {tech}
                  </span>
                ))}
              </div>
              <Link href="#" className="text-primary font-bold text-lg flex items-center gap-2 group">
                Explore Case Study
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-surface-container aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  alt="E-Commerce App" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2x92xiTEmUCh-moNer4yZGR-trcq_wL_fVBszk78CNMWq_6ya156X4PTZ0cazEpwwXe0G7jA49Nqtat6LkbXZIvyjuCB8DXVc05oVgQR0OvPHt5P9vwteyDD3yE_JOtrltJOrZqJpUwHhexORQazqnYyN5u5AWihkk48lckKAiqqQHIr98oTGJSYZQpraNIwLvBdbe1QaRzfHPO1_Q3asMkWSlWwl0WzDAJRLWAzBjwpfNqqXRzC0X4WtQqorKY-jBZV_DJXnOSk" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
