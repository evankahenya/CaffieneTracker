import { cn } from "@/lib/utils";

interface CaffeineBarProps {
  current: number;
  max: number;
}

export function CaffeineBar({ current, max }: CaffeineBarProps) {
  const percentage = Math.min((current / max) * 100, 100);
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Caffeine Intake</span>
        <span className="text-sm text-muted-foreground">{current}mg / {max}mg</span>
      </div>
      <div className="h-4 bg-secondary rounded-full overflow-hidden">
        <div 
          className="caffeine-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}