import { z } from "zod";

export const sendEmailSchema = z.object({
  name: z.string().trim(),
  email: z.string().email({ message: "Email must be valid" }),
  message: z
    .string()
    .trim()
    .min(5, { message: "Message must be at least 5 characters" })
    .max(250, { message: "Message cannot be longer than 250 charaters" }),
});

type sendEmailArgs = z.infer<typeof sendEmailSchema>;

export const sendEmail = async (
  { email, name, message }: sendEmailArgs,
  context: any
) => {
  const send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: context.SENDER_EMAIL, name: "Voguesama" }],
        },
      ],
      from: {
        email: "no-reply@voguesama.me",
        name: "Voguesama automated",
      },
      subject: `Message from ${name}`,
      content: [
        {
          type: "text/plain",
          value: `Message from ${name}: ${email}\n\n${message}`,
        },
      ],
    }),
  });

  const response = await fetch(send_request);

  if (!response.ok) {
    return {
      ok: false,
      error: `Failed to send email, ${await response.text()}`,
    };
  }

  return {
    ok: true,
  };
};
