import type { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <main
      className="flex-1 w-[90%] max-w-7xl mx-auto bg-white shadow-lg p-8"
    >
      {children}
    </main>
  );
}
