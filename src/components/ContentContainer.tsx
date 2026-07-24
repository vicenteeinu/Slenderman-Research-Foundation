import type { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export default function ContentContainer({ children }: ContentContainerProps) {
  return (
    <main
      className="w-full max-w-7xl mx-auto bg-white shadow-lg p-8"
    >
      {children}
    </main>
  );
}
