import { Navbar } from "@/src/components/navbar";

import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
