"use client";

import { Button, Callout, Flex, Heading, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";

interface IssueForm {
  title: string;
  description: string;
}
const NewIssue = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <BiInfoCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/");
          } catch (error) {
            setError("Unexpected error occured");
          }
        })}
      >
        <Flex direction="column" gap="6">
          <Heading as="h3" weight="bold" className="mb-32">
            Create your New Issue
          </Heading>
          <div className="space-y-5">
            <TextField.Root placeholder="Title" {...register("title")} />
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <SimpleMDE placeholder="Description" {...field} />
              )}
            />

            <Button type="submit">Submit New Issue</Button>
          </div>
        </Flex>
      </form>
    </div>
  );
};

export default NewIssue;
