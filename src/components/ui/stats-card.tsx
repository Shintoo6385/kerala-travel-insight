import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: "default" | "kerala" | "reward";
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, title, value, subtitle, icon, variant = "default", ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "kerala":
          return "bg-gradient-kerala text-white shadow-kerala";
        case "reward":
          return "bg-gradient-reward text-accent-foreground shadow-kerala";
        default:
          return "bg-card text-card-foreground border shadow-sm";
      }
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "transition-all duration-300 hover:shadow-float hover:scale-105",
          getVariantStyles(),
          className
        )}
        {...props}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium opacity-80">{title}</p>
            {icon && <div className="h-4 w-4 opacity-80">{icon}</div>}
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">{value}</p>
            {subtitle && <p className="text-xs opacity-70">{subtitle}</p>}
          </div>
        </CardContent>
      </Card>
    );
  }
);
StatsCard.displayName = "StatsCard";

export { StatsCard };