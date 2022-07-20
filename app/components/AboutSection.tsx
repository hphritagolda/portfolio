import { Link } from "@remix-run/react";
import BlobLarge from "./blobs/BlobLarge";
import BlobSmall from "./blobs/BlobSmall";

const AboutSection = () => {
  return (
    <section className="relative mx-auto mb-16 max-w-4xl">
      <BlobLarge className="animation-offset-8 shift absolute -top-16 -right-12 -z-20 h-64 w-64 fill-blue" />
      <BlobLarge className="shift absolute -bottom-32 right-48 -z-20 h-48 w-48 rotate-90 fill-orange" />

      <Link to="/#about" className="group relative text-4xl">
        <span className="absolute -left-6 hidden  group-hover:block">#</span>
        <h2 id="about" className="highlighted-title mb-12 font-bold">
          About Me
        </h2>
      </Link>

      <div className="mb-12 flex flex-col items-center gap-12 md:flex-row">
        <div className="relative">
          <BlobSmall className="shift absolute left-0 -top-8 -z-20 h-28 w-28 fill-red" />
          <BlobLarge className="shift animation-offset-8 absolute right-8 -bottom-10 -z-20 h-32 w-32 fill-green-light" />

          <img
            loading="lazy"
            src="/images/hanna.jpg"
            alt="Hanna"
            width={500}
            height={500}
            className="squiggle object-cover"
          />
        </div>
        <div className="max-w-prose">
          <p className="mb-4">
            Hello! My name is Hanna, and I am currently a digital design student
            specialising in UX/UI design based in Perth, Western Australia. A
            passion of mine is to create a meaningful experiences through
            design.
          </p>
          <p className="mb-4">
            Prior to studying design, I worked extensively in the retail, and
            customer service industry. It was during my time in the retail space
            that I realised the impact that inefficient, and poorly-designed
            softwares could have with productivity, and customer satisfaction.
            Through this revelation, I realised that I wanted to further my
            understanding of the human experience, and create useful and
            effective products.
          </p>
          <p>
            In my spare time, I love to eat through the city, making videos, and
            spending way too much time on Animal Crossing.
          </p>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <Link to="/about" className="double-button">
          More about me
        </Link>
      </div> */}
    </section>
  );
};

export default AboutSection;
