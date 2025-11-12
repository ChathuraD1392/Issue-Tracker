import prisma from "@/lib/prisma";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditButton from "./_components/EditButton";
import IssueDetails from "./_components/IssueDetails";

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
    <Grid className="max-w-3xl" gap="5" columns={{ initial: "1", md: "2" }}>
      <Box className="space-y-3">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditButton issueId={issueId} />
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
