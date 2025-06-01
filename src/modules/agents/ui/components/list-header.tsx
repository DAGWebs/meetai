"use client";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useState } from "react";

export const AgentsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Agents</h5>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="flex items-center justify-center gap-2 text-white font-bold"
          >
            <CirclePlus className="font-bold" /> Add Agent
          </Button>
        </div>
      </div>
    </>
  );
};
