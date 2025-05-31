import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GenerateAvatarProps {
  seed: string;
  className?: string;
  variant: "initials" | "botttsNeutral";
}

export const GeneratedAvatar = ({
  seed,
  className,
  variant,
}: GenerateAvatarProps) => {
  let avatar;

  switch (variant) {
    case "initials":
      avatar = createAvatar(initials, { seed });
      break;
    case "botttsNeutral":
      avatar = createAvatar(botttsNeutral, { seed });
      break;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Generated avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
