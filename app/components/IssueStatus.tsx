import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}

const IssueStatus = ({ status }: Props) => {
  const statusMap: Record<
    Status,
    { label: string; color: "blue" | "green" | "red" }
  > = {
    OPEN: { label: "Open", color: "blue" },
    IN_PROGRESS: { label: "In Progress", color: "green" },
    CLOSED: { label: "Closed", color: "red" },
  };

  return (
    <Badge color={statusMap[status].color} variant="soft" size="2">
      {statusMap[status].label}
    </Badge>
  );
};

export default IssueStatus;
