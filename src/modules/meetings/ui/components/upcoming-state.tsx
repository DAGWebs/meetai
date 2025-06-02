import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { VideoIcon, BanIcon } from "lucide-react";

interface Props {
  meetingId: string;
  onCancelMeeting: () => void;
  isCanceling: boolean;
}

export const UpcomingState = ({
  meetingId,
  onCancelMeeting,
  isCanceling,
}: Props) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg  px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="upcoming"
        title="Not started yet"
        description="Once you start this meeting, a summary will appear here."
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2">
        <Button
          onClick={onCancelMeeting}
          disabled={isCanceling}
          variant={"secondary"}
          className="w-full lg:w-auto"
        >
          <BanIcon /> Cancel Meeting
        </Button>
        <Button disabled={isCanceling} asChild className="w-full lg:w-auto dark:text-white">
          <Link href={`/call/${meetingId}`}>
            <VideoIcon /> Start Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
};
