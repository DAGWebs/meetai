"use client";
import { DataTable } from "@/components/data-table";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { columns } from "@/modules/meetings/ui/components/columns";
import { EmptyState } from "@/components/empty-state";
import { useRouter } from "next/navigation";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";
import { DataPagination } from "@/components/data-pagination";

const MeetingsView = () => {
  const trpc = useTRPC();

  const router = useRouter();
  const [filters, setFilters] = useMeetingsFilters();

  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    })
  );
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
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
    </div>
  );
};

export default MeetingsView;
