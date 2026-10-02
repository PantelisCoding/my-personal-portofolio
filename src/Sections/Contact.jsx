import RevealOnScroll from "../Ui/RevealOnScroll";
import { MdArrowOutward } from "react-icons/md";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section relative min-h-screen flex items-center justify-center py-24 lg:py-32 px-5 sm:px-6"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[130px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <RevealOnScroll>
        <div className="w-full md:w-[600px] mx-auto">
          {/* Eyebrow + heading */}
          <div className="mb-10 lg:mb-14 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-teal-400/80">
              Let's talk
            </p>
            <h2 className="contact-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Contact{" "}
              <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
              Have a project in mind or just want to say hi? Drop me a
              message and I'll get back to you.
            </p>
          </div>

          {/* Form card */}
          <form
            action="https://formsubmit.co/pandelisan28@outlook.com"
            method="POST"
            className="contact-card space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md"
          >
            {/* Name */}
            <div className="relative">
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-white/40"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="contact-input w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-teal-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-teal-400/20"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-white/40"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="contact-input w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-teal-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-teal-400/20"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-white/40"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project…"
                required
                className="contact-input w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-teal-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-teal-400/20"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="contact-btn group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <span>Send message</span>
              <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};