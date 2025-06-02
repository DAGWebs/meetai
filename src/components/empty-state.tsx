"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
  image?: string;
}

export const EmptyState = ({
  title,
  description,
  image = "empty",
}: Props) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until the component is mounted so next-themes can provide the real theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid a mismatch between server and client on initial render
    return null;
  }

  // Decide which theme is actually active
  const activeTheme = theme === "system" ? systemTheme : theme;
  // Choose the SVG based on the active theme
  const imageSrc =
    activeTheme === "dark" ? `/${image}-dark.svg` : `/${image}.svg`;

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={imageSrc} alt="Empty" width={240} height={240} />
      <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
