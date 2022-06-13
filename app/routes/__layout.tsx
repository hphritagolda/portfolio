import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

export default function Layout() {
  return (
    <>
      <Outlet />
      <Header />
    </>
  );
}
