export function Skills() {
  return (
    <section className="px-8 pt-32 pb-16" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-label text-primary tracking-[0.2em] text-xs uppercase mb-4 block">The Toolkit</span>
            <h2 className="font-headline text-5xl font-bold tracking-tight">Technical Proficiency</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-all group border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">view_quilt</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Responsive Design"].map((skill) => (
                <span key={skill} className="bg-surface-container-highest px-3 py-1 rounded text-xs text-on-surface">{skill}</span>
              ))}
            </div>
          </div>
          {/* Backend */}
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-all group border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">settings_ethernet</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-6">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "REST APIs", "API Integration", "JWT Authentication"].map((skill) => (
                <span key={skill} className="bg-surface-container-highest px-3 py-1 rounded text-xs text-on-surface">{skill}</span>
              ))}
            </div>
          </div>
          {/* Database */}
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-all group border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">database</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-6">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "SQL Server", "SQL"].map((skill) => (
                <span key={skill} className="bg-surface-container-highest px-3 py-1 rounded text-xs text-on-surface">{skill}</span>
              ))}
            </div>
          </div>
          {/* Tools */}
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-all group border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-6">Tools & Workflow</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Postman", "VS Code", "JWT Auth"].map((skill) => (
                <span key={skill} className="bg-surface-container-highest px-3 py-1 rounded text-xs text-on-surface">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
