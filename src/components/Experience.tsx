export function Experience() {
  const experiences = [
    "Contributed to a market analysis web platform using React.js, Node.js, Express.js, and MongoDB.",
    "Built and integrated REST APIs for seamless frontend-backend communication.",
    "Implemented secure JWT authentication and role-based access features.",
    "Assisted with backend integration on the Nexus platform including API connectivity and database operations.",
    "Collaborated with the team on debugging, feature development, and iterative improvements."
  ];

  return (
    <section className="pt-32 pb-16 px-8 relative overflow-hidden" id="experience">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-32 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl font-bold mb-16">Professional Trajectory</h2>
        <div className="bg-surface-container-low p-12 rounded-2xl relative z-10 border border-outline-variant/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <span className="font-label text-primary text-xs uppercase tracking-widest mb-2 block">Dec 2025 – Feb 2026</span>
              <h3 className="font-headline text-3xl font-bold">Full Stack Developer Intern</h3>
              <p className="text-xl text-on-surface-variant mt-2">DeveloperHub Corporation</p>
            </div>
            <div className="mt-4 md:mt-0 px-6 py-2 border border-outline-variant/30 rounded-full text-on-surface-variant font-label text-xs uppercase tracking-widest">
              FAISALABAD, PK
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <p className="text-on-surface-variant leading-relaxed" dangerouslySetInnerHTML={{ 
                  __html: exp.replace(/(React\.js, Node\.js, Express\.js, and MongoDB|REST APIs|JWT authentication|Nexus platform|debugging)/g, '<span class="text-on-surface font-semibold">$1</span>')
                 }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
