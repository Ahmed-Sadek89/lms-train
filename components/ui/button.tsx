import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex items-center text-center text-nowrap cursor-pointer justify-center gap-x-[12px] disabled:cursor-not-allowed transition duration-300",
  {
    variants: {
      variant: {
        "primary/primary": "bg-primary-500 text-white hover:shadow-primary hover:bg-primary-600 disabled:bg-primary-200",
        "primary-100": "bg-primary-100 text-primary-500 hover:bg-primary-200 hover:text-primary-600 disabled:text-primary-300",
        "primary-500": "bg-primary-500 text-white hover:bg-primary-600  hover:shadow-primary-500 disabled:text-primary-200",
        "error-500": "bg-error-500 text-white hover:bg-error-600   disabled:text-error-200",
        "gray-900": "bg-gray-900 text-white hover:bg-gray-800  hover:shadow-gray-900 disabled:bg-gray-200",
        "gray-50": "bg-gray-50 text-gray-900 hover:bg-gray-100 hover:text-gray-300 disabled:bg-gray-50 disabled:text-gray-300",
        "share-gray-50": "bg-gray-50 text-gray-700 hover:bg-primary-100 hover:text-primary-500 disabled:bg-gray-50 disabled:text-gray-300",
        "white-filter": "bg-white border border-primary-200 hover:border-primary-500  disabled:bg-gray-50 disabled:text-gray-300",
        "white-5": "bg-white/5 text-white hover:bg-gray-100 hover:text-gray-900 disabled:bg-gray-50 disabled:text-gray-300",
        "white": "text-gray-900 border border-gray-900 bg-white hover:bg-gray-900 hover:text-white hover:border-transparent",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        icon:
          "bg-icon-button  hover:bg-primary-500 hover:shadow-primary-500",

        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        "link-primary-500": "text-primary-500 underline-offset-4 hover:underline",
      },
      size: {
        sm: "min-h-[40px] min-w-[79px] px-[16px] font-button-sm",
        md: "min-h-[48px] min-w-[120px] px-[24px] font-button-md",
        "filter-md": " px-[24px] font-button-md",
        lg: "min-h-[26px] min-w-[65px] lg:min-h-[56px] lg:min-w-[129px] px-[12px] lg:px-[32px] font-button-lg",
        icon: "min-h-[48px] min-w-[126px] px-[24px] font-button-md",
        "icon-size": "h-[46px] w-[46px] px-[14px] flex items-center justify-center",
        "icon-left": "min-h-[48px] min-w-[160px] px-[24px] font-button-md",
        "icon-right": "min-h-[48px] min-w-[161px] px-[24px] font-button-md",
        "icon-carousel": "min-h-[0px] min-w-[0px] px-[0px] font-button-md",
        "paginate-sm": "size-[48px] p-0",
      },
    },
    defaultVariants: {
      variant: "primary/primary",
      size: "sm",
    },
  }
)

function Button({
  className,
  variant = "primary/primary",
  size = "sm",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
