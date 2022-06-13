import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { WorkPiece } from "~/models/work.server";

interface WorkItemProps {
  workItem: Pick<
    WorkPiece,
    "slug" | "name" | "description" | "colour" | "image"
  >;
  lazy?: boolean;
}

const background: Record<WorkPiece["colour"], string> = {
  blue: "bg-blue",
  green: "bg-green",
  orange: "bg-orange",
  red: "bg-red",
};

const WorkItem: FC<WorkItemProps> = ({
  workItem: { name, colour, description, image, slug },
  lazy,
}) => {
  return (
    <Link
      to={`/work/${slug}`}
      className={`mb-8 flex flex-col text-white odd:md:flex-row-reverse even:md:flex-row ${
        background[colour] ?? "bg-orange"
      }`}
      aria-labelledby=""
    >
      <img
        loading={lazy ? "lazy" : "eager"}
        src={image}
        className="h-1/2 w-full object-cover md:h-full md:w-1/2"
        alt="Petcare"
        width={300}
        height={200}
      />
      <div className="px-8 py-12 md:w-1/2">
        <h3 className="mb-4 text-xl font-bold" id={slug}>
          {name}
        </h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default WorkItem;
