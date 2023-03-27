import { createElement, FC, HTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const textVariants = cva("text-primary", {
  variants: {
    variant: {
      display: "text-[44px] font-semibold",
      heading1: "text-[23px] font-semibold",
      heading2: "text-[19px] font-semibold",
      bodyB1: "text-[16px] font-normal",
      bodyB1Semi: "text-[16px] font-semibold",
      bodyB2: "text-[14px] font-normal",
      bodyB2Semi: "text-[14px] font-semibold",
      captionC1: "text-[12px] font-normal",
      captionC1Semi: "text-[12px] font-semibold",
    },
    colors: {
      default: "text-primary",
      accent: "text-accent",
      light: "text-white",
    },
  },
  defaultVariants: {
    variant: "bodyB1",
    colors: "default",
  },
});

// interface HeadingProps
//   extends HTMLAttributes<HTMLElement>,
//     VariantProps<typeof textVariants> {
//   value: string;
//   className?: string;
// }

// const Text: FC<HeadingProps> = (
//   { variant, colors, value, className, ...props },
//   element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1"
// ): ReactElement => {
//   return createElement(
//     element,
//     { ...props, className: cn(textVariants({ colors, className, variant })) },
//     value
//   );

//   // <h1 {...props} className={cn(textVariants({ colors, className, variant }))}>
//   //   {children}
//   // </h1>
// };

// export default Text;

interface HeadProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  value: string;
}

const Text: FC<HeadProps> = ({
  type,
  className,
  value,
  variant,
  colors,
}): ReactElement => {
  return createElement(
    type,
    {
      className: cn(
        textVariants({
          className,
          colors: colors ?? "default",
          variant: variant ?? "display",
        })
      ),
    },
    value
  );
};

export default Text;
