import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div>
      <section className="relative py-20 md:py-40 text-center flex flex-col items-center justify-center overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="inline-block px-5 py-2 mb-8 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 text-sm font-bold tracking-widest uppercase relative shadow-[0_0_20px_rgba(34,211,238,0.2)] animate-pulse">
          Portfolio 2
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-zinc-100">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500">
            Essayas
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
          Welcome to my portfolio.
        </p>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="flex items-center justify-between mb-16 border-b border-zinc-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-100">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
