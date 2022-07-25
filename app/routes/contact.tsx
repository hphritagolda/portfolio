import type { ActionFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import type { FormProps } from "@remix-run/react";
import { Form, useActionData, useFetcher } from "@remix-run/react";
import type { FC } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Header from "~/components/Header";
import { sendEmail, sendEmailSchema } from "~/models/email.server";

interface ContactFormProps {
  Form: React.ForwardRefExoticComponent<
    FormProps & React.RefAttributes<HTMLFormElement>
  >;
  data?: Partial<ContactAction>;
  type: ReturnType<typeof useFetcher>["type"];
  state: ReturnType<typeof useFetcher>["state"];
}

const ContactForm: FC<ContactFormProps> = ({ Form, type, state, data }) => {
  return (
    <section className="w-full bg-grey text-white" id="contact">
      <div className="mx-auto flex max-w-4xl flex-col flex-nowrap gap-4 px-8 pt-12 pb-6 md:flex-row md:items-stretch md:gap-24 md:pb-16">
        <h2 className="mb-8 text-4xl font-bold uppercase md:hidden">
          Get in touch
        </h2>

        <Form
          method="post"
          action="/contact"
          className="max-w-prose flex-grow"
          replace
        >
          <label className="mb-8 block text-xl">
            <span>Name:</span>
            <input
              required
              type="text"
              className="block w-full border-0 border-b-2 border-white bg-grey px-0.5 focus:border-orange focus:ring-0 disabled:border-transparent"
              name="name"
            />
          </label>
          <label className="mb-8 block text-xl">
            <span>Email:</span>
            <input
              required
              type="email"
              className="block w-full border-0 border-b-2 border-white bg-grey px-0.5 focus:border-orange focus:ring-0 disabled:border-transparent"
              name="email"
            />
          </label>
          <label className="mb-8 block text-xl">
            <span>Message:</span>
            <textarea
              required
              rows={4}
              className="block w-full resize-none border-0 border-b-2 border-white bg-grey px-0.5 focus:border-orange focus:ring-0 disabled:border-transparent"
              name="message"
            />
          </label>

          <div className="text-center md:text-left">
            <button
              className="double-button bg-white text-grey before:border-white disabled:bg-grey-light disabled:before:border-grey-light"
              type="submit"
              disabled={state === "submitting"}
            >
              Send
            </button>
          </div>
        </Form>

        <div className="flex h-32 flex-col items-center justify-end gap-6 md:h-auto md:items-end">
          {type === "done" && (
            <>
              {data?.ok && <p>Thanks for getting in touch!</p>}
              {data?.errors && (
                <>
                  {data.errors.name && (
                    <p data-error>{data.errors.name.join(", ")}</p>
                  )}
                  {data.errors.email && (
                    <p data-error>{data.errors.email.join(", ")}</p>
                  )}
                  {data.errors.message && (
                    <p data-error>{data.errors.message.join(", ")}</p>
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

export const ContactMe = () => {
  const contact = useFetcher<ContactAction>();
  return (
    <ContactForm
      Form={contact.Form}
      data={contact.data}
      state={contact.state}
      type={contact.type}
    />
  );
};

export default () => {
  const actionData = useActionData<ContactAction>();
  return (
    <>
      <main className="overflow-hidden pt-48">
        <ContactForm Form={Form} data={actionData} state="idle" type="done" />
      </main>

      <Header />
    </>
  );
};

export interface ContactAction {
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    message?: string[] | undefined;
  };
  ok: boolean;
}

export const action: ActionFunction = async ({ request, context }) => {
  const formData = await request.formData();

  const data = sendEmailSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!data.success) {
    return json<ContactAction>({
      errors: data.error.flatten().fieldErrors,
      ok: false,
    });
  }

  const { ok, error } = await sendEmail(data.data, context.SENDER_EMAIL);

  if (ok) return json<ContactAction>({ ok: true });

  return json<ContactAction>({
    ok: false,
    errors: {
      email: [String(error)],
    },
  });
};
