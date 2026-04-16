export function Education() {
  return (
    <section className="px-8 bg-surface-container-low pt-16 pb-32" id="education">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl font-bold mb-16">Education</h2>
        <div className="bg-surface-container p-10 rounded-2xl border-l-4 border-primary">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">Government College University Faisalabad</h3>
              <p className="text-primary font-bold text-lg mt-1">BS Computer Science</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                <p className="text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  Oct 2023 – Jun 2027 (In Progress)
                </p>
                <p className="text-primary font-black flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  CGPA: 3.8+ / 4.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
