import Image from "next/image"

const projects = [
  {
    title: "Vite & Gourmand",
    image: "/images/vite-et-gourmand.png",
    status: "Projet de formation",
    description:
      "Application web de restauration événementielle avec gestion des menus, commandes et espaces métiers.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
    ],
    website: "https://vite-et-gourmand-psi.vercel.app/",
    github: "https://github.com/BenjaminBernade/vite-et-gourmand",
  },
  {
    title: "DripSpin",
    image: "/images/work-in-progress.png",
    status: "En développement",
    description:
      "Application web permettant de générer des propositions de tenues vestimentaires selon différents styles et préférences.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BenjaminBernade/dripspin",
  },
  {
    title: "BiNBiN Music",
    image: "/images/binbin-landing-page.png",
    status: "En ligne",
    description:
      "Landing page conçue pour présenter mon activité de DJ, mes influences musicales et mes contenus audio.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    website: "https://binbin-music.vercel.app",
    github: "https://github.com/BenjaminBernade/binbin-landing",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-zinc-800 pb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Benjamin Bernadé
          </h1>

          <p className="mt-4 text-xl text-zinc-300">
            Développeur web & Applications
            
            React • Next.js • TypeScript • Node.js
          </p>

          <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
            Après 12 ans dans la gestion de projets dans le secteur de la construction, je me reconvertis dans le développement web. 
            Je développe des applications modernes avec React, Next.js, TypeScript et Node.js, en mettant l'accent sur la qualité du code
            et l'expérience utilisateur. 
          </p>
        </header>

        <section className="py-14">
          <h2 className="mb-8 text-2xl font-semibold">Mes projets</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                {project.image && (
                  <div className="mb-5 overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                )}

                <div className="mb-5">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                    {project.status}
                  </span>
                </div>

                
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-4 flex-1 leading-6 text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950"
                    >
                      Voir le projet
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-4 text-zinc-400">
            Disponible pour échanger autour d’un projet, d’une alternance ou
            d’une opportunité professionnelle.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:benjamin.bernade@gmail.com"
              className="rounded-lg bg-white px-4 py-2 font-medium text-zinc-950"
            >
              Me contacter
            </a>

            <a
              href="https://www.linkedin.com/in/benjamin-bernade"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 px-4 py-2 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()}  Benjamin Bernadé - Développé avec Next.js & Tailwind CSS
        </footer>
      </div>
    </main>
  );
}