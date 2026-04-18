"use client";

import { useState, FormEvent } from "react";

export function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "b9a166ca-ad01-4694-aa6b-a63fd7f6ce86");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={onSubmit} className="space-y-6 bg-surface-container p-10 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-outline">Name</label>
                <input 
                  name="name"
                  required
                  className="w-full bg-surface-container-highest border-0 rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-outline">Email</label>
                <input 
                  name="email"
                  required
                  className="w-full bg-surface-container-highest border-0 rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
                  placeholder="tjaveed507@gmail.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-outline">Message</label>
              <textarea 
                name="message"
                required
                className="w-full bg-surface-container-highest border-0 rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-primary/50 transition-all outline-none" 
                placeholder="How can I help you?" 
                rows={4}
              ></textarea>
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-5 rounded-lg text-lg hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2" 
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            {result && (
              <p className={`text-center font-bold ${result.includes("Error") || result.includes("wrong") ? "text-red-500" : "text-green-500"}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
