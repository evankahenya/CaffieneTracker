import { useState } from "react";
import { CoffeeButton } from "@/components/CoffeeButton";
import { CaffeineBar } from "@/components/CaffeineBar";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const MAX_CAFFEINE = 400; // mg
const COFFEES = [
  { name: "Americano", type: "coffee" as const, caffeine: 75 },
  { name: "Espresso", type: "espresso" as const, caffeine: 63 },
  { name: "Latte", type: "latte" as const, caffeine: 128 },
  { name: "Cappuccino", type: "cappuccino" as const, caffeine: 63 }
];

export default function Index() {
  const [caffeineIntake, setCaffeineIntake] = useState(0);
  const { toast } = useToast();

  const addCaffeine = (amount: number) => {
    const newAmount = caffeineIntake + amount;
    setCaffeineIntake(newAmount);
    
    if (newAmount >= MAX_CAFFEINE) {
      toast({
        title: "Daily Limit Reached",
        description: "You've reached your recommended daily caffeine intake.",
        variant: "destructive"
      });
    } else if (newAmount >= MAX_CAFFEINE * 0.75) {
      toast({
        title: "Caffeine Warning",
        description: "You're approaching your daily recommended limit.",
      });
    }
  };

  const resetIntake = () => {
    setCaffeineIntake(0);
    toast({
      title: "Reset Complete",
      description: "Your caffeine intake has been reset.",
    });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-background to-muted">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Coffee Tracker</h1>
          <p className="text-muted-foreground">Track your daily caffeine intake</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COFFEES.map((coffee) => (
            <CoffeeButton
              key={coffee.name}
              name={coffee.name}
              type={coffee.type}
              caffeine={coffee.caffeine}
              onClick={() => addCaffeine(coffee.caffeine)}
            />
          ))}
        </div>

        <div className="space-y-4">
          <CaffeineBar current={caffeineIntake} max={MAX_CAFFEINE} />
          
          <Button
            variant="outline"
            className="w-full"
            onClick={resetIntake}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset Intake
          </Button>
        </div>
      </div>
    </div>
  );
}