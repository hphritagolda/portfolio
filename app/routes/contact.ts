import type { ActionFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { z } from "zod";

export interface ContactAction {
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    message?: string[] | undefined;
  };
  ok: boolean;
}

export const action: ActionFunction = async ({ request }) => {
  const formSchema = z.object({
    name: z.string().trim(),
    email: z.string().email({ message: "Email must be valid" }),
    message: z
      .string()
      .trim()
      .min(5, { message: "Message must be at least 5 characters" })
      .max(250, { message: "Message cannot be longer than 250 charaters" }),
  });

  const formData = await request.formData();

  const data = formSchema.safeParse({
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

  console.log(data.data);

  return json<ContactAction>({ ok: true });
};
