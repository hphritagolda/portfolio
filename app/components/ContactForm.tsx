import { useFetcher } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { ContactAction } from "~/routes/contact";

const ContactForm = () => {
  const contact = useFetcher<ContactAction>();
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (contact.type === "done" && contact.data.ok) {
      ref.current?.reset();
    }
  }, [contact.type, contact.data?.ok]);

  return (
    <section className="w-full bg-grey text-white" id="contact">
      <div className="mx-auto flex max-w-4xl flex-col flex-nowrap gap-4 px-8 pt-12 pb-6 md:flex-row md:items-stretch md:gap-24 md:pb-16">
        <h2 className="mb-8 text-4xl font-bold uppercase md:hidden">
          Get in touch
        </h2>

        <contact.Form
          method="post"
          action="/contact"
          className="max-w-prose flex-grow"
          replace
          ref={ref}
        >
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
              className="double-button bg-white text-grey before:border-white disabled:bg-grey-light disabled:before:border-grey-light"
              type="submit"
              disabled={contact.state === "submitting"}
            >
              Send
            </button>
          </div>
        </contact.Form>

        <div className="flex h-32 flex-col items-center justify-end gap-6 md:h-auto md:items-end">
          {contact.type === "done" && (
            <>
              {contact.data.ok && <p>Thanks for getting in touch!</p>}
              {contact.data.errors && (
                <>
                  {contact.data.errors.name && (
                    <p data-error>{contact.data.errors.name.join(", ")}</p>
                  )}
                  {contact.data.errors.email && (
                    <p data-error>{contact.data.errors.email.join(", ")}</p>
                  )}
                  {contact.data.errors.message && (
                    <p data-error>{contact.data.errors.message.join(", ")}</p>
                  )}
                </>
              )}
            </>
          )}

          <h2 className="mb-4 hidden text-4xl font-bold uppercase md:block">
            Get in touch
          </h2>
          <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
            <a
              className="transition-transform hover:scale-110"
              href="https://www.youtube.com/channel/UCj59T5u0zxgExpFV8zBr5oQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="h-8 w-8" title="My Youtube Channel" />
            </a>
            <a
              className="transition-transform hover:scale-110"
              href="https://www.instagram.com/voguesama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-8 w-8" title="My Instagram" />
            </a>
            <a
              className="transition-transform hover:scale-110"
              href="https://www.linkedin.com/in/hannaphritagolda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8" title="My LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
