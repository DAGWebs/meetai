"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { NewMeetingDialog } from "@/modules/meetings/ui/components/new-meeting-dialog";

export const MeetingListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Meetings</h5>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center justify-center gap-2 text-white font-bold"
          >
            <CirclePlus className="font-bold" /> Add Meeting
          </Button>
        </div>
        <div className="flex items-center gap-x-2 p-1">{/* TODO FILTER */}</div>
      </div>
    </>
  );
};
