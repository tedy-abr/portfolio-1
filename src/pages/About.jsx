function About() {
  return (
    <div className="max-w-3xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-zinc-100 mb-8">
        About Me
      </h1>
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-zinc-400 leading-relaxed mb-6">
          I am a front-end development student at Noroff. This portfolio
          showcases my progression through CSS Frameworks, JavaScript
          Frameworks, and the Semester Project 2.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-6">
          My goal is to build accessible, responsive, and performant web
          applications using modern technologies like React, Vite, and Tailwind
          CSS. I have a strong passion for designing beautiful user interfaces
          that feel alive and intuitive.
        </p>
      </div>
    </div>
  );
}

export default About;
