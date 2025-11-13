import { AlertDialog, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  revokeButton?: ReactNode;
  cancelButton?: ReactNode;
  confirmButton?: ReactNode;
  title: string;
  description: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
const AlertDialogBox = ({
  revokeButton,
  cancelButton,
  confirmButton,
  title,
  description,
  open,
  onOpenChange,
}: Props) => {
  return (
    <>
      <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
        {revokeButton && (
          <AlertDialog.Trigger>{revokeButton}</AlertDialog.Trigger>
        )}
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>{title}</AlertDialog.Title>
          <AlertDialog.Description size="2">
            {description}
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            {cancelButton && (
              <AlertDialog.Cancel>{cancelButton}</AlertDialog.Cancel>
            )}
            <AlertDialog.Action>{confirmButton}</AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default AlertDialogBox;
