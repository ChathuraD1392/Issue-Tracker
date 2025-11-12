import { Flex, Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueLoading = async () => {
  <div className="max-w-3xl space-y-3">
    <div className="mb-5">
      <Skeleton width="10rem" />
    </div>
    <div className="mb-3">
      <Skeleton />
    </div>
    <Flex gap="3">
      <Skeleton />
      <Skeleton />
    </Flex>
    <Card className="prose">
      <Skeleton count={3} />
    </Card>
  </div>;
};

export default IssueLoading;
