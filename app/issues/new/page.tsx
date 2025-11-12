"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import IssueSchema from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Flex, Heading, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";
import { z } from "zod";

type IssueForm = z.infer<typeof IssueSchema>;

const NewIssue = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
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
  const onSubmit = handleSubmit(async (data: IssueForm) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/");
    } catch (error) {
      setSubmitting(false);
      setError("Unexpected error occured");
    }
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
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap="6">
          <Heading as="h3" weight="bold" className="mb-32">
            Create your New Issue
          </Heading>
          <div className="space-y-5">
            <div>
              <TextField.Root placeholder="Title" {...register("title")} />
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
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
              <ErrorMessage>{errors.description?.message}</ErrorMessage>
            </div>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? (
                <Spinner text="Submitting..." />
              ) : (
                "Submit New Issue"
              )}
            </Button>
          </div>
        </Flex>
      </form>
    </div>
  );
};

export default NewIssue;
