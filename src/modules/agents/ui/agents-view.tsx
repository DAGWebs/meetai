"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
// import { ResponsiveDialog } from "@/components/responsive-dialog";
// import { Button } from "@/components/ui/button";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      {/* <ResponsiveDialog
        title="Responsive Dialog"
        description={"Description"}
        open
        onOpenChange={() => {}}
      >
        <Button>Button</Button>
      </ResponsiveDialog> */}
      {JSON.stringify(data, null, 2)}
    </div>
  );
};
