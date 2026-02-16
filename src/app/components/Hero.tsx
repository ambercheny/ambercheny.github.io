import Image from "next/image";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      {/* Full Header Image Banner with Overlay Content */}
      <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
        <Image
          src="/header.jpg"
          alt="Header banner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary-500/90"></div>

        {/* Coffee Chat Buttons Overlay on Header */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6 max-w-3xl">
            <p className="text-white text-xl md:text-4xl mb-6 leading-relaxed drop-shadow-lg font-medium">
              Ya-Lin Chen (Amber)
            </p>
            <p className="text-white text-xl md:text-xl mb-6 leading-relaxed drop-shadow-lg font-medium">
              I am open to discussing innovative ideas in the field of AI x healthcare. Let's connect!
            </p>

            <div className="flex justify-center items-center mb-4">
              <a
                href="mailto:end1859612@gmail.com"
                className="inline-flex items-center gap-3 bg-white text-primary-500 px-8 py-2 rounded-full font-semibold hover:bg-primary-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Mail className="!w-5 !h-5" />
                Send me an email
              </a>
            </div>
            <p className="text-lg text-primary-200">
              📍 Seattle, WA, USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
