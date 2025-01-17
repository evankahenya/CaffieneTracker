import { Coffee, CupSoda } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoffeeButtonProps {
  name: string;
  caffeine: number;
  onClick: () => void;
  type: "coffee" | "espresso" | "latte" | "cappuccino";
}

export function CoffeeButton({ name, caffeine, onClick, type }: CoffeeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="coffee-card flex flex-col items-center gap-2 min-w-[120px]"
    >
      <div className="coffee-icon p-3 bg-secondary rounded-full">
        {type === "coffee" && <Coffee className="w-6 h-6" />}
        {type === "espresso" && <CupSoda className="w-6 h-6" />}
        {type === "latte" && <Coffee className="w-6 h-6" />}
        {type === "cappuccino" && <Coffee className="w-6 h-6" />}
      </div>
      <span className="font-medium text-sm">{name}</span>
      <span className="text-xs text-muted-foreground">{caffeine}mg</span>
    </button>
  );
}