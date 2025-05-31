"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import { DashboardCommand } from "./dashboard-command";
import { useEffect, useState } from "react";

export const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <div className="flex px-4 gap-x-2 items-cneter py-3 border-b bg-background justify-between">
        <div className="flex gap-x-2 items-center bg-background">
          <Button className="size-9" variant="outline" onClick={toggleSidebar}>
            {isMobile && state === "collapsed" ? (
              <PanelLeftIcon className="w-4 h-4" />
            ) : (
              <PanelLeftCloseIcon className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant={"outline"}
            className="w-[240px] h-9 justify-start font-normal text-muted-foreground hover:text-muted-foreground"
            size={"sm"}
            onClick={() => setCommandOpen((open) => !open)}
          >
            <SearchIcon />
            Search
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">&#8984; </span>
            </kbd>
          </Button>
        </div>
        <div className="flex gap-x-2 items-center bg-background">
          <ModeToggle />
        </div>
      </div>
    </>
  );
};
