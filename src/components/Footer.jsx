function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-auto py-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Essayas. Portfolio 2 Assignment.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/tedy-abr"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
