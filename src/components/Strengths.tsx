export function Strengths() {
  const strengthsList = [
    { icon: "api", title: "REST API Development", desc: "Designing and building efficient, scalable backend endpoints for seamless data flow." },
    { icon: "devices", title: "Responsive UI Design", desc: "Creating fluid interfaces that provide optimal viewing experiences across all device sizes." },
    { icon: "lock", title: "Authentication & Security", desc: "Implementing robust security measures like JWT and encrypted user credentials." },
    { icon: "account_tree", title: "Component-Based Architecture", desc: "Building modular, reusable React components for maintainable and scalable codebases." },
    { icon: "psychology", title: "Problem Solving", desc: "Approaching complex challenges with analytical thinking to find optimal, efficient solutions." },
    { icon: "bolt", title: "Quick Learner", desc: "Rapidly adapting to new technologies and frameworks to stay at the forefront of development." },
    { icon: "database", title: "Database Operations", desc: "Efficient data modeling and management using NoSQL and SQL databases." },
    { icon: "groups", title: "Team Collaboration", desc: "Proven ability to work effectively in team settings using Agile and Git workflows." }
  ];

  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl font-bold text-center mb-16">What I Bring to the Table</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengthsList.map((str, idx) => (
            <div key={idx} className="bg-surface-container p-10 rounded-2xl border border-outline-variant/10 flex flex-col items-center text-center hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">{str.icon}</span>
              <h3 className="font-headline text-xl font-bold mb-4">{str.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{str.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
