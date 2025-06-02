import Link from "next/link";

import { Button } from "@/components/ui/button";

export const CallEnded = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-radial from-sidebar-accent to-sidebar h-screen">
      <div className="py-5 px-8 flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-6 bg-background round-lg p-10 shaow-sm">
          <div className="flex flex-col gap-y-2 text-center">
            <h6 className="text-lg font-medium">You have ended the call?</h6>
            <p className="text-small">Summary will appear in a few minutes</p>
          </div>
          <Button className="text-white" asChild>
            <Link href="/meetings">Back to Meetings</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
