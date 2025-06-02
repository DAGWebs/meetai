import { EmptyState } from "@/components/empty-state";

export const CanceledState = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg  px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="cancelled"
        title="This meeting has been cancelled"
        description="You can create a new meeting if you want to schedule another meeting with this agent."
      />
    </div>
  );
};
