import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import BlobLarge from "~/components/blobs/BlobLarge";
import BlobSmall from "~/components/blobs/BlobSmall";
import WorkItem from "~/components/WorkItem";
import type { WorkPiece } from "~/models/work.server";
import { works } from "~/models/work.server";

interface IndexLoadData {
  workItems: WorkPiece[];
}

export const loader: LoaderFunction = async () => {
  return json<IndexLoadData>({ workItems: works.slice(0, 2) });
};

export default function Index() {
  const { workItems } = useLoaderData<IndexLoadData>();
  return (
    <main className="overflow-hidden py-40 px-8">
      <div className="relative mx-auto mb-16 flex h-full min-h-[50vh] w-full max-w-4xl flex-col items-center justify-center gap-16 md:flex-row">
        <BlobLarge className="shift animation-offset-8 absolute top-56 right-24 -z-20 h-48 w-48 rotate-45 fill-green" />

        <div className="relative">
          <BlobSmall className="shift absolute inset-0 -z-20 h-full w-full rotate-45 scale-110 fill-blue" />
          <BlobSmall className="shift absolute left-0 -bottom-10 -z-20 h-32 w-32 -rotate-12 fill-red" />

          <img src="/images/memoji.png" alt="Hanna" width={300} height={300} />
        </div>
        <div>
          <h1 className="mb-6 text-5xl font-black uppercase lg:text-6xl xl:text-7xl">
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

      <section className="relative mx-auto mb-16 max-w-4xl">
        <BlobLarge className="animation-offset-8 shift absolute top-0 -right-12 -z-20 h-64 w-64 fill-red" />
        <BlobSmall className="shift animation-offset-8 absolute top-72 left-24 -z-20 h-48 w-48 rotate-45 fill-blue" />
        <BlobLarge className="shift absolute bottom-4 right-48 -z-20 h-32 w-32 rotate-90 fill-green" />

        <h2 className="highlighted-title mb-12 text-4xl font-bold">
          Recent Works
        </h2>

        {workItems.map((workItem) => (
          <WorkItem key={workItem.slug} workItem={workItem} titleAs="h3" />
        ))}

        <div className="flex justify-center">
          <Link to="/work" className="double-button">
            See More work
          </Link>
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-4xl">
        <h2 className="highlighted-title mb-12 text-4xl font-bold">About Me</h2>

        <div className="mb-12 flex flex-col items-center gap-12 md:flex-row">
          <div className="relative">
            <img
              loading="lazy"
              src="/images/hanna.jpg"
              alt="Hanna"
              width={500}
              height={500}
              className="squiggle object-cover"
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
            More about me
          </Link>
        </div>
      </section>
    </main>
  );
}
