import { Link } from "@remix-run/react";
import type { FC } from "react";
import type { WorkPiece } from "~/models/work.server";

interface WorkItemProps {
  workItem: Pick<
    WorkPiece,
    "slug" | "name" | "description" | "colour" | "image"
  >;
  lazy?: boolean;
  titleAs?: React.ElementType;
}

const background: Record<WorkPiece["colour"], string> = {
  blue: "bg-blue",
  green: "bg-green",
  orange: "bg-orange",
  red: "bg-red",
};

const WorkItem: FC<WorkItemProps> = ({
  workItem: { name, colour, description, image, slug },
  lazy = false,
  titleAs: Title = "h2",
}) => {
  return (
    <Link
      to={`/work/${slug}`}
      className={`mb-8 flex flex-col text-white odd:md:flex-row even:md:flex-row-reverse ${
        background[colour] ?? "bg-orange"
      }`}
      aria-labelledby={`${slug}-title`}
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
        <Title className="mb-4 text-xl font-bold" id={`${slug}-title`}>
          {name}
        </Title>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default WorkItem;
