import { Box, Button, Flex } from "@radix-ui/themes";
import { Skeleton } from "@/app/components/index";

const LoadingSkeleton = () => {
  return (
    <>
      <Box className="max-w-xl">
        <Flex direction="column" gap="6">
          <Skeleton height="2rem" width="15rem" />

          <div className="space-y-5">
            <div>
              <Skeleton height="2rem" />
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

export default LoadingSkeleton;
