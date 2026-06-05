import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className="group relative bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      {/* Glowing Holographic Border Effect */}
      <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 via-transparent to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10 group-hover:animate-pulse"></div>

      {/* Inner Card Content */}
      <div className="flex flex-col h-full bg-zinc-900 z-10 m-px rounded-[15px] overflow-hidden">
        <div className="aspect-16/10 overflow-hidden bg-zinc-800 relative">
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent opacity-60 z-10"></div>
          <img
            src={project.thumbnail}
            alt={`Thumbnail for ${project.title}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

        <div className="p-6 flex flex-col grow relative z-20">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            {project.category}
          </div>

          <h3 className="text-2xl font-heading font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-zinc-400 mb-6 grow line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-zinc-100 hover:text-cyan-400 transition-colors mt-auto group/link"
          >
            Read full case study
            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
