import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Inside Route Group</h1>
      {children}
    </div>
  );
};

export default layout;
