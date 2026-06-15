import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Mobile Legends API",
      description:
        "O projeto disponibiliza informações sobre personagens e avatares do jogo para estudos, consumo de APIs e desenvolvimento de aplicações.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Jest", "Express"],
      live: "https://herodex-eight.vercel.app/",
      github: "https://github.com/Miguel-D3v/MLBB_API",
    },
    {
      title: "Conversor de PDF API",
      description:
        "API pública para conversão e manipulação de arquivos PDF.",
      stack: ["Node.js", "Express", "busboy", "pdf-lib", "Docker"],
      live: "https://conversor-pdf-front.vercel.app/",
      github: "https://github.com/Miguel-D3v/pdf-api",
    },
  ];

  const technologies = [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Git",
    "REST APIs",
    "Jest",
    "Express",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 lg:px-24 py-10 font-mono">
      {/* NAVBAR */}
      <header className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            miguelmodesto.dev
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#about" className="hover:text-white transition">
            Sobre
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projetos
          </a>

          <a href="#stack" className="hover:text-white transition">
            Tecnologias
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contato
          </a>
        </nav>
      </header>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-28 flex flex-col gap-8 max-w-4xl"
      >
        <div className="text-sm text-green-500 tracking-wide">
          ~/miguelmodesto.dev
        </div>

        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full w-fit text-sm text-zinc-400">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Disponível para oportunidades
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Backend <br /> Developer
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Construção de APIs e aplicações com foco em desempenho,
            escalabilidade e segurança.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
          >
            Ver Projetos
          </a>

          <a
            href="https://github.com/Miguel-D3v"
            target="_blank"
            className="border border-white/10 px-6 py-3 rounded-2xl text-zinc-300 hover:bg-white/5 transition"
          >
            GitHub
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-20 grid md:grid-cols-2 gap-12"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Sobre
          </p>

          <h3 className="text-3xl font-semibold tracking-tight">
            Me chamo Miguel Modesto, desenvolvedor backend, e iniciei meus estudos em programação em 2022, 
            quando dei meus primeiros passos utilizando o Termux, um emulador de terminal para Android, 
            antes mesmo de ter acesso a um computador.
          </h3>
        </div>

        <div className="space-y-5 text-zinc-400 leading-relaxed">
          <h3 className="text-2xl font-semibold tracking-tight">
            Desde então, mantenho uma rotina constante de estudos e desenvolvimento de projetos para aprimorar minhas habilidades.
             Atualmente, busco me qualificar cada vez mais para construir sistemas seguros, escaláveis e performáticos, 
             aprofundando meus conhecimentos em backend e arquitetura de software.
          </h3>
        </div>
      </motion.section>

      {/* STACK */}
      <motion.section
        id="stack"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-20"
      >
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Tecnologias
          </p>

          <h3 className="text-3xl font-semibold tracking-tight">
            Tecnologias que utilizo.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ y: -3 }}
              className="bg-[#111111] border border-white/10 rounded-2xl px-5 py-4 text-zinc-300 hover:border-green-500/30 transition"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/10 py-20">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Projetos
          </p>

          <h3 className="text-3xl font-semibold tracking-tight">
            Projetos recentes.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-green-500/30 transition shadow-[0_0_20px_rgba(34,197,94,0.03)]"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-semibold tracking-tight mb-3">
                    {project.title}
                  </h4>

                  <p className="text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-white hover:text-zinc-300 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-20"
      >
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contato
          </p>

          <h3 className="text-4xl font-semibold tracking-tight">
            Vamos construir algo incrível.
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            Sinta-se à vontade para entrar em contato para oportunidades,
            colaborações ou projetos de desenvolvimento backend.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:miguelmodesto00@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
            >
              Enviar Email
            </a>

            <a
              href="https://linkedin.com/in/miguel-modesto"
              target="_blank"
              className="border border-white/10 px-6 py-3 rounded-2xl text-zinc-300 hover:bg-white/5 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

