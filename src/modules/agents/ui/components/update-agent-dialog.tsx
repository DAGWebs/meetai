import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "@/modules/agents/ui/components/agent-form";
import { agentGetOne } from "@/modules/agents/types";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: agentGetOne;
}

export const UpdateAgentDialog = ({
  open,
  onOpenChange,
  initialValues,
}: NewAgentDialogProps) => {
  return (
    <ResponsiveDialog
      title="Edit Agent"
      description={"Edit agent details"}
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
