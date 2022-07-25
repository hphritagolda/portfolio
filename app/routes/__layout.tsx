import { Outlet } from "@remix-run/react";
import ContactForm from "~/components/ContactForm";
import Header from "~/components/Header";

export default function Layout() {
  return (
    <>
      <Outlet />
      <ContactForm />
      <Header />
    </>
  );
}
