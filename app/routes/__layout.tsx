import { Link, Outlet } from "@remix-run/react";
import BlobLarge from "~/components/blobs/BlobLarge";
import BlobSmall from "~/components/blobs/BlobSmall";

export default function Layout() {
  return (
    <>
      <Outlet />
      <div className="-z-20 absolute inset-0 overflow-hidden h-full w-full pointer-events-none ">
        <div className="max-w-7xl mx-auto relative">
          <BlobSmall className="w-24 h-24 md:w-32 md:h-32 absolute top-4 -left-8 shift -z-20 fill-red" />
          <BlobLarge className="w-64 h-64 absolute -top-8 -right-24 shift -z-20 fill-orange animation-offset-4" />
        </div>
      </div>
      <header className="absolute top-0 left-0 right-0 w-full p-8 lg:p-16 overflow-hidden">
        <div className="flex flex-row flex-nowrap justify-between items-center max-w-7xl mx-auto relative">
          <Link
            to="/"
            className="mr-auto text-2xl md:text-3xl lg:text-5xl xl:text-6xl uppercase font-bold"
          >
            voguesama.
          </Link>
          <nav className="hidden md:flex flex-row gap-8 uppercase text-lg md:text-xl lg:text-2xl">
            <Link to="/about">about</Link>
            <Link to="/work">work</Link>
            <Link to="/resume">resume</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
