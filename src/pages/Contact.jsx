import { Mail } from "lucide-react";

function Contact() {
  return (
    <div className="max-w-xl mx-auto py-20 md:py-32 text-center">
      <div className="inline-flex items-center justify-center p-4 bg-zinc-900 rounded-full mb-6 border border-zinc-800">
        <Mail className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
      </div>
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-zinc-100 mb-6">
        Get in Touch
      </h1>
      <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
        I am currently available for new projects and opportunities. Whether you
        have a question or just want to say hi, feel free to reach out!
      </p>
      <a
        href="mailto:tedy_abr@live.no"
        className="inline-block bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
      >
        Send me an email
      </a>
    </div>
  );
}

export default Contact;
