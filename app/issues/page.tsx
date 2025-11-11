import prisma from "@/lib/prisma";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <Button>
        <Link href="/issues/new">Create New Issue</Link>
      </Button>
      <div className="max-w-3xl mt-4">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Description
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Status
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  {issue.title}
                  <span className="block md:hidden">{issue.status}</span>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.description}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.status}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default IssuePage;
