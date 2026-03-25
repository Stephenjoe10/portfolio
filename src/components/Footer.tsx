export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-slate-400 text-sm">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} My Portfolio. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
