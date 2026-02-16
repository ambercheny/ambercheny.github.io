import { MessageCircle, Linkedin, Github, BookOpen, GraduationCap } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-5 bg-primary-200 text-center">
      {/* 1. Added the missing container div for centering */}
      <div className="max-w-4xl mx-auto px-6">
        
        <p className="text-primary-600 text-xl md:text-2xl mb-4 leading-relaxed max-w-2xl mx-auto font-medium">
          I am open to discussing innovative ideas in the field of AI x healthcare. Let's connect!
        </p>

        <div className="flex flex-col gap-10 justify-center items-center">
          
          <a
            href="mailto:end1859612@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-4 rounded-full font-bold hover:bg-primary-50 transition-all shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Send me an email
          </a>

          {/* 2. Social Media Links - Increased gap for better spacing on mobile */}
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-center">
            <SocialLink href="https://github.com/yourusername" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="#" icon={<GraduationCap />} label="Scholar" />
            <SocialLink href="#" icon={<BookOpen />} label="Medium" />
          </div>
        </div>

        {/* 3. Refined Bottom Info - Using text-white/70 for better hierarchy */}
        <div className="mt-1 pt-8 border-t border-white/20">
          <p className="text-primary-600/80 font-medium">
            📍 Based in Seattle, WA • Available for collaborations
          </p>
        </div>
      </div>
    </section>
  );
}

/** * Helper Component to keep the social links code clean 
 */
function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 text-primary-600 hover:text-primary-600/70 transition-all hover:scale-110"
      aria-label={label}
    >
      {/* Cloning the icon to apply standard sizing */}
      {/* Using React.cloneElement or just wrapping works too */}
      <div className="w-8 h-8">
        {icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </a>
  );
}