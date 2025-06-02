import { EmptyState } from "@/components/empty-state";

export const ProcessingState = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg  px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="processing"
        title="Meeting completed"
        description="A summery will be completed soon and displayed here soon."
      />
    </div>
  );
};
