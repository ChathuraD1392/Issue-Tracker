"use client";
import { EraserIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AlertDialogBox from "../../IssueComponents/AlertDialogBox";
import delay from "delay";
import { Spinner } from "@/app/components";

const DeleteButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [isError, setError] = useState(false);
  const [isSubmitting, setSumit] = useState(false);
  const handleClick = async () => {
    await delay(3000);
    try {
      setSumit(true);
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
    } catch (error) {
      setSumit(false);
      console.log(error);
      setError(true);
    }
  };
  console.log(isError);
  return (
    <>
      <AlertDialogBox
        title="Delete Issue"
        description=" Are you sure?"
        revokeButton={
          <Button color="red" disabled={isSubmitting}>
            <EraserIcon />
            Delete {isSubmitting && <Spinner />}
          </Button>
        }
        cancelButton={
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        }
        confirmButton={
          <Button variant="solid" color="red" onClick={handleClick}>
            {isSubmitting ? "Deleting" : "Delete"}
          </Button>
        }
      ></AlertDialogBox>

      <AlertDialogBox
        title="Error"
        description="Issue cannot be Deleted"
        confirmButton={
          <Button variant="solid" color="red">
            Ok
          </Button>
        }
        open={isError}
        onOpenChange={setError}
      ></AlertDialogBox>
    </>
  );
};

export default DeleteButton;
