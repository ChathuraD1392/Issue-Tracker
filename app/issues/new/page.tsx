"use client";

import IssueSchema from "@/app/validationSchema";
import {
  Button,
  Callout,
  Flex,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type IssueForm = z.infer<typeof IssueSchema>;

const NewIssue = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(IssueSchema),
    defaultValues: { title: "", description: "" },
  });
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
            <div>
              <TextField.Root placeholder="Title" {...register("title")} />
              {errors.title && (
                <Text color="red" as="p">
                  {errors.title.message}
                </Text>
              )}
            </div>
            <div>
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <SimpleMDE
                    placeholder="Description"
                    {...field}
                    onChange={(value) =>
                      field.onChange(
                        value === undefined ? "" : value.toString()
                      )
                    }
                  />
                )}
              />
              {errors.description && (
                <Text color="red" as="p">
                  {errors.description?.message}
                </Text>
              )}
            </div>
            <Button type="submit">Submit New Issue</Button>
          </div>
        </Flex>
      </form>
    </div>
  );
};

export default NewIssue;
