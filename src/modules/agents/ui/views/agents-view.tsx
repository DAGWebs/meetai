"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { DataTable } from "@/components/data-table";
import { columns } from "@/modules/agents/ui/components/columns";
import { EmptyState } from "@/components/empty-state";
import { useAgentFilters } from "@/modules/agents/hooks/use-agents-filters";
import { DataPagination } from "@/modules/agents/ui/components/data-pagination";
import { useRouter } from "next/navigation";
// import { ResponsiveDialog } from "@/components/responsive-dialog";
// import { Button } from "@/components/ui/button";

export const AgentsView = () => {
  const [filters, setFilters] = useAgentFilters();
  const router = useRouter();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({ ...filters })
  );

  // TODO: Set Real Data in table after testing
  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex-col gap-y-4 ">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/agents/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first Agent"
          description="Create an agent to join your meetings. Each agent will follow your instructions and can interact with participents during the call."
        />
      )}
    </div>
  );
};
