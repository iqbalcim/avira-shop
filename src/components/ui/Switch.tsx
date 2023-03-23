"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type SwitchProps = {
  enabled: boolean;
};

export default function CustomSwitch({ enabled }: SwitchProps) {
  const [enabledState, setEnabledState] = useState(enabled);

  const toggleSwitch = () => {
    const newValue = !enabledState;
    setEnabledState(newValue);
  };

  return (
    <button
      className={cn(
        !enabledState ? "bg-accent" : "bg-slate-300",
        "relative w-9 h-5 rounded-full transition-colors focus:outline-none flex items-center"
      )}
      onClick={toggleSwitch}
    >
      <span
        className={cn(
          enabledState ? "translate-x-0.5" : "translate-x-4",
          "inline-block w-4 h-4 transform bg-white rounded-full transition-transform"
        )}
      />
    </button>
  );
}
