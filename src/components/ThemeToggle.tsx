import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export default function ThemeToggle({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? SunMedium : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-border-dark bg-card-dark/80 text-foreground/80 backdrop-blur transition hover:border-brand-gold hover:text-brand-gold",
        compact
          ? "h-10 w-10"
          : "px-4 py-2 text-[11px] font-mono uppercase tracking-[0.18em]",
        className,
      )}
    >
      <Icon className="h-4 w-4" />
      {!compact && <span>{nextTheme} mode</span>}
    </button>
  );
}
