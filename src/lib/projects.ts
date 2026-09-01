export type Project = {
  category: string;
  year: string;
  name: string;
  role: string;
  href?: string;
};

export const projects: Project[] = [
  { category: "Product Design", year: "2026", name: "Mercado Pago",              role: "Design Manager",  href: "/mercado-pago" },
  { category: "Product Design", year: "2026", name: "Foracle",                   role: "Designer",        href: "/foracle"   },
  { category: "Product Design", year: "2024", name: "Caju",                      role: "Head of Design",  href: "/caju"      },
  { category: "Product Design", year: "2024", name: "Mude",                      role: "Head of Design"  },
  { category: "Product Design", year: "2026", name: "Artas",                     role: "Designer",        href: "/artas"     },
  { category: "Branding",       year: "2020", name: "My Phone",                  role: "Designer",        href: "/my-phone"  },
  { category: "Branding",       year: "2022", name: "Descomplica",              role: "Design Manager"  },
  { category: "Design System",  year: "2018", name: "Royal Canin Design System", role: "Head of Design"  },
];
