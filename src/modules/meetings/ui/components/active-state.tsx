import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { VideoIcon } from "lucide-react";

interface Props {
  meetingId: string;
}

export const ActiveState = ({ meetingId }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg  px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="upcoming"
        title="Meeting in progress"
        description="Meeting will end when all participants leave."
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2">
        <Button asChild className="w-full lg:w-auto dark:text-white">
          <Link href={`/call/${meetingId}`}>
            <VideoIcon /> Join Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
};
