import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center h-10 w-full rounded-md border border-gray-300 bg-[#F6F6F6] py-2 px-3 text-sm  text-slate-500",
          className
        )}
      >
        <input
          ref={ref}
          {...props}
          className={cn(
            "placeholder:text-tertiary bg-transparent w-full focus:outline-none"
          )}
        />
        {children}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
