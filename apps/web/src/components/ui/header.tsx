import { cn } from "@/lib/utils";

export function TighterText({
  className,
  children,
  as = "p",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "p" | "span" | "div";
}) {
  const Component = as;
  return <Component className={cn("tracking-tighter", className)}>{children}</Component>;
}
