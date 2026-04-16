import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-16 px-8 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div>
          <div className="text-lg font-bold text-on-surface mb-4">TALHA JAVED</div>
          <p className="text-sm text-on-surface-variant">Building tomorrow's digital foundations today through precision engineering and creative problem-solving.</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-label text-xs text-outline tracking-widest uppercase">Quick Links</p>
          <div className="grid grid-cols-2 gap-2">
            {["Home", "About", "Skills", "Education", "Experience", "Projects"].map(item => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-label text-xs text-outline tracking-widest uppercase">Connect</p>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/TALHA2495" target="_blank" rel="noopener noreferrer">GitHub</a>

            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/talha-javed-005b24328" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:tjaveed507@gmail.com">Email</a>
          </div>
          <p className="text-sm text-on-surface-variant mt-4">© 2026 Talha Javed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
