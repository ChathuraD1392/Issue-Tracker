"use client";

import dynamic from "next/dynamic";
import LoadingSkeleton from "./loading";

const IssueForm = dynamic(() => import("../IssueComponents/IssueForm"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});
const CreateIssuePage = () => {
  return <IssueForm heading="Create Your Issue " />;
};

export default CreateIssuePage;
