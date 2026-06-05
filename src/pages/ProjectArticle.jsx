import { useParams, Navigate } from "react-router-dom";
import { ExternalLink, Check } from "lucide-react";
import { projects } from "../data/projects";
import CopyLinkButton from "../components/CopyLinkButton";

function ProjectArticle() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="max-w-5xl mx-auto py-12 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-cyan-500/10 blur-[120px] rounded-[100%] pointer-events-none -z-10"></div>

      <div>
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-linear-to-r from-zinc-100 to-zinc-500">
                {project.title}
              </h1>
            </div>
            <CopyLinkButton />
          </div>
        </header>

        {/* Banner Image */}
        <figure className="mb-16 group">
          <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video relative shadow-[0_0_40px_rgba(34,211,238,0.05)]">
            <div className="absolute inset-0 bg-linear-to-tr from-zinc-950/80 via-transparent to-transparent z-10 pointer-events-none"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out"
              loading="lazy"
            />
          </div>
          {project.imageCaption && (
            <figcaption className="text-center text-zinc-500 text-sm mt-5 tracking-wide">
              {project.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4 mb-20 pb-12 border-b border-zinc-800/50">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 bg-cyan-500 text-zinc-950 font-bold px-8 py-4 rounded-xl overflow-hidden transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2">
              View Live Site
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-medium px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all hover:-translate-y-1"
          >
            GitHub Repository
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-16 min-h-[80vh]">
            <section>
              <h2 className="text-3xl font-heading font-bold text-zinc-100 mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Overview
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-zinc-400 leading-relaxed">
                <p>{project.fullDescription}</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-zinc-100 mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-violet-500 rounded-full"></span>
                Challenges Faced
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-zinc-400 leading-relaxed">
                <p>{project.challenges}</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-zinc-100 mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                What I Learned
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-zinc-400 leading-relaxed">
                <p>{project.whatILearned}</p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="sticky top-24 space-y-10 bg-zinc-900/40 backdrop-blur-xl p-8 rounded-3xl border border-zinc-800 shadow-2xl">
              <section>
                <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest mb-6">
                  Tech Stack
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {project.techStack?.map((tech, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 bg-zinc-950/50 text-cyan-400 text-sm font-semibold rounded-lg border border-zinc-800 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors cursor-default"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="w-full h-px bg-zinc-800/50"></div>

              <section>
                <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest mb-6">
                  Key Improvements
                </h3>
                <ul className="space-y-4">
                  {project.improvements?.map((improvement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-zinc-400 text-sm leading-relaxed group cursor-default"
                    >
                      <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                        <Check className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <span className="group-hover:text-zinc-300 transition-colors">
                        {improvement}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectArticle;
