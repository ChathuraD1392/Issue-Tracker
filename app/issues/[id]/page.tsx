import prisma from "@/lib/prisma";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditButton from "./_components/EditButton";
import IssueDetails from "./_components/IssueDetails";
import DeleteButton from "./_components/DeleteButton";
import SelectAssign from "@/app/components/SelectAssign";

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
    <Grid className="max-w-3xl" gap="5" columns={{ initial: "1", md: "5" }}>
      <Box className="space-y-3 lg:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="3" justify="center">
          <SelectAssign />
          <EditButton issueId={issueId} />
          <DeleteButton issueId={issueId} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
