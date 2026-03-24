"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Navigation } from "@/components/navigation";
import { useEntrance } from "@/components/entrance-provider";

export default function Bio() {
  const animate = useEntrance();

  return (
    <div>
      <header className={`${animate ? "animate-fade-in-down" : ""} fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-4 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70 border-b border-transparent transition-colors duration-300`}>
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-sm font-medium tracking-widest text-foreground">
            PJ&thinsp;&mdash;&thinsp;26
          </span>
        </Link>
          <div className="flex items-center gap-3 md:gap-8">
          <Navigation />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex min-h-[calc(100svh-56px)] flex-col pt-14">
        <main className="flex flex-1 flex-col justify-end px-8 pb-16 md:px-12 lg:px-20">
          <div className="h-[25px]" />
          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            {/* Left column — Main bio */}
            <div className="space-y-8">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Bio
              </h1>

              <p className="text-sm leading-relaxed text-muted">
                With 18+ years of professional experience, Pedro is a
                Brazilian/Swiss designer and creative director, working in the
                intersection of digital products and branding experience. He
                plays a central and strategic role across all stages of a
                project. From understanding business strategy, until delivering
                final prototypes &mdash; creative outputs to solve real problems.
                A team player, believer in the power of collaboration and teams
                diversity. Also an enthusiast of creative frameworks between men
                and machines (AI).
              </p>

              <p className="text-sm leading-relaxed text-muted">
                Fueled by curiosity Pedro finds himself in a process of
                continuous iteration and experimentation. Founder of the design
                studio called{" "}
                <span className="font-medium text-foreground">FFForma</span>: a
                studio based on craft of a collaborative way chatting with GenAi
                creating new motion and visuals solutions to the creative
                industry.
              </p>

              <blockquote className="border-l-2 border-foreground/20 pl-5 text-sm italic leading-relaxed text-muted">
                &ldquo;I do believe in the power of craft leading by business
                needs, always collaboration with teams to achieve better
                results &mdash; Whether it&apos;s concept design, user centered
                approach or leading creative teams, I am always feeling excited
                with the challenges of balancing creative, strategic and
                management skills to successfully deliver solutions as part of a
                team.&rdquo;
              </blockquote>
            </div>

            {/* Right column — Currently */}
            <div className="space-y-8 lg:pt-[60px]">
              <div className="space-y-5">
                <h2 className="text-xs font-medium uppercase tracking-widest text-foreground/50">
                  Currently
                </h2>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-foreground/50">Watching</span>
                    <p className="text-foreground">
                      Knight of Seven Kingdoms, Alien Earth, Pluribus
                    </p>
                  </div>

                  <div>
                    <span className="text-foreground/50">Listening</span>
                    <p className="text-foreground">
                      John Coltrane, Ben B&ouml;hmer, Stick Figure, ERRA, Tesseract
                    </p>
                  </div>

                  <div>
                    <span className="text-foreground/50">Learning</span>
                    <p className="text-foreground">
                      GenAI, VSCode, Claude Code, Kiteboarding
                    </p>
                  </div>

                  <div>
                    <span className="text-foreground/50">Reading</span>
                    <p className="text-foreground">
                      100th Whites by Kenya Hara, Zen Mind Beginners Mind by Shunryu Suzuki
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience section */}
          <div className="mt-24 border-t border-border/40 pt-16">
            <h2 className="text-xs font-medium uppercase tracking-widest text-foreground/50">
              Experience
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-16">
              {/* Mercado Pago */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Mercado Pago
                  </h3>
                  <p className="text-xs text-foreground/50">Design Manager</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As a Design Manager at Mercado Livre, responsible for elevating
                  the company&apos;s design quality standards and driving creative
                  excellence across teams. Acts as both leader and team player,
                  fostering collaboration between design, product, and business
                  areas. With a strong focus on visual craft and creativity,
                  guiding the team to deliver cohesive, innovative, and impactful
                  experiences that strengthen Mercado Livre&apos;s and Mercado
                  Pago&apos;s brand and digital product presence.
                </p>
              </div>

              {/* Rise New York & Partners */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Rise New York &amp; Partners
                  </h3>
                  <p className="text-xs text-foreground/50">Creative Director</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As a hands on Creative Director and Designer at Rise I play a
                  pivotal role in shaping the agency&apos;s creative vision and
                  bringing innovative concepts to life. I oversees the strategic
                  direction of projects, ensuring they align with the
                  client&apos;s objectives while pushing boundaries to deliver
                  impactful, cutting-edge solutions. Leading and inspire a
                  multidisciplinary team, fostering collaboration and maintaining
                  high creative standards throughout the process. Meanwhile, as
                  Designer I can translates this vision into visually compelling
                  designs, focusing on aesthetics, usability, and functionality
                  across digital platforms and branding experiences.
                </p>
              </div>

              {/* Meiuca */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Meiuca
                  </h3>
                  <p className="text-xs text-foreground/50">Head of Design</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As the Design Director at Meiuca, my mission is to push the
                  boundaries of digital design and product vision, creating
                  visually stunning and highly functional products that resonate
                  with users and drive meaningful results for our clients. My
                  passion for design, coupled with a strategic mindset and a
                  dedication to fostering a collaborative creative environment,
                  enables me to lead our team in delivering exceptional digital
                  experiences.
                </p>
              </div>

              {/* Descomplica */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Descomplica
                  </h3>
                  <p className="text-xs text-foreground/50">Design Manager</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As a design director in Descomplica, I&apos;ve conducted
                  thorough industry research some initiatives to determine the
                  direction in which Descomplica branding experiences and digital
                  products should expand. Helping the design leadership team
                  understand the company branding experiences and sales teams
                  leveraged the research to help them get even more sharp and
                  efficient. I&apos;ve created and led the first branding refresh
                  for the company, setting new positioning and values. Designed
                  and built design systems, modular and scalable design patterns,
                  evolution of visual assets and to find out the right tone of
                  voice of the company, hired and build up design teams setting
                  process and developed descomplica&apos;s design culture.
                </p>
              </div>

              {/* DDB Unlimited */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    DDB Unlimited
                  </h3>
                  <p className="text-xs text-foreground/50">Design Director</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As the Design Director for DDB&amp;Tribal, I lead the design
                  team to push conventional boundaries with unique concepts and
                  identities creating distinctive and innovative design
                  experiences. The approach builds not only meaningful end-user
                  experience but also overall business value for his clients
                  through holistic thinking, strategic design and service design
                  exceeding the client expectations. I was responsible for the
                  digital global soccer account of Adidas, creating part of the
                  design modular system structure. Worked with Royal Canin as
                  well, developing the global design system for the company,
                  coming up with new visual assets like: photographies,
                  iconography and digital assets. I supported and guided a team
                  of over 6 designers and leads by giving direction in the
                  service and user experience concepts definition, creation and
                  challenges.
                </p>
              </div>

              {/* Work&Co */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Work&amp;Co
                  </h3>
                  <p className="text-xs text-foreground/50">Senior Designer</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As a Senior Designer at Work&amp;Co, I was responsible for many
                  digital product design projects, for clients like: Facebook,
                  Santander and some other ones. Together with the team, shining
                  creative concepts, interface and user experience solutions. I
                  was responsible as well for ensuring team&apos;s work
                  communicates effectively with the highest quality, solving
                  business challenges and meeting user needs. Involved in all
                  stages of design development, collaborating on brute-force
                  concept ideation, interaction design, visual design,
                  prototyping and client facing communication and presentation.
                </p>
              </div>

              {/* Google Brand Studio */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Google Brand Studio
                  </h3>
                  <p className="text-xs text-foreground/50">Senior Designer</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  I&apos;ve worked as a freelancer senior designer in Google
                  Brand Studio, creating couple of interactive/digital projects
                  to promote Google&apos;s cultural institute in the web. The
                  most prestigious project was called: Performing Arts With
                  Google. With multiple interactive 360&deg; cameras placed in
                  the most amazing places on the stage you are literally inside
                  the show. A totally immersive 360&deg; experience &ndash;
                  allowing anyone to step on stage with the world&apos;s greatest
                  actors, singers and dancers, and giving them full control of
                  their view. World-renowned venues can now reach a new global
                  audience and give them access to the finest performances,
                  wherever they are.
                </p>
              </div>

              {/* Y Dreams */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Y Dreams
                  </h3>
                  <p className="text-xs text-foreground/50">Senior Designer</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As a Senior Designer at YDreams, I was responsible for a big
                  digital innovation project from Cisco. I was responsible for
                  creating a digital experience for a digital product called Hear
                  the City, an interactive creative platform where users can
                  create their own music mixing real-data informations from a
                  city with generative graphics and forms.
                </p>
              </div>

              {/* Koi Factory */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground">
                    Koi Factory
                  </h3>
                  <p className="text-xs text-foreground/50">Senior Designer</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  As a Senior Designer at Koi Factory, I was responsible for many
                  digital product design projects, for clients like: Globosat,
                  Esporte Interativo and some other ones. Together with the team,
                  shining creative concepts, interface and user experience
                  solutions. I was responsible as well for ensuring team&apos;s
                  work communicates effectively with the highest quality, solving
                  business challenges and meeting user needs. Involved in all
                  stages of design development, collaborating on brute-force
                  concept ideation, interaction design, visual design,
                  prototyping and client facing communication and presentation.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Skills, Clients & Contact section */}
          <div className="mt-24 border-t border-border/40 pt-16 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-24">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-widest text-foreground/50">
                Professional Skills
              </h2>
              <div className="mt-10 space-y-3">
                <p className="text-sm text-muted">Team Management</p>
                <p className="text-sm text-muted">User Experience Design</p>
                <p className="text-sm text-muted">Branding</p>
                <p className="text-sm text-muted">Visual Design</p>
                <p className="text-sm text-muted">Product Envisioning</p>
                <p className="text-sm text-muted">Design Process Consulting</p>
                <p className="text-sm text-muted">Team Growth &amp; Leadership</p>
                <p className="text-sm text-muted">Strong Sales Experience</p>
                <p className="text-sm text-muted">Entrepreneurial Background</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-medium uppercase tracking-widest text-foreground/50">
                Clients
              </h2>
              <div className="mt-10 space-y-3">
                <p className="text-sm text-muted">Google</p>
                <p className="text-sm text-muted">Facebook</p>
                <p className="text-sm text-muted">Nike</p>
                <p className="text-sm text-muted">Isadore</p>
                <p className="text-sm text-muted">Royal Canin</p>
                <p className="text-sm text-muted">Klm</p>
                <p className="text-sm text-muted">Heineken</p>
                <p className="text-sm text-muted">Globosat</p>
                <p className="text-sm text-muted">Adidas</p>
                <p className="text-sm text-muted">Shutterstock</p>
                <p className="text-sm text-muted">Art Directors Club</p>
                <p className="text-sm text-muted">Cisco</p>
                <p className="text-sm text-muted">Descomplica</p>
                <p className="text-sm text-muted">Neom</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-medium uppercase tracking-widest text-foreground/50">
                Contact
              </h2>
              <div className="mt-10 flex flex-col gap-3">
                <a href="mailto:pducry@gmail.com" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Email</a>
                <a href="https://www.instagram.com/pedro_julien" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/pedro_julien" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Linkedin</a>
                <a href="https://foundation.app/@ixaser" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Foundation</a>
                <a href="https://objkt.com/users/tz1VZcpNZW6W8D2hGXvTDqJqwGjmjPKRYwRM" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-muted hover:text-foreground transition-colors">Objkt</a>
              </div>
            </div>
          </div>

          <p className="mt-16 text-xs text-muted">
            &copy; Pedro Julien 2026
          </p>
        </main>
      </div>
    </div>
  );
}
