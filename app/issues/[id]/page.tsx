import IssueStatus from "@/app/components/IssueStatus";
import prisma from "@/lib/prisma";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issueId = Number((await params).id);

  if (isNaN(issueId)) notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });
  if (!issue) notFound();
  return (
    <div className="max-w-3xl space-y-3">
      <div className="mb-5">
        <Heading as="h2">Issue Details</Heading>
      </div>
      <div className="mb-3">
        <Heading>{issue.title}</Heading>
      </div>
      <Flex gap="3">
        <IssueStatus status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
