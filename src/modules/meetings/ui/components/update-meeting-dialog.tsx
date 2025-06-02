import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "@/modules/meetings/ui/components/meeting-form";
import { meetingsGetOne } from "@/modules/meetings/types";

interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: meetingsGetOne;
}

export const UpdateMeetingDialog = ({
  open,
  onOpenChange,
  initialValues,
}: NewMeetingDialogProps) => {
  return (
    <ResponsiveDialog
      title="Update Meeting"
      description={"Edit the meeting details"}
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={() => {
          onOpenChange(false);
        }}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
