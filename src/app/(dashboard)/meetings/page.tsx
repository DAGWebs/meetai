import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import MeetingsView from "@/modules/meetings/ui/views/meetings-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function MeetingsPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense
        fallback={
          <LoadingState
            title="Loading Meetings"
            description="This may take a few seconds"
          />
        }
      >
        <ErrorBoundary
          fallback={
            <ErrorState
              title="Error Loading Meetings"
              description="Something went wrong. Please try refreshing the page or coming back later"
            />
          }
        ></ErrorBoundary>
        <MeetingsView />
      </Suspense>
    </HydrationBoundary>
  );
}

export default MeetingsPage;
