// app/issues/[id]/edit/page.tsx
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import IssueFormWrapper from "@/app/issues/IssueComponents/IssueFormWrapper";

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt((await params).id) },
  });

  if (!issue) notFound();

  return <IssueFormWrapper issue={issue} />;
};

export default EditIssuePage;
