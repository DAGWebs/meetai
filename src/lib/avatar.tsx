import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

interface Props {
  seed: string;
  variant: "initials" | "botttsNeutral";
}

export const generateAvatarUri = ({ seed, variant }: Props) => {
  let avatar;

  switch (variant) {
    case "initials":
      avatar = createAvatar(initials, { seed });
      break;
    case "botttsNeutral":
      avatar = createAvatar(botttsNeutral, { seed });
      break;
  }

  if (avatar) return avatar.toDataUri();

  return "";
};
