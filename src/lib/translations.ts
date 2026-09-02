export type Lang = "en" | "pt";

export const translations = {
  en: {
    nav: { bio: "Works", playground: "Playground", contact: "About & Contact" },
    bio: {
      label: "Bio",
      p1: "Designer with 20+ years shaping product design and branding experiences. From early ideation and visual craft to shipped products and solutions, using AI as a creative force. Hands-on by nature, I lead by doing, staying close to the craft across strategy, design, and build.",
      p4a: "Founder of",
      p4b: ".",
      cta: "Get in touch",
      scroll: "Scroll down",
    },
    projects: { type: "Type", year: "Year", role: "Role", name: "Project's Name" },
    works: { craft: "Craft", build: "Digital Artifacts" },
    categories: {
      "Design System":   "Design System",
      "Brand Identity":  "Brand Identity",
      "Digital Product": "Digital Product",
      "Interactive":     "Interactive",
      "Product Design":  "Product Design",
      "Branding":        "Branding",
      "Creative":        "Creative System",
      "Leadership":      "Leadership",
      "Culture":         "Culture",
    },
    experience: { current: "Current", past: "Professional Experience" },
    roles: {
      "Design Manager":    "Design Manager",
      "Creative Director": "Creative Director",
      "Head of Design":    "Head of Design",
      "Design Director":   "Design Director",
      "Senior Designer":   "Senior Designer",
      "Founder":           "Founder",
      "Designer":          "Designer",
      "Creative Direction":"Creative Direction",
      "Product Design":    "Product Design",
    },
    footer: {
      skills:      "Professional Skills",
      clients:     "Clients",
      contact:     "Contact",
      recognition: "Recognition",
    },
    skills: [
      "Creative Direction",
      "Product Envisioning",
      "Team Management",
      "Visual Design & Generative AI",
      "Branding Experiences",
    ],
    playground: {
      label: "Playground",
      p1: "A space for visual experimentation, graphic design, hand-craft, calligraphy, typography, generative graphics, illustration, AI images and creative research. These are initiatives that happen in my creative adventures, driven purely by curiosity and the desire to push visual boundaries.",
    },
    contact: {
      label: "Contact",
      subtitle: "The best way to reach me is right here below.\nI personally read everything that lands in my inbox.",
    },
    about: {
      intro1:
        "With 18+ years of professional experience, Pedro is a Brazilian/Swiss designer and creative director working at the intersection of digital products and branding experience — from understanding business strategy to delivering final prototypes.",
      intro2a: "Fueled by curiosity, founder of",
      intro2b:
        ", a studio crafting new motion and visual solutions using GenAI for the creative industry.",
      quote:
        "I do believe in the power of craft leading by business needs, always collaborating with teams to achieve better results — whether it's concept design, a user-centered approach or leading creative teams.",
      experienceLabel: "Main experiences",
      recognitionLabel: "Recognition",
      skills: [
        "Team Management",
        "User Experience Design",
        "Branding",
        "Visual Design",
        "Product Envisioning",
        "Design Process Consulting",
        "Team Growth & Leadership",
        "Strong Sales Experience",
        "Entrepreneurial Background",
      ],
      descriptions: {
        mercadoPago:
          "Responsible for elevating design quality standards and driving creative excellence across teams. Acts as both leader and team player, fostering collaboration between design, product, and business areas. With a strong focus on visual craft and creativity, guiding the team to deliver cohesive, innovative, and impactful experiences that strengthen Mercado Livre's and Mercado Pago's brand and digital product presence.",
        rise:
          "Shaped the agency's creative vision and brought innovative concepts to life. Oversaw the strategic direction of projects, ensuring alignment with client objectives while pushing boundaries to deliver cutting-edge solutions. Led and inspired a multidisciplinary team, fostering collaboration and maintaining high creative standards.",
        meiuca:
          "Pushed the boundaries of digital design and product vision, creating visually stunning and functional products that resonate with users. Led the team in delivering exceptional digital experiences through a strategic mindset and collaborative creative environment.",
        descomplica:
          "Conducted thorough industry research to determine the direction of branding experiences and digital products. Created and led the first branding refresh, setting new positioning and values. Designed and built design systems, modular and scalable design patterns — hired and built design teams, setting process and culture.",
        ddb:
          "Led the design team to push conventional boundaries with unique concepts and identities. Responsible for the digital global soccer account of Adidas, creating part of the design modular system. Developed the global design system for Royal Canin, including photography, iconography, and digital assets.",
        workCo:
          "Led digital product design projects for clients including Facebook and Santander. Responsible for ensuring the team's work communicates effectively with the highest quality, solving business challenges and meeting user needs across all stages of design development.",
        google:
          "Created interactive digital projects for Google's Cultural Institute, including Performing Arts With Google — a fully immersive 360° experience allowing anyone to step on stage with world-renowned actors, singers, and dancers.",
      },
    },
    common: {
      backToWorks:    "← Works",
      backToMP:       "← Mercado Pago",
      backToWorksBtn: "Back to Works",
      worksSection:   "Works",
      year:           "Year",
      role:           "Role",
      category:       "Category",
      foundations:    "Foundations",
      projects:       "Projects",
      liveProject:    "Live project",
    },
    pages: {
      mercadoPago: {
        desc1: "Leading design for Mercado Pago, Latin America's largest fintech, with over 60 million active users across 7 countries. Responsible for design craft and strategic direction across product design, design systems, and motion, working at the intersection of scale, speed, and quality.",
        desc2: "UX as a business lever: design decisions at this scale touch millions of real financial interactions daily. My role is to keep quality high and intentional, directing a team of designers while staying close to the craft through prototyping, tooling, and hands-on UX and creative direction.",
      },
      motionFoundations: {
        intro1: "How Mercado Pago moves. A shared language of motion built for a product operating across 11 verticals and 7 countries, so that every transition, micro-interaction, and expressive moment feels like it comes from the same place.",
        intro2: "Motion should feel agile and reliable, starting with speed, ending with serenity. Three typologies translate design principles into behavior. The typology is chosen by the intention of the screen, not by style or technique.",
        foundations: [
          {
            label: "Gestures",
            body: "Motion responds to user gestures, confirming punctual actions and accompanying continuous interactions. Tap, long press, swipe, scroll: each gesture type has its own motion response.",
          },
          {
            label: "Stagger",
            body: "Components move in sequence to create rhythm, hierarchy, and focus. Stagger adds small delays between elements, 50ms steps for simple components, 2–3 steps for complex experiences.",
          },
          {
            label: "Skeleton",
            body: "Skeletons maintain structure and hierarchy during content loading. They appear only for dynamic content; static content loads directly on screen.",
          },
        ],
        principles: [
          {
            label: "Immediacy",
            tagline: "Functional experiences.",
            description: "Adds clarity and efficiency to the task, acting as a silent guide with immediate feedback. Motion gets out of the way and lets the product breathe.",
            examples: [
              { label: "Screen Transition", context: "Payments hub, the transition feels agile and reacts in real time." },
              { label: "Shared Element",    context: "Payment list detail, the avatar travels seamlessly between screens." },
              { label: "In-App Flow",       context: "Quick transfer, agile action with immediate confirmation." },
            ],
          },
          {
            label: "Focus",
            tagline: "Balanced experiences.",
            description: "Organizes motion around the protagonist element to create hierarchy and guide attention. When something matters, the animation makes sure the eye knows where to go. The shared element is reserved for transitions where it reinforces a real relationship between screens.",
            examples: [
              { label: "Screen Transition", context: "Cards, carousel with 180° card rotation." },
              { label: "Shared Element",    context: "Banking tab, the piggy bank guides the transition between screens." },
              { label: "Micro-interaction", context: "Activity detail, expansion with chevron feedback." },
              { label: "In-App Flow",       context: "Card request, immersive full-screen experience up to final confirmation." },
            ],
          },
          {
            label: "Immersion",
            tagline: "Expressive experiences.",
            description: "Becomes the story, using cinematic resources to generate presence and depth. For high-value emotional moments: onboarding, celebrations, premium product reveals. Expressive illustration can take center stage and fill the entire screen in celebrations, special states, or high emotional-value moments.",
            examples: [
              { label: "Screen Transition", context: "Scoring, the transition highlights and celebrates the user's milestone." },
              { label: "Shared Element",    context: "Credit card onboarding, the card expands creating an atmosphere of prestige." },
              { label: "In-App Flow",       context: "Bill payment, accompanying the user through to final confirmation." },
            ],
          },
        ],
      },
      artDirection: {
        intro1: "A unified visual identity for Mercado Pago, built simultaneously across photography, iconography, and 3D. The work consolidates and evolves the brand's creative language across formats and markets — ensuring every touchpoint feels coherent, intentional, and unmistakably on-brand at the scale of Latin America's largest fintech.",
        intro2: "Art direction operating across live campaign photography, AI-assisted 3D assets, and iconographic systems. Spanning 11 verticals and 7 countries, the project defines how the brand looks and feels wherever it appears — from product screens to campaign visuals.",
      },
      visualDesign: {
        intro1: "The visual and creative evolution of Mercado Pago's aesthetic language — from product surfaces to campaign pages to the hardware itself. A shift toward a louder, more confident brand: yellow as the field, type as the voice, and the Point as a designed object.",
        intro2: "The work tightens how the brand looks and feels at the scale of Latin America's largest fintech. Bold headlines, saturated yellow fields, and a product UI that treats rates, devices, and checkout as one system — so every surface, from a rates page to a Point Smart screen, speaks with the same weight.",
      },
      mpcraft: {
        intro1: "A leadership development program designed for Mercado Pago's design team leads, built on a simple conviction: collective quality is a system, not a talent. MPCraft creates the conditions — rituals, language, and shared practice — for design excellence to emerge consistently, not occasionally.",
        intro2: "The program operates across two tracks. The craft track develops visual judgment and AI fluency across the full team. The leadership track shapes how design leads build, prototype, and influence — grounding the builder archetype not in aspiration but in daily practice.",
        pillarsLabel: "Leadership Pillars",
        initiativesLabel: "Initiatives",
        ritualsLabel: "Rituals",
        pillars: [
          {
            label: "Craft Obsession",
            body: "Leaders model excellence through critical judgment, not by doing the team's work. Constant reference study, design decision debate, and an uncompromising eye for quality at every detail.",
          },
          {
            label: "Hands-On Leadership",
            body: "Design leaders who stop designing lose context and credibility. Prototyping, AI exploration, and proof-of-concept building are leadership acts — leading through example, not discourse.",
          },
          {
            label: "Radical Collaboration",
            body: "The best work emerges from perspective collision. Leadership creates environments where design, product, engineering, and data intersect — shifting from who had the idea to how to build the best solution.",
          },
          {
            label: "Innovation Through Making",
            body: "Innovation is a consequence of experimentation. More doing, less discussing. Leaders build clarity by building — using uncertainty as motivation, not as an excuse for inaction.",
          },
        ],
        initiatives: [
          {
            label: "AIAD",
            body: "AI-driven art direction with rational foundations. Structured briefing, reference mapping, intentional prompting, and rational validation — a repeatable framework for AI-assisted creative decisions.",
          },
          {
            label: "AIUD",
            body: "AI as co-pilot in user research, compressing the cycle between field work and design decisions. Faster synthesis, sharper insight, more time for design.",
          },
          {
            label: "Builder Sprint",
            body: "Monthly sessions where leaders construct prototypes, systems, or tools alongside teams. Not delegated. Built together.",
          },
        ],
        agenticLabel: "Agentic Leadership",
        agenticIntro: "The next layer of MPCraft is operational: AI agents embedded in how leadership works day-to-day — not as productivity tools, but as co-pilots that extend the design leader's thinking, speed, and reach.",
        agentic: [
          {
            label: "Systemic Thinking",
            body: "Agents that map dependencies, surface patterns across projects, and model consequences before decisions are made. Leadership that thinks in systems: how a choice in one vertical reverberates across nine others, how a design decision today shapes engineering cost next quarter. Clarity built before the meeting, not during it.",
          },
          {
            label: "Framework Generation",
            body: "Moving from blank-canvas frameworks to AI-assisted scaffolding. Agents generate starting structures grounded in real project data, challenge inherited assumptions, and propose new mental models before the team commits to a direction. The goal is not to remove thinking — it's to start further ahead.",
          },
          {
            label: "Handoff Acceleration",
            body: "Agents that compress the gap between design decisions and implementation. Auto-generated specs, design rationale translated into engineering language, edge cases surfaced before review. Fewer cycles of back-and-forth. More time building the right thing, less time clarifying what was meant.",
          },
          {
            label: "Ideation at Volume",
            body: "Leaders who use AI to dramatically increase the density of ideas before converging. Not to replace judgment — to multiply the starting surface area so the best ideas have a real chance of emerging. The constraint shifts from how many ideas can we generate to which ones are actually worth pursuing.",
          },
        ],
        rituals: [
          {
            label: "Design Tasting",
            duration: "45 min — weekly",
            body: "One reference. One guided discussion. One shared criterion — applied to real work. Not an inspiration board: a weekly session where the team dissects a single piece across typography, photography, motion, or editorial design. The question is never 'do you like it?' but 'why does it work, and what does it teach us?' Over time, the accumulated vocabulary becomes the team's shared creative language — the standard the work is measured against.",
          },
          {
            label: "UX Critique",
            duration: "45 min — monthly",
            body: "Team work meets structured diagnosis. Before each session, AI runs a category-based analysis of the work under review — heuristics, benchmarks, accessibility, business rationale, assumptions. The critique itself converts subjective reactions into defensible, documented decisions. Over time, patterns emerge across projects: feedback stops being individual opinion and becomes institutional knowledge the team can build on.",
          },
          {
            label: "Skill Drop",
            duration: "Async — monthly",
            body: "10 minutes of context, live demonstration, and measurable result — via Loom, posted directly to Slack. No slides, no meetings. Each drop shows a real workflow improvement from an active project: what the problem was, how AI changed the approach, what the outcome looked like. The format compounds: a growing library of team-built techniques anyone can adapt. Evidence of fluency, not performance of fluency.",
          },
          {
            label: "AI Workflows Clinic",
            duration: "Monthly — Team Leads",
            body: "Each Team Lead documents and shares a real AI-assisted workflow from a live project. Not a tutorial — a transparent account of how AI changed how they worked, where it helped, and where it didn't. Leadership through example: the goal is to show AI fluency in practice, building a shared evidence base of what AI actually changes at this scale, with these constraints.",
          },
          {
            label: "AI Pair Design",
            duration: "Monthly — Team Leads",
            body: "Leaders prototype directly with AI and make the process visible to their teams. A raw working session — not a polished demo. The output is both the artifact and the thinking behind it: teams see how a leader breaks down a problem, prompts, iterates, and decides. Builder spirit in practice: building to learn, not building to present.",
          },
        ],
      },
      uxEvolve: {
        intro1: "UxEvolve is Mercado Pago's annual UX summit, an internal gathering that brings the entire product design team together to look back at a year of work and forward at what's next. Part celebration, part working session: a space to share craft, align on where the discipline is heading, and recognize the effort behind the year's shipped work.",
        intro2: "Structured as a series of short talks interwoven with cinematic separators, motion, and a shared visual identity, the summit's format is itself a piece of design: every transition, every slide, treated with the same care as the product work it celebrates.",
        hostsLabel: "Hosted by",
        agendaLabel: "Agenda",
        visualLabel: "Visual Identity",
        conceptLabel: "The Concept",
        conceptText: "The visual concept started by mapping the event's themes and translating them into a single system built to move at the pace of the summit itself: a dynamic grid and generous negative space, flexible enough to hold seven different talks under one voice. The result reads as dynamism and modernity — a language designed to energize a team of roughly 500 people.",
        evolutionLabel: "The Evolution",
        evolutionText: "Beyond the event itself, UxEvolve marks a shift in how the team works: raising the bar for craft quality and sharpening design taste across every deliverable. It also signals the evolution toward a unified design role — no longer separating content from visual design, but encouraging every designer to own both as a single practice.",
        hosts: [
          { name: "Julia Lima", role: "Expert" },
          { name: "Leandro Di Pasquale", role: "Sr. Director" },
          { name: "Debora Lambrechts", role: "Sr. Manager" },
        ],
        talks: [
          { label: "Design Principles", speakers: "Nacho Bogo" },
          { label: "Design System", speakers: "Gae, Mavi" },
          { label: "Landings & Desktop", speakers: "Vale Slo, Lucho, Pedro Julien" },
          { label: "Design Tasting", speakers: "Julio Gómez" },
          { label: "MELI Studio", speakers: "Ernest" },
          { label: "AI Prototyping", speakers: "Fratín" },
          { label: "Andes Converter", speakers: "Santi Camargo, Sol Kiernan" },
        ],
      },
      sute: {
        desc1: "Sute is a digital product built to bring order to complex information landscapes, taking what is normally dense, fragmented data and making it feel calm, navigable, and human.",
        desc2: "I led the design end-to-end alongside a small, focused team. The work spanned foundational research and product strategy, information architecture, the full UI system, motion principles, and the editorial tone that runs through every screen.",
        desc3: "Restrained type, deliberate negative space, and a quiet palette anchor the product. The visual language stays intentionally subdued so that the data, decisions, and the people using it remain the loudest voices in the room.",
      },
      artas: {
        desc1: "Artas is a social art platform that reimagines how visual art is discovered and shared online. Instead of a flat grid gallery, it opens with an immersive 3D spatial navigation experience: a starfield universe where artworks float as explorable nodes.",
        desc2: "Built with Three.js and Unreal Bloom post-processing, full WebGL pipeline with a 10,000-particle starfield. 6,100+ lines of handcrafted vanilla JS, modular ES6 architecture, Firebase backend. Zero frameworks, zero bundlers.",
        desc3a: "The entire project was designed and built using ",
        desc3b: "AI and Claude Code",
        desc3c: " as the primary development tool, an experiment in human + AI co-creation at every stage, from concept to shipped product.",
      },
      caju: {
        desc1:      "Caju is one of Brazil's leading corporate benefits platforms. Working through Meiuca, we led the redesign of its app and web portal, evolving the product experience to match the energy of the brand.",
        desc2:      "The work established a new visual language and design system foundations: color, typography, iconography, spacing and component tokens, bringing consistency across the employee app and the corporate dashboard.",
        desc3:      "The system was built for personalization, with theming capabilities that let the interface flex across brand moments and contexts without losing coherence, from onboarding to daily transactions.",
        descMobile: "Redesign of Caju's benefits app: new visual language, design system foundations and a themeable, personalizable interface.",
        lead1:      "As team lead, I proposed and drove the visual revamp, bringing more creativity into the product while keeping its growth organized as the platform scaled exponentially.",
        lead2:      "Leading meant setting direction and pace: aligning designers, product and engineering around a single visual language, and turning brand energy into shippable product decisions.",
        dyn1:       "I ran recurring creative dynamics with the team, sessions designed to move ideas into shipped product fast, aimed directly at the metrics that matter.",
        dyn2:       "Every cycle targeted activation, time in product, recommendation and satisfaction, measured, reviewed and fed back into the next round of design work.",
        kpisTitle:  "Impact",
        kpis: [
          { value: "+38%", label: "Activation" },
          { value: "+27%", label: "Time in product" },
          { value: "+21 pts", label: "Recommendation (NPS)" },
          { value: "92%", label: "Satisfaction (CSAT)" },
        ],
        kpisNote:   "12 months post-rollout (2024) vs. 2023 baseline, in line with benchmarks for app redesigns in the benefits and fintech segment.",
        scale1:     "The design system foundations made that growth sustainable: new squads, new benefit lines and new brand moments could ship fast without fragmenting the experience.",
      },
      combustion: {
        desc:       "Rebranding of a São Paulo-based sound design studio with a strong international presence. A new visual identity built to match the weight and reach of their work, bold, precise and unmistakably sonic.",
        descMobile: "Rebranding of a São Paulo-based sound design studio, bold, precise and unmistakably sonic.",
      },
      foracle: {
        desc: "Foracle is a free font recommendation platform built on human and AI curation. Designed to give back to the design community, type designers, typographers, and font enthusiasts, by surfacing and amplifying the best free typefaces from around the world.",
      },
      mude: {
        desc1:      "Mude is a wellness app designed to help people build sustainable mindfulness habits. Motivating and calm, encouraging consistency without adding pressure.",
        desc2:      "Organizes daily wellness practices into digestible routines using gentle prompts and clear visual feedback. Every interaction reduces friction so healthy habits feel effortless to start and maintain.",
        desc3:      "Clean space, deliberate typography, and a soft color system that signals calm without being passive. Built for real life.",
        descMobile: "A wellness app designed to help people build sustainable mindfulness habits.",
      },
      myPhone: {
        desc1: "My Phone is a branding project exploring the visual identity of a personal device brand, built around the idea that technology should feel human, tactile, and distinctly yours.",
        desc2: "The work covers brand identity, visual language, typography, and art direction, designed to feel bold and minimal at the same time.",
      },
    },
    copyright: "© Pedro Julien 2026",
  },
  pt: {
    nav: { bio: "Works", playground: "Playground", contact: "About & Contact" },
    bio: {
      label: "Bio",
      p1: "Designer com mais de 20 anos moldando produtos digitais e experiências de branding. Da ideação inicial ao craft visual refinado até produtos e soluções entregues, usando IA como força criativa. Hands-on por natureza, lidero fazendo, mantendo proximidade com o craft em estratégia, design e execução.",
      p4a: "Fundador da",
      p4b: ".",
      cta: "Entre em contato",
      scroll: "Scroll down",
    },
    projects: { type: "Tipo", year: "Ano", role: "Cargo", name: "Nome do Projeto" },
    works: { craft: "Craft", build: "Artefatos Digitais" },
    categories: {
      "Design System":   "Sistema de Design",
      "Brand Identity":  "Identidade de Marca",
      "Digital Product": "Produto Digital",
      "Interactive":     "Interativo",
      "Product Design":  "Product Design",
      "Branding":        "Branding",
      "Creative":        "Sistema Criativo",
      "Leadership":      "Liderança",
      "Culture":         "Cultura",
    },
    experience: { current: "Atual", past: "Experiência Profissional" },
    roles: {
      "Design Manager":    "Gerente de Design",
      "Creative Director": "Diretor Criativo",
      "Head of Design":    "Head de Design",
      "Design Director":   "Diretor de Design",
      "Senior Designer":   "Designer Sênior",
      "Founder":           "Fundador",
      "Designer":          "Designer",
      "Creative Direction":"Direção Criativa",
      "Product Design":    "Product Design",
    },
    footer: {
      skills:      "Habilidades",
      clients:     "Clientes",
      contact:     "Contato",
      recognition: "Reconhecimento",
    },
    skills: [
      "Direção Criativa",
      "Visão de Produto",
      "Gestão de Times",
      "Design Visual & IA Generativa",
      "Experiências de Branding",
    ],
    playground: {
      label: "Playground",
      p1: "Um espaço de experimentação visual, design gráfico, hand-craft, caligrafia, tipografia, gráficos generativos, ilustração, imagens com IA e pesquisa criativa. São iniciativas que acontecem nas minhas aventuras criativas, movidas pela curiosidade e pelo desejo de expandir os limites visuais.",
    },
    contact: {
      label: "Contato",
      subtitle: "A melhor forma de falar comigo está aqui embaixo.\nLeio pessoalmente tudo que chega na minha caixa de entrada.",
    },
    about: {
      intro1:
        "Com mais de 18 anos de experiência profissional, Pedro é um designer e diretor criativo brasileiro/suíço que atua na interseção de produtos digitais e experiências de branding — desde a compreensão da estratégia de negócio até a entrega de protótipos finais.",
      intro2a: "Movido pela curiosidade, fundador da",
      intro2b:
        ", um estúdio que cria novas soluções de motion e visual usando GenAI para a indústria criativa.",
      quote:
        "Acredito no poder do craft guiado pelas necessidades do negócio, sempre colaborando com os times para alcançar melhores resultados — seja no design conceitual, em uma abordagem centrada no usuário ou na liderança de times criativos.",
      experienceLabel: "Principais experiências",
      recognitionLabel: "Reconhecimento",
      skills: [
        "Gestão de Times",
        "Design de Experiência do Usuário",
        "Branding",
        "Design Visual",
        "Visão de Produto",
        "Consultoria em Processo de Design",
        "Crescimento e Liderança de Times",
        "Forte Experiência em Vendas",
        "Background Empreendedor",
      ],
      descriptions: {
        mercadoPago:
          "Responsável por elevar os padrões de qualidade de design e impulsionar a excelência criativa em toda a organização. Atua como líder e membro do time, promovendo a colaboração entre design, produto e áreas de negócio. Com forte foco em craft visual e criatividade, guia o time para entregar experiências coesas, inovadoras e impactantes que fortalecem a presença de marca e produto digital do Mercado Livre e Mercado Pago.",
        rise:
          "Moldou a visão criativa da agência e trouxe conceitos inovadores à vida. Supervisionou a direção estratégica dos projetos, garantindo alinhamento com os objetivos dos clientes e ultrapassando limites para entregar soluções de ponta. Liderou e inspirou um time multidisciplinar, promovendo colaboração e mantendo altos padrões criativos.",
        meiuca:
          "Empurrou os limites do design digital e da visão de produto, criando produtos visualmente impressionantes e funcionais que ressoam com os usuários. Liderou o time na entrega de experiências digitais excepcionais através de uma mentalidade estratégica e ambiente criativo colaborativo.",
        descomplica:
          "Conduziu pesquisas aprofundadas do setor para determinar a direção das experiências de branding e produtos digitais. Criou e liderou o primeiro rebranding da empresa, estabelecendo novo posicionamento e valores. Projetou e construiu design systems, padrões modulares e escaláveis — contratou e construiu times de design, estabelecendo processos e cultura.",
        ddb:
          "Liderou o time de design para ultrapassar limites convencionais com conceitos e identidades únicos. Responsável pela conta global de futebol digital da Adidas, criando parte da estrutura do sistema de design modular. Desenvolveu o design system global para a Royal Canin, incluindo fotografia, iconografia e assets digitais.",
        workCo:
          "Liderou projetos de design de produto digital para clientes como Facebook e Santander. Responsável por garantir que o trabalho do time comunicasse com efetividade e alta qualidade, solucionando desafios de negócio e atendendo às necessidades dos usuários em todas as etapas do desenvolvimento.",
        google:
          "Criou projetos digitais interativos para o Instituto Cultural do Google, incluindo o Performing Arts With Google — uma experiência imersiva em 360° que permite a qualquer pessoa subir ao palco com atores, cantores e dançarinos de renome mundial.",
      },
    },
    common: {
      backToWorks:    "← Works",
      backToMP:       "← Mercado Pago",
      backToWorksBtn: "Voltar",
      worksSection:   "Works",
      year:           "Ano",
      role:           "Cargo",
      category:       "Categoria",
      foundations:    "Fundamentos",
      projects:       "Projetos",
      liveProject:    "Ver projeto",
    },
    pages: {
      mercadoPago: {
        desc1: "Liderando design no Mercado Pago, a maior fintech da América Latina, com mais de 60 milhões de usuários ativos em 7 países. Responsável pelo craft de design e direção estratégica em product design, design systems e motion, trabalhando na interseção de escala, velocidade e qualidade.",
        desc2: "UX como alavanca de negócio: decisões de design nessa escala impactam milhões de interações financeiras reais diariamente. Meu papel é manter a qualidade alta e intencional, dirigindo um time de designers enquanto permaneço próximo ao craft por meio de prototipagem, tooling e direção criativa hands-on.",
      },
      motionFoundations: {
        intro1: "Como o Mercado Pago se move. Uma linguagem compartilhada de motion construída para um produto que opera em 11 verticais e 7 países, para que cada transição, micro-interação e momento expressivo pareça vir do mesmo lugar.",
        intro2: "O motion deve parecer ágil e confiável, começando com velocidade e terminando com serenidade. Três tipologias traduzem princípios de design em comportamento. A tipologia é escolhida pela intenção da tela, não por estilo ou técnica.",
        foundations: [
          {
            label: "Gestos",
            body: "O motion responde aos gestos do usuário, confirmando ações pontuais e acompanhando interações contínuas. Tap, long press, swipe, scroll: cada tipo de gesto tem sua própria resposta de motion.",
          },
          {
            label: "Stagger",
            body: "Componentes se movem em sequência para criar ritmo, hierarquia e foco. O stagger adiciona pequenos atrasos entre elementos: passos de 50ms para componentes simples, 2 a 3 passos para experiências complexas.",
          },
          {
            label: "Skeleton",
            body: "Skeletons mantêm estrutura e hierarquia durante o carregamento de conteúdo. Aparecem apenas para conteúdo dinâmico; conteúdo estático carrega diretamente na tela.",
          },
        ],
        principles: [
          {
            label: "Imediatividade",
            tagline: "Experiências funcionais.",
            description: "Adiciona clareza e eficiência à tarefa, agindo como guia silencioso com feedback imediato. O motion sai do caminho e deixa o produto respirar.",
            examples: [
              { label: "Transição de Tela",       context: "Payments hub, a transição parece ágil e reage em tempo real." },
              { label: "Elemento Compartilhado",   context: "Payment list detail, o avatar viaja suavemente entre as telas." },
              { label: "Fluxo In-App",             context: "Quick transfer, ação ágil com confirmação imediata." },
            ],
          },
          {
            label: "Foco",
            tagline: "Experiências equilibradas.",
            description: "Organiza o motion em torno do elemento protagonista para criar hierarquia e guiar a atenção. Quando algo importa, a animação garante que o olho saiba para onde ir. O shared element é reservado para transições onde reforça uma relação real entre telas.",
            examples: [
              { label: "Transição de Tela",       context: "Cards, carrossel com rotação de 180° do cartão." },
              { label: "Elemento Compartilhado",   context: "Banking tab, o porquinho-cofrinho guia a transição entre telas." },
              { label: "Micro-interação",          context: "Activity detail, expansão com feedback de chevron." },
              { label: "Fluxo In-App",             context: "Card request, experiência full-screen imersiva até a confirmação final." },
            ],
          },
          {
            label: "Imersão",
            tagline: "Experiências expressivas.",
            description: "Torna-se a história, usando recursos cinematográficos para gerar presença e profundidade. Para momentos emocionais de alto valor: onboarding, celebrações, reveals de produtos premium. A ilustração expressiva pode ocupar o centro e preencher toda a tela em celebrações, estados especiais ou momentos de alto valor emocional.",
            examples: [
              { label: "Transição de Tela",       context: "Scoring, a transição destaca e celebra o marco do usuário." },
              { label: "Elemento Compartilhado",   context: "Credit card onboarding, o cartão se expande criando uma atmosfera de prestígio." },
              { label: "Fluxo In-App",             context: "Bill payment, acompanhando o usuário até a confirmação final." },
            ],
          },
        ],
      },
      artDirection: {
        intro1: "Uma identidade visual unificada para o Mercado Pago, construída simultaneamente em fotografia, iconografia e 3D. O trabalho consolida e evolui a linguagem criativa da marca em formatos e mercados — garantindo que cada ponto de contato seja coerente, intencional e inegavelmente alinhado à marca na escala da maior fintech da América Latina.",
        intro2: "Direção de arte atuando em fotografia de campanha ao vivo, assets 3D assistidos por IA e sistemas iconográficos. Abrangendo 11 verticais e 7 países, o projeto define como a marca se apresenta onde quer que apareça — das telas do produto aos visuais de campanha.",
      },
      visualDesign: {
        intro1: "A evolução visual e criativa da linguagem estética do Mercado Pago — das superfícies de produto às páginas de campanha até o hardware. Um movimento em direção a uma identidade mais assertiva: o amarelo como campo, a tipografia como voz, e o Point como objeto de design.",
        intro2: "O trabalho aperta como a marca se apresenta na escala da maior fintech da América Latina. Títulos ousados, campos de amarelo saturado e uma UI de produto que trata taxas, dispositivos e checkout como um só sistema — para que cada superfície, de uma página de taxas à tela do Point Smart, fale com o mesmo peso.",
      },
      mpcraft: {
        intro1: "Um programa de desenvolvimento de liderança criado para os design leads do Mercado Pago, construído sobre uma convicção simples: qualidade coletiva é sistema, não talento. O MPCraft cria as condições — rituais, linguagem e prática compartilhada — para que a excelência em design emerja de forma consistente, não ocasional.",
        intro2: "O programa opera em duas frentes. A trilha de craft desenvolve julgamento visual e fluência em IA em todo o time. A trilha de liderança forma como os design leads constroem, prototipam e influenciam — ancorando o arquétipo de builder não em aspiração, mas em prática diária.",
        pillarsLabel: "Pilares de Liderança",
        initiativesLabel: "Iniciativas",
        ritualsLabel: "Rituais",
        agenticLabel: "Liderança Agêntica",
        agenticIntro: "A próxima camada do MPCraft é operacional: agentes de IA integrados ao dia a dia da liderança — não como ferramentas de produtividade, mas como co-pilotos que ampliam o pensamento, a velocidade e o alcance do design leader.",
        agentic: [
          {
            label: "Pensamento Sistêmico",
            body: "Agentes que mapeiam dependências, identificam padrões entre projetos e modelam consequências antes das decisões serem tomadas. Liderança que pensa em sistemas: como uma escolha em uma vertical reverbera em outras nove, como uma decisão de design hoje impacta o custo de engenharia no próximo trimestre. Clareza construída antes da reunião, não durante ela.",
          },
          {
            label: "Geração de Frameworks",
            body: "Sair de frameworks de tela em branco para scaffolding assistido por IA. Agentes geram estruturas de partida fundamentadas em dados reais do projeto, desafiam premissas herdadas e propõem novos modelos mentais antes de o time se comprometer com uma direção. O objetivo não é remover o pensamento — é começar mais à frente.",
          },
          {
            label: "Aceleração de Handoff",
            body: "Agentes que comprimem o gap entre decisões de design e implementação. Specs geradas automaticamente, racional de design traduzido para linguagem de engenharia, edge cases identificados antes da revisão. Menos ciclos de ida e volta. Mais tempo construindo a coisa certa, menos tempo explicando o que foi pensado.",
          },
          {
            label: "Ideação em Volume",
            body: "Líderes que usam IA para aumentar dramaticamente a densidade de ideias antes de convergir. Não para substituir o julgamento — para multiplicar a superfície de partida e dar às melhores ideias uma chance real de emergir. O constraint muda: não mais quantas ideias conseguimos gerar, mas quais delas valem de fato a pena perseguir.",
          },
        ],
        pillars: [
          {
            label: "Obsessão com Craft",
            body: "Líderes modelam excelência por meio de julgamento crítico, não fazendo o trabalho do time. Estudo constante de referências, debate de decisões de design e um olhar implacável para a qualidade em cada detalhe.",
          },
          {
            label: "Liderança Hands-On",
            body: "Design leads que param de projetar perdem contexto e credibilidade. Prototipar, explorar IA e construir proofs-of-concept são atos de liderança — liderar pelo exemplo, não pelo discurso.",
          },
          {
            label: "Colaboração Radical",
            body: "O melhor trabalho nasce da colisão de perspectivas. A liderança cria ambientes onde design, produto, engenharia e dados se cruzam — deslocando o foco de quem teve a ideia para como construir a melhor solução.",
          },
          {
            label: "Inovação pelo Fazer",
            body: "Inovação é consequência da experimentação. Mais fazendo, menos discutindo. Líderes constroem clareza construindo — usando a incerteza como motivação, não como desculpa para a inação.",
          },
        ],
        initiatives: [
          {
            label: "AIAD",
            body: "Direção de arte orientada por IA com fundamentos racionais. Briefing estruturado, mapeamento de referências, prompts intencionais e validação racional — um framework repetível para decisões criativas assistidas por IA.",
          },
          {
            label: "AIUD",
            body: "IA como co-piloto em pesquisa com usuários, comprimindo o ciclo entre trabalho de campo e decisões de design. Síntese mais rápida, insights mais precisos, mais tempo para o design.",
          },
          {
            label: "Builder Sprint",
            body: "Sessões mensais onde líderes constroem protótipos, sistemas ou ferramentas junto com os times. Não delegado. Construído juntos.",
          },
        ],
        rituals: [
          {
            label: "Design Tasting",
            duration: "45 min — semanal",
            body: "Uma referência. Uma discussão guiada. Um critério compartilhado — aplicado ao trabalho real. Não é um mural de inspiração: é uma sessão semanal onde o time disseca uma única peça em tipografia, fotografia, motion ou design editorial. A pergunta não é 'você gostou?' mas 'por que funciona e o que isso nos ensina?' Com o tempo, o vocabulário acumulado se torna a linguagem criativa compartilhada do time — o padrão pelo qual o trabalho é medido.",
          },
          {
            label: "UX Critique",
            duration: "45 min — mensal",
            body: "O trabalho do time encontra diagnóstico estruturado. Antes de cada sessão, a IA executa uma análise por categorias do trabalho em revisão — heurísticas, benchmarks, acessibilidade, racional de negócio, premissas. A crítica em si converte reações subjetivas em decisões defensáveis e documentadas. Com o tempo, padrões emergem entre projetos: o feedback deixa de ser opinião individual e se torna conhecimento institucional que o time pode evoluir.",
          },
          {
            label: "Skill Drop",
            duration: "Async — mensal",
            body: "10 minutos de contexto, demonstração ao vivo e resultado mensurável — via Loom, direto no Slack. Sem slides, sem reunião. Cada drop mostra uma melhoria real de fluxo de trabalho de um projeto ativo: qual era o problema, como a IA mudou a abordagem, como ficou o resultado. O formato se acumula: uma biblioteca crescente de técnicas do próprio time que qualquer pessoa pode adaptar. Evidência de fluência, não performance de fluência.",
          },
          {
            label: "AI Workflows Clinic",
            duration: "Mensal — Team Leads",
            body: "Cada Team Lead documenta e compartilha um fluxo de trabalho real assistido por IA de um projeto ativo. Não é tutorial — é um relato transparente de como a IA mudou como trabalharam, onde ajudou e onde não ajudou. Liderança pelo exemplo: o objetivo é mostrar fluência em IA na prática, construindo uma base de evidências compartilhada sobre o que a IA de fato transforma nessa escala, com essas restrições.",
          },
          {
            label: "AI Pair Design",
            duration: "Mensal — Team Leads",
            body: "Líderes prototipam diretamente com IA e tornam o processo visível para o time. Uma sessão de trabalho bruta, não uma demo polida. O output é o artefato e o pensamento por trás dele: o time vê como o líder quebra um problema, constrói prompts, itera e decide. Espírito builder na prática: construir para aprender, não para apresentar.",
          },
        ],
      },
      uxEvolve: {
        intro1: "UxEvolve é o encontro anual de UX do Mercado Pago, uma reunião interna que junta todo o time de design de produto para revisitar um ano de trabalho e alinhar o que vem a seguir. Parte celebração, parte sessão de trabalho: um espaço para compartilhar craft, alinhar para onde a disciplina está indo e reconhecer o esforço por trás do que foi entregue no ano.",
        intro2: "Estruturado como uma série de talks curtas intercaladas por separadores cinematográficos, motion e uma identidade visual única, o formato do encontro é, em si, uma peça de design: cada transição, cada slide, tratado com o mesmo cuidado do trabalho de produto que celebra.",
        hostsLabel: "Apresentado por",
        agendaLabel: "Agenda",
        visualLabel: "Identidade Visual",
        conceptLabel: "O Conceito",
        conceptText: "O conceito visual partiu do mapeamento dos temas do evento, traduzidos em um único sistema construído para acompanhar o ritmo do próprio encontro: grid dinâmica e espaço negativo generoso, flexível o suficiente para sustentar sete talks diferentes sob uma só voz. O resultado é dinamismo e modernidade — uma linguagem pensada para inspirar um time de cerca de 500 pessoas.",
        evolutionLabel: "A Evolução",
        evolutionText: "Mais do que o evento em si, o UxEvolve marca uma mudança na forma de trabalhar do time: elevando a régua de qualidade do craft e refinando o taste de design em cada entrega. Também sinaliza a evolução para um role unificado — sem separar conteúdo de desenho, e sim estimulando que cada designer domine os dois como uma prática só.",
        hosts: [
          { name: "Julia Lima", role: "Expert" },
          { name: "Leandro Di Pasquale", role: "Sr. Director" },
          { name: "Debora Lambrechts", role: "Sr. Manager" },
        ],
        talks: [
          { label: "Princípios de Design", speakers: "Nacho Bogo" },
          { label: "Design System", speakers: "Gae, Mavi" },
          { label: "Landings & Desktop", speakers: "Vale Slo, Lucho, Pedro Julien" },
          { label: "Design Tasting", speakers: "Julio Gómez" },
          { label: "MELI Studio", speakers: "Ernest" },
          { label: "Prototipagem com IA", speakers: "Fratín" },
          { label: "Andes Converter", speakers: "Santi Camargo, Sol Kiernan" },
        ],
      },
      sute: {
        desc1: "Sute é um produto digital criado para trazer ordem a paisagens de informação complexas, transformando dados normalmente densos e fragmentados em algo calmo, navegável e humano.",
        desc2: "Liderei o design de ponta a ponta ao lado de um time pequeno e focado. O trabalho abrangeu pesquisa fundacional e estratégia de produto, arquitetura de informação, o sistema de UI completo, princípios de motion e o tom editorial que percorre cada tela.",
        desc3: "Tipografia contida, espaço negativo deliberado e uma paleta silenciosa ancoram o produto. A linguagem visual permanece intencionalmente discreta para que os dados, as decisões e as pessoas que os utilizam sejam as vozes mais altas da sala.",
      },
      artas: {
        desc1: "Artas é uma plataforma social de arte que reimagina como a arte visual é descoberta e compartilhada online. Em vez de uma galeria em grade plana, abre com uma experiência de navegação espacial 3D imersiva: um universo de estrelas onde obras flutuam como nós exploráveis.",
        desc2: "Construído com Three.js e pós-processamento Unreal Bloom, pipeline WebGL completo com um starfield de 10.000 partículas. Mais de 6.100 linhas de JS vanilla artesanal, arquitetura ES6 modular, backend Firebase. Zero frameworks, zero bundlers.",
        desc3a: "Todo o projeto foi projetado e construído usando ",
        desc3b: "IA e Claude Code",
        desc3c: " como ferramenta principal de desenvolvimento, um experimento de co-criação humano + IA em cada etapa, do conceito ao produto entregue.",
      },
      caju: {
        desc1:      "A Caju é uma das principais plataformas de benefícios corporativos do Brasil. Através da Meiuca, lideramos o redesign do app e do portal web, evoluindo a experiência do produto para acompanhar a energia da marca.",
        desc2:      "O trabalho estabeleceu uma nova linguagem visual e as fundações do design system: tokens de cor, tipografia, iconografia, espaçamento e componentes, trazendo consistência entre o app do colaborador e o painel corporativo.",
        desc3:      "O sistema foi construído para personalização, com capacidade de tematização que permite à interface flexionar entre momentos de marca e contextos sem perder coerência, do onboarding às transações do dia a dia.",
        descMobile: "Redesign do app de benefícios da Caju: nova linguagem visual, fundações de design system e uma interface tematizável e personalizável.",
        lead1:      "Como líder do time, propus e conduzi o revamp visual, trazendo mais criatividade ao produto enquanto mantinha o crescimento organizado num momento de escala exponencial da plataforma.",
        lead2:      "Liderar significou definir direção e ritmo: alinhar designers, produto e engenharia em torno de uma única linguagem visual, e transformar a energia da marca em decisões de produto entregáveis.",
        dyn1:       "Conduzi dinâmicas criativas recorrentes com o time, sessões desenhadas para levar ideias a produto entregue rapidamente, miradas diretamente nas métricas que importam.",
        dyn2:       "Cada ciclo mirava ativação, tempo de uso do produto, recomendação e satisfação, medidas, revisadas e realimentadas na rodada seguinte de design.",
        kpisTitle:  "Impacto",
        kpis: [
          { value: "+38%", label: "Ativação" },
          { value: "+27%", label: "Tempo de uso" },
          { value: "+21 pts", label: "Recomendação (NPS)" },
          { value: "92%", label: "Satisfação (CSAT)" },
        ],
        kpisNote:   "12 meses pós-rollout (2024) vs. baseline de 2023, em linha com benchmarks de redesigns de apps no segmento de benefícios e fintechs.",
        scale1:     "As fundações do design system tornaram esse crescimento sustentável: novas squads, novas linhas de benefício e novos momentos de marca podiam ser entregues rápido sem fragmentar a experiência.",
      },
      combustion: {
        desc:       "Rebranding de um estúdio de sound design de São Paulo com forte presença internacional. Uma nova identidade visual construída para corresponder ao peso e alcance de seu trabalho: precisa, ousada e inconfundivelmente sônica.",
        descMobile: "Rebranding de um estúdio de sound design de São Paulo, preciso, ousado e inconfundivelmente sônico.",
      },
      foracle: {
        desc: "Foracle é uma plataforma gratuita de recomendação de fontes construída sobre curadoria humana e de IA. Criada para retribuir à comunidade de design, tipógrafos, designers de tipos e entusiastas de fontes, divulgando e amplificando as melhores typefaces gratuitas do mundo.",
      },
      mude: {
        desc1:      "Mude é um app de bem-estar projetado para ajudar pessoas a construir hábitos sustentáveis de mindfulness. Motivador e calmo, encorajando consistência sem adicionar pressão.",
        desc2:      "Organiza práticas diárias de bem-estar em rotinas digeríveis usando prompts gentis e feedback visual claro. Cada interação reduz o atrito para que hábitos saudáveis pareçam fáceis de iniciar e manter.",
        desc3:      "Espaço limpo, tipografia deliberada e um sistema de cores suave que sinaliza calma sem ser passivo. Construído para a vida real.",
        descMobile: "Um app de bem-estar projetado para ajudar pessoas a construir hábitos sustentáveis de mindfulness.",
      },
      myPhone: {
        desc1: "My Phone é um projeto de branding que explora a identidade visual de uma marca de dispositivo pessoal, construído em torno da ideia de que a tecnologia deve parecer humana, tátil e inconfundivelmente sua.",
        desc2: "O trabalho abrange identidade de marca, linguagem visual, tipografia e direção de arte, projetado para parecer ao mesmo tempo ousado e mínimo.",
      },
    },
    copyright: "© Pedro Julien 2026",
  },
} as const;
