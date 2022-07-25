import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";
import { ContactMe } from "./contact";

export default function Layout() {
  return (
    <>
      <Outlet />
      <ContactMe />
      <Header />
    </>
  );
}
