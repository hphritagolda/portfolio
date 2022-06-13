import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import WorkItem from "~/components/WorkItem";
import type { WorkPiece } from "~/models/work.server";
import { works } from "~/models/work.server";

interface WorkLoadData {
  workItems: WorkPiece[];
}

export const loader: LoaderFunction = async () => {
  return json<WorkLoadData>({ workItems: works });
};

export default function Work() {
  const { workItems } = useLoaderData<WorkLoadData>();
  return (
    <main className="overflow-hidden py-48 px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="highlighted-title mb-12 text-4xl font-bold">My Work</h1>
        {workItems.map((workItem) => (
          <WorkItem workItem={workItem} key={workItem.slug} />
        ))}
      </div>
    </main>
  );
}
