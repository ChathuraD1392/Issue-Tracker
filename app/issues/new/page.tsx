import { Button, Flex, Heading, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div className="max-w-xl">
      <Flex direction="column" gap="6">
        <Heading as="h3" weight="bold" className="mb-32">
          Create your New Issue
        </Heading>
        <div className="space-y-5">
          <TextField.Root placeholder="Title" />
          <TextArea placeholder="Description" />
          <Button type="submit">Submit New Issue</Button>
        </div>
      </Flex>
    </div>
  );
};

export default NewIssue;
