import { MessageCircle, Linkedin, Github, BookOpen, GraduationCap } from "lucide-react";
import Script from "next/script";

export default function CallToAction() {
  return (
    <section className="py-8 bg-[#D4EBFF] text-center"> {/* Fixed hex code typo ## */}
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-primary-600 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          I am open to discussing innovative ideas in the field of AI x healthcare. Let's connect!
        </p>

        <div className="flex flex-col gap-12 justify-center items-center">
          {/* Email Button remains centered at the top */}
          <a
            href="mailto:end1859612@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-4 rounded-full font-bold hover:bg-primary-50 transition-all shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Send me an email
          </a>

          {/* New Wrapper: Groups Social/Location on Left, Map on Right */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full border-t border-primary-600/10 pt-8">
            
            {/* Left Content Column */}
            <div className="flex flex-col gap-6 items-center md:items-start flex-1">
              {/* Social Media Links */}
              <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start items-center">
                <SocialLink href="https://github.com/ambercheny" icon={<Github />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/yalinchen-amber/" icon={<Linkedin />} label="LinkedIn" />
                <SocialLink href="https://scholar.google.com/citations?..." icon={<GraduationCap />} label="Scholar" />
                <SocialLink href="https://bionewsdigest.medium.com/" icon={<BookOpen />} label="Medium" />
              </div>

              {/* Location Text aligned to the start (left) on desktop */}
              <p className="text-primary-600/80 font-medium text-sm md:text-base">
                📍 Based in Seattle, WA • Available for collaborations
              </p>
            </div>

            {/* Right Content Column: Map Widget */}
            <div className="flex items-center justify-center min-w-[160px]">
              <div id="mapmyvisitors-container" className="rounded-lg overflow-hidden shadow-sm border border-white/50">
                <Script
                  id="mapmyvisitors"
                  src="//mapmyvisitors.com/map.js?d=7ArMGnT4Sb1kqP6ciRYt_K3vO2mwp_7y1va6q2VBv-I&cl=ffffff&w=a"
                  strategy="lazyOnload"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1.5 text-primary-600 hover:text-primary-600/70 transition-all hover:scale-110"
      aria-label={label}
    >
      <div className="w-6 h-6">
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </a>
  );
}