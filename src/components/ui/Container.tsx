import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="relative flex flex-col h-screen">{children}</div>;
};

export default Container;
