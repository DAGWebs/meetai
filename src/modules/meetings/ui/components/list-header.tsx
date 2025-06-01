"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CirclePlus, XCircleIcon } from "lucide-react";
import { NewMeetingDialog } from "@/modules/meetings/ui/components/new-meeting-dialog";
import { MeetingsSearchFilter } from "@/modules/meetings/ui/components/meetings-search-filters";
import { StatusFilter } from "@/modules/meetings/ui/components/status-filter";
import { AgentIdFilter } from "@/modules/meetings/ui/components/agent-id-filter";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";
import { DEFAULT_PAGE } from "@/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const MeetingListHeader = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isAnyFilterModified =
    !!filters.search || !!filters.status || !!filters.agentId;

  const onClearFilters = () => {
    setFilters({
      status: null,
      agentId: "",
      search: "",
      page: DEFAULT_PAGE,
    });
  };

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
        <ScrollArea>
          <div className="flex items-center gap-x-2 p-1">
            <MeetingsSearchFilter />
            <StatusFilter />
            <AgentIdFilter />
            {isAnyFilterModified && (
              <Button onClick={onClearFilters} variant={"outline"} size={"sm"}>
                <XCircleIcon /> Filters
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
