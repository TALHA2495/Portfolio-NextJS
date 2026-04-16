export function Contact() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="contact">
      <div className="max-w-7xl mx-auto editorial-grid">
        <div className="col-span-12 lg:col-span-5">
          <h2 className="font-headline text-6xl font-black tracking-tighter mb-8">
            Ready for the <span className="text-primary font-serif italic">next</span> leap.
          </h2>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-12">
            I’m actively seeking junior software engineering or MERN stack internship opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <a href="mailto:tjaveed507@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">tjaveed507@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">call</span>
              </div>
              <span className="text-lg font-bold">+92 327 6240934</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">pin_drop</span>
              </div>
              <span className="text-lg font-bold">Faisalabad, Pakistan</span>
            </div>
            <div className="pt-8 border-t border-outline-variant/20">
              <p className="font-label text-xs text-outline tracking-widest uppercase mb-4">Connect</p>
              <div className="flex gap-6">
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/TALHA2495" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-xl">code</span>
                </a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/talha-javed-005b24328" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-xl">business_center</span>
                </a>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:tjaveed507@gmail.com">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <form className="space-y-6 bg-surface-container p-10 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-outline">Name</label>
                <input 
                  className="w-full bg-surface-container-highest border-0 rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-outline">Email</label>
                <input 
                  className="w-full bg-surface-container-highest border-0 rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
                  placeholder="tjaveed507@gmail.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-outline">Message</label>
              <textarea 
                className="w-full bg-surface-container-highest border-0 rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
                placeholder="How can I help you?" 
                rows={4}
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-5 rounded-lg text-lg hover:shadow-lg hover:shadow-primary/20 transition-all" type="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
