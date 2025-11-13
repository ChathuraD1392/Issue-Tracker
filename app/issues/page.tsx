import prisma from "@/lib/prisma";
import { Table } from "@radix-ui/themes";
import { IssueStatus, Link } from "@/app/components/index";
import CreateIssueButton from "./IssueComponents/CreateIssueButton";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <CreateIssueButton />
      <div className="max-w-3xl mt-4">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Created
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <span className="block md:hidden">
                    <IssueStatus status={issue.status} />
                  </span>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <IssueStatus status={issue.status} />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuePage;
