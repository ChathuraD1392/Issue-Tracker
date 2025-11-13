import { Table } from "@radix-ui/themes";
import CreateIssueButton from "./IssueComponents/CreateIssueButton";
import { Skeleton } from "@/app/components";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
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
              <Table.Row key={issue}>
                <Table.Cell>
                  <Skeleton />
                  <span className="block md:hidden"></span>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  );
};

export default LoadingIssuesPage;
