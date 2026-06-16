"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0C0A09] text-white hover:bg-[#1C1917] shadow-[0_1px_2px_rgba(12,10,9,0.08),0_8px_24px_-8px_rgba(12,10,9,0.4)]",
        gold:
          "bg-accent text-[#1C1917] hover:bg-accent-hover hover:text-white shadow-[0_1px_2px_rgba(202,138,4,0.16),0_8px_24px_-8px_rgba(202,138,4,0.6)]",
        outline:
          "border border-[#1C1917] text-[#0C0A09] hover:bg-[#0C0A09] hover:text-white",
        outlineDark:
          "border border-white/30 text-white hover:bg-white hover:text-[#0C0A09]",
        ghost: "text-[#0C0A09] hover:bg-[#0C0A09]/5",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-5 text-sm rounded-md",
        lg: "h-14 px-7 text-base rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type ButtonAsChildProps = CommonProps & {
  asChild: true;
  children: React.ReactElement<{ className?: string }>;
};

type ButtonAsButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    asChild?: false;
  };

type ButtonProps = ButtonAsChildProps | ButtonAsButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, size } = props;
    const classes = cn(buttonVariants({ variant, size }), className);

    if (props.asChild) {
      const childArray = React.Children.toArray(props.children).filter(
        React.isValidElement,
      ) as React.ReactElement<{ className?: string }>[];
      const child = childArray[0];
      if (!child) return null;
      return React.cloneElement(child, {
        className: cn(child.props.className, classes),
      });
    }

    const { asChild: _asChild, ...rest } = props as ButtonAsButtonProps & {
      asChild?: boolean;
    };
    void _asChild;
    return <button ref={ref} className={classes} {...rest} />;
  },
);
Button.displayName = "Button";

export { buttonVariants };
