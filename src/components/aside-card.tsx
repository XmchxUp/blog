import { ReactNode } from "react";

interface AsideCardProps {
  className?: string;
  children: ReactNode;
}

function AsideCard({ className, children }: AsideCardProps) {
  return (
    <div
      className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
    >
      {children}
    </div>
  );
}

export default AsideCard;
