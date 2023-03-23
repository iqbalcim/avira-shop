import { FC } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva("bg-primary text-white", {
  variants: {
    variant: {
      primary: "bg-primary text-white rounded-md",
      secondary: "bg-secondary text-white rounded-md",
      tertiary: "bg-tertiary text-white rounded-md",
      accent: "bg-accent text-white rounded-md",
      slate: "bg-slate-300 text-white rounded-md",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
