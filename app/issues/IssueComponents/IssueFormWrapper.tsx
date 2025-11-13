// app/issues/[id]/edit/IssueFormWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { Issue } from "@prisma/client";

// Dynamically import the actual form
const IssueForm = dynamic(() => import("./IssueForm"), {
  ssr: false,
});

interface Props {
  issue: Issue;
}

const IssueFormWrapper = ({ issue }: Props) => {
  return <IssueForm issue={issue} heading="Edit Issue" />;
};

export default IssueFormWrapper;
