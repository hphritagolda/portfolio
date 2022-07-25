import { Form, Outlet } from "@remix-run/react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Header from "~/components/Header";

export default function Layout() {
  return (
    <>
      <Outlet />
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
      <Header />
    </>
  );
}
