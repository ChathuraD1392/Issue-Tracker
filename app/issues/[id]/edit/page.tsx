import prisma from "@/lib/prisma";
import IssueForm from "../../IssueComponents/IssueForm";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt((await params).id) },
  });

  if (!issue) notFound();

  return (
    <>
      <IssueForm issue={issue} heading="Edit Issue" />
    </>
  );
};

export default EditIssuePage;
