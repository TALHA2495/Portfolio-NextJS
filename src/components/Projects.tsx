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
                  className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-700"
                  src="/assets/images/cocktails-screenshot.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="mb-6">
                <span className="font-label text-on-secondary-container px-3 py-1 bg-secondary-container rounded-full text-[10px] uppercase tracking-widest">Collaboration Platform</span>
              </div>
              <h3 className="font-headline text-4xl font-bold mb-2">Cocktail Showcase</h3>
              <p className="text-primary font-bold mb-6">GSAP Animated Cocktail Showcase</p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                An interactive cocktail discovery platform featuring smooth GSAP scroll animations, dynamic drink browsing, and a visually immersive UI. Built to demonstrate advanced animation techniques and responsive frontend design.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["React.js", "GSAP", "Tailwind CSS", "Responsive Design"].map(tech => (
                  <span key={tech} className="bg-surface-container-high px-4 py-1.5 rounded-lg text-sm font-semibold border border-outline-variant/10">
                    {tech}
                  </span>
                ))}
              </div>
              <Link target="blank" href="https://gsap-cocktailes-qbg7.vercel.app/" className="text-primary font-bold text-lg flex items-center gap-2 group">
                Watch on Github
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
              <Link target="blank" href="https://frontend-eta-two-85.vercel.app/" className="text-primary font-bold text-lg flex items-center gap-2 group">
                Watch on Github
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-surface-container aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
                <img
                  alt="E-Commerce App"
                  className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-700"
                  src="/assets/images/ecommerce-screenshot.png"
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
