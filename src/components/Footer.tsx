import type { Portfolio } from "../lib/type";
import { getResponse } from "../lib/utils";

export function Footer() {
  const response: Portfolio = getResponse()
  const { footerContent } = response

  return (
    <footer className="py-8 border-t border-white/10 text-center text-slate-400 text-sm">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} {footerContent}</p>
      </div>
    </footer>
  );
}
