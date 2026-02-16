import Image from "next/image";
import { Linkedin, Github, BookOpen, GraduationCap, Download } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-start">
          {/* Left - Headshot and Social Links */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/headshot.jpg"
                alt="Professional headshot"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                priority
              />
            </div>

            {/* Social Media Links - Single Row */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://github.com/ambercheny"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary-600 hover:text-primary-500 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
                <span className="text-xs font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yalinchen-amber/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary-600 hover:text-primary-500 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
                <span className="text-xs font-medium">LinkedIn</span>
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=kmWAKHoAAAAJ&gmla=AOv-ny-oViURYzaplVENKzBBtukUH5Cv2g5WB6oLmidqoMB4o2-jXCdERbXjaIR6szQOeSyVnqMCqeKtcFAx9p57OFjP02jmAceHZm3QtpE&sciund=4854242797381733583"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary-600 hover:text-primary-500 transition-all hover:scale-110"
                aria-label="Google Scholar"
              >
                <GraduationCap className="w-6 h-6" />
                <span className="text-xs font-medium">Scholar</span>
              </a>
              <a
                href="https://bionewsdigest.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary-600 hover:text-primary-500 transition-all hover:scale-110"
                aria-label="Medium"
              >
                <BookOpen className="w-6 h-6" />
                <span className="text-xs font-medium">Medium</span>
              </a>
            </div>

            {/* Email */}
            <p className="text-sm text-primary-600 text-center md:text-left mt-3">
              Email: <a href="mailto:ychen124@uw.edu" className="hover:underline">ychen124@uw.edu</a>
            </p>
          </div>

          {/* Right - About Me Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              About Me
            </h2>

            <div className="space-y-4 text-primary-900">
              {/* Background & Mission */}
              <div>
                <h3 className="font-heading text-xl font-bold text-primary-600 mb-2">
                  Background & Mission
                </h3>
                <p className="text-base leading-relaxed">
                  I am a pharmacist and biomedical informatics PhD candidate at the University of Washington, driven by a mission to scale clinical impact through technology. My work is rooted in a simple philosophy: innovation must be usable.
                </p>
              </div>

              {/* My Journey */}
              <div>
                <h3 className="font-heading text-xl font-bold text-primary-600 mb-2">
                  My Journey
                </h3>
                <p className="text-base leading-relaxed">
                  My journey began with building machine learning models for{" "}
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0168822723007969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    medication adherence
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0169260723005357"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    clinical algorithms for safer drug prescribing
                  </a>
                  . This led to a pivotal realization: the future of healthcare doesn't just need more models—it needs usable ones.
                </p>
              </div>

              {/* Current Focus */}
              <div>
                <h3 className="font-heading text-xl font-bold text-primary-600 mb-2">
                  Current Focus
                </h3>
                <p className="text-base leading-relaxed">
                  Currently, I focus on sharpening the utility of AI in healthcare, from developing models for{" "}
                  <a
                    href="https://academic.oup.com/jalm/article/10/6/1600/8248123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    blood cell analytics
                  </a>{" "}
                  to researching{" "}
                  <a
                    href="https://www.researchprotocols.org/2025/1/e63875/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    workflow simulations
                  </a>{" "}
                  and the evolution of{" "}
                  <a
                    href="https://www.sciencedirect.com/science/article/pii/S2666990022000143"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    Personal Health Records
                  </a>
                  . I'm a firm believer that innovation is only as powerful as our understanding of how to use it, and I'm dedicated to bridging the gap between deep learning and the human-centered tools that clinicians and patients actually need.
                </p>
              </div>

              {/* View CV Button */}
              <div className="mt-6">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
