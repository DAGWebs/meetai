import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <div className="h-screen bg-black">{children}</div>;
};

export default layout;
