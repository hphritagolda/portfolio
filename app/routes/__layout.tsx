import { ActionFunction } from "@remix-run/cloudflare";
import { Form, Outlet } from "@remix-run/react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Header from "~/components/Header";

export default function Layout() {
  return (
    <>
      <Outlet />
      <Header />
    </>
  );
}
