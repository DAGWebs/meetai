"use client";
import { DataTable } from "@/components/data-table";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { columns } from "@/modules/meetings/ui/components/columns";
import { EmptyState } from "@/components/empty-state";

const MeetingsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
  if (data.items.length === 0) {
    return (
      <EmptyState
        title="Create your first meeting"
        description="Schedule a meeting to connect with others. Each meetings will allow you to interact with your AI Agent during the call, and even invite others to join."
      />
    );
  }
  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4 ">
      <DataTable data={data.items} columns={columns} />
    </div>
  );
};

export default MeetingsView;
