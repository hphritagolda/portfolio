import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import AboutSection from "~/components/AboutSection";
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
    <main className="overflow-hidden pt-40">
      <div className="relative mx-auto mb-16 flex h-full min-h-[50vh] w-full max-w-4xl flex-col items-center justify-center gap-16 px-8 md:flex-row">
        <BlobLarge className="shift animation-offset-8 absolute top-56 right-24 -z-20 h-48 w-48 rotate-45 fill-green-light" />

        <div className="relative">
          <BlobSmall className="shift absolute inset-0 -z-20 h-full w-full rotate-45 scale-110 fill-blue" />
          <BlobSmall className="shift absolute left-0 -bottom-10 -z-20 h-32 w-32 -rotate-12 fill-red" />

          <img src="/images/memoji.png" alt="Hanna" width={300} height={300} />
        </div>
        <div className="text-center md:text-left">
          <h1 className="mb-6 text-5xl font-black uppercase lg:text-6xl xl:text-7xl">
            Hey, it's Hanna!
          </h1>
          <p className="mb-4 text-lg">
            a digital design student, an occassional youtuber &amp; a serious
            foodie.
          </p>
          <Link to="/#contact" className="double-button">
            Hit me up!
          </Link>
        </div>
      </div>

      <section className="relative mx-auto mb-16 max-w-4xl px-8">
        <BlobLarge className="animation-offset-8 shift absolute top-0 -right-12 -z-20 h-64 w-64 fill-red" />
        <BlobSmall className="shift animation-offset-8 absolute top-72 left-24 -z-20 h-48 w-48 rotate-45 fill-blue" />
        <BlobLarge className="shift absolute bottom-4 right-48 -z-20 h-32 w-32 rotate-90 fill-green-light" />

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

      <AboutSection />

      <section className="w-full bg-grey text-white" id="contact">
        <div className="mx-auto flex max-w-4xl flex-col flex-nowrap gap-4 px-8 pt-12 pb-6 md:flex-row md:items-stretch md:gap-24 md:pb-16">
          <h2 className="mb-8 text-4xl font-bold uppercase md:hidden">
            Get in touch
          </h2>

          <Form action="post" className="max-w-prose flex-grow">
            <label className="mb-8 block text-xl">
              <span>Name:</span>
              <input
                required
                type="text"
                className="block w-full border-0 border-b-2 border-white bg-grey px-0.5 focus:border-orange focus:ring-0"
                name="name"
              />
            </label>
            <label className="mb-8 block text-xl">
              <span>Email:</span>
              <input
                required
                type="email"
                className="block w-full border-0 border-b-2 border-white bg-grey px-0.5 focus:border-orange focus:ring-0"
                name="email"
              />
            </label>
            <label className="mb-8 block text-xl">
              <span>Message:</span>
              <textarea
                required
                rows={4}
                className="block w-full resize-none border-0 border-b-2 border-white bg-grey px-0.5 focus:border-orange focus:ring-0"
                name="message"
              />
            </label>

            <div className="text-center md:text-left">
              <button
                className="double-button bg-white text-grey before:border-white"
                type="submit"
              >
                Send
              </button>
            </div>
          </Form>

          <div className="flex h-32 flex-col items-center justify-end md:h-auto md:items-end">
            <h2 className="mb-4 hidden text-4xl font-bold uppercase md:block">
              Get in touch
            </h2>
            <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
              <a href="#temp">
                <FaYoutube className="h-8 w-8" />
              </a>
              <a href="#temp">
                <FaInstagram className="h-8 w-8" />
              </a>
              <a href="#temp">
                <FaLinkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const action: ActionFunction = async ({ request, context }) => {
  const formData = await request.formData();

  console.log(formData.get("name"));
};
