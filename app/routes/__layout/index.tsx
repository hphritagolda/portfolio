import { Link } from "@remix-run/react";
import BlobLarge from "~/components/blobs/BlobLarge";
import BlobSmall from "~/components/blobs/BlobSmall";

export default function Index() {
  return (
    <main className="py-40 px-8 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto mb-16 flex flex-col md:flex-row gap-16 justify-center items-center h-full min-h-[50vh] relative">
        <BlobLarge className="absolute shift w-48 h-48 top-56 right-24 fill-green -z-20 rotate-45 animation-offset-8" />

        <div className="relative">
          <BlobSmall className="h-full w-full inset-0 fill-blue absolute -z-20 scale-110 rotate-45 shift" />
          <BlobSmall className="h-32 w-32 left-0 -bottom-10 fill-red absolute -z-20 -rotate-12 shift" />

          <img src="/images/memoji.png" alt="Hanna" width={300} height={300} />
        </div>
        <div>
          <h1 className="uppercase font-black text-5xl lg:text-6xl xl:text-7xl mb-6">
            Hey, it's Hanna!
          </h1>
          <p className="mb-4 text-lg">
            a digital design student, an occassional youtuber &amp; a serious
            foodie.
          </p>
          <Link to="/contact" className="double-button">
            Hit me up!
          </Link>
        </div>
      </div>

      <section className="max-w-4xl mx-auto mb-16 relative">
        <BlobLarge className="h-64 w-64 top-0 -right-12 fill-red absolute -z-20 animation-offset-8 shift" />
        <BlobSmall className="absolute shift w-48 h-48 top-72 left-24 fill-blue -z-20 rotate-45 animation-offset-8" />
        <BlobLarge className="h-32 w-32 bottom-4 right-48 fill-green absolute -z-20 rotate-90 shift" />

        <h2 className="text-4xl font-bold mb-12 highlighted-title">
          Recent Works
        </h2>

        <div className="flex flex-col md:flex-row-reverse bg-orange text-white mb-8">
          <img
            loading="lazy"
            src="/images/petcare.png"
            className="w-full h-1/2 md:h-full md:w-1/2 object-cover"
            alt="Petcare"
            width={300}
            height={200}
          />
          <div className="px-8 py-12 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Pet Care for RSCPA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget magna non lectus dictum commodo. Suspendisse tempus vel
              libero eget tempus. In dictum sollicitudin metus at elementum.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-blue text-white mb-12">
          <img
            loading="lazy"
            src="/images/creec.png"
            className="w-full h-1/2 md:h-full md:w-1/2 object-cover"
            alt="Petcare"
            width={300}
            height={200}
          />
          <div className="px-8 py-12 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">CREEC App</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget magna non lectus dictum commodo. Suspendisse tempus vel
              libero eget tempus. In dictum sollicitudin metus at elementum.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/work" className="double-button">
            See More
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-12 highlighted-title">About Me</h2>

        <div className="flex flex-col gap-12 md:flex-row items-center mb-12">
          <div className="relative">
            <img
              loading="lazy"
              src="/images/hanna.jpg"
              alt="Hanna"
              width={500}
              height={500}
              className="object-cover squiggle"
            />
          </div>
          <div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget magna non lectus dictum commodo. Suspendisse tempus vel
              libero eget tempus.
            </p>
            <p className="mb-4">
              In dictum sollicitudin metus at elementum. Donec euismod pharetra
              urna ut placerat. Aenean luctus sagittis nunc, non lobortis mi
              placerat quis.
            </p>
            <p>
              Etiam iaculis, erat id ultrices semper, ante quam consectetur
              nisi, bibendum sollicitudin sapien orci vel orci. Etiam ornare sit
              amet velit sed rhoncus.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/about" className="double-button">
            See More
          </Link>
        </div>
      </section>
    </main>
  );
}
