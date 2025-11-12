import { Box, Button, Flex, Skeleton } from "@radix-ui/themes";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssue = async () => {
  return (
    <>
      <Box className="max-w-xl">
        <Flex direction="column" gap="6">
          <Skeleton />

          <div className="space-y-5">
            <div>
              <Skeleton />
            </div>
            <div>
              <Skeleton height="20rem" />
            </div>
            <Button>Submit New Issue</Button>
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default LoadingNewIssue;
