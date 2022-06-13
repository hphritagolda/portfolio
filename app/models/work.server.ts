export interface WorkPiece {
  slug: string;
  name: string;
  description: string;
  image: string;
  colour: "blue" | "orange" | "green" | "red";
}

export const works: WorkPiece[] = [
  {
    slug: "petcare",
    name: "Pet Care for RSCPA",
    description:
      "Designed for anyone with pets, the PetCare app makes it convenient for everyone to maintain and care for their pets. It's not about just their basic needs, it's about giving your furry friends the care they deserve.",
    image: "/images/petcare.png",
    colour: "orange",
  },
  {
    slug: "ivy-mae-photography",
    name: "Ivy Mae Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna non lectus dictum commodo. Suspendisse tempus vel libero eget tempus. In dictum sollicitudin metus at elementum.",
    image: "/images/ivy-mae.png",
    colour: "blue",
  },
  {
    slug: "creec",
    name: "CREEC App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna non lectus dictum commodo. Suspendisse tempus vel libero eget tempus. In dictum sollicitudin metus at elementum.",
    image: "/images/creec.png",
    colour: "green",
  },
  {
    slug: "scrolld",
    name: "Scroll'd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna non lectus dictum commodo. Suspendisse tempus vel libero eget tempus. In dictum sollicitudin metus at elementum.",
    image: "/images/scrolld.png",
    colour: "red",
  },
];
