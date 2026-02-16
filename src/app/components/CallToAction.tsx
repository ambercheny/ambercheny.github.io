import { MessageCircle, Linkedin, Github, BookOpen, GraduationCap } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-5 bg-[##D4EBFF] text-center">
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

          {/* Icons and Map Layout */}
          <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
            {/* Left: Social Icons and Location */}
            <div className="flex flex-col gap-6 flex-1">
              {/* Social Media Links */}
              <div className="flex flex-wrap gap-8 md:gap-12 justify-center items-center">
                <SocialLink href="https://github.com/ambercheny" icon={<Github />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/yalinchen-amber/" icon={<Linkedin />} label="LinkedIn" />
                <SocialLink href="https://scholar.google.com/citations?hl=en&user=kmWAKHoAAAAJ&gmla=AOv-ny-oViURYzaplVENKzBBtukUH5Cv2g5WB6oLmidqoMB4o2-jXCdERbXjaIR6szQOeSyVnqMCqeKtcFAx9p57OFjP02jmAceHZm3QtpE&sciund=4854242797381733583" icon={<GraduationCap />} label="Scholar" />
                <SocialLink href="https://bionewsdigest.medium.com/" icon={<BookOpen />} label="Medium" />
              </div>

              <p className="text-primary-600/80 font-medium text-center">
                📍 Based in Seattle, WA • Available for collaborations
              </p>
            </div>

            {/* Right: MapMyVisitors Widget */}
            <div id="mapmyvisitors-container" className="w-24 h-16 flex items-center justify-center">
              <a href="https://mapmyvisitors.com/web/1c2l5" title="Visit tracker">
                <img src="https://mapmyvisitors.com/map.png?d=7ArMGnT4Sb1kqP6ciRYt_K3vO2mwp_7y1va6q2VBv-I&cl=ffffff" alt="Visitor map" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
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