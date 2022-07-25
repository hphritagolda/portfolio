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

export const sendEmail = async ({ email, name, message }: sendEmailArgs) => {
  console.log("Sending email", { email, name, message });
  // const send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     personalizations: [
  //       {
  //         to: [{ email, name }],
  //       },
  //     ],
  //     from: {
  //       email: sender,
  //       name: "Voguesama - MailChannels integration",
  //     },
  //     subject: "Look! No servers",
  //     content: [
  //       {
  //         type: "text/plain",
  //         value: `A message sent from ${name}`,
  //       },
  //       {
  //         type: "text/plain",
  //         value: message,
  //       },
  //     ],
  //   }),
  // });

  const send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email, name }],
        },
      ],
      from: {
        email: "sender@example.com",
        name: "Workers - MailChannels integration",
      },
      subject: "Look! No servers",
      content: [
        {
          type: "text/plain",
          value: "And no email service accounts and all for free too!",
        },
      ],
    }),
  });

  const response = await fetch(send_request);

  const respText = await response.text();

  if (!response.ok) {
    return {
      ok: false,
      error: `Failed to send email, ${respText}`,
    };
  }

  return {
    ok: true,
  };
};
