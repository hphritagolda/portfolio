import { Link, Outlet } from "@remix-run/react";
import BlobLarge from "~/components/blobs/BlobLarge";
import BlobSmall from "~/components/blobs/BlobSmall";

export default function Layout() {
  return (
    <>
      <Outlet />
      <div className="pointer-events-none absolute inset-0 -z-20 h-full w-full overflow-hidden ">
        <div className="relative mx-auto max-w-7xl">
          <BlobSmall className="shift absolute top-4 -left-8 -z-20 h-24 w-24 fill-red md:h-32 md:w-32" />
          <BlobLarge className="shift animation-offset-4 absolute -top-8 -right-24 -z-20 h-64 w-64 fill-orange" />
        </div>
      </div>
      <header className="absolute top-0 left-0 right-0 w-full overflow-hidden p-8 lg:p-16">
        <div className="relative mx-auto flex max-w-7xl flex-row flex-nowrap items-center justify-between">
          <Link
            to="/"
            className="mr-auto text-2xl font-bold uppercase md:text-3xl lg:text-5xl xl:text-6xl"
          >
            voguesama.
          </Link>
          <nav className="hidden flex-row gap-8 text-lg uppercase md:flex md:text-xl lg:text-2xl">
            <Link to="/about">about</Link>
            <Link to="/work">work</Link>
            <Link to="/resume">resume</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
