import * as React from "react"

import { cn } from "@/lib/utils"
 
function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content min-h-[120px] w-full resize-none rounded-none border-0 outline-none transition-all duration-200",

        // Spacing
        "px-2.5 py-2",

        // Typography
        "text-gray-900 font-body-large-400",

        // Placeholder
        "placeholder:text-gray-500 placeholder:font-body-medium-400",

        // Default
        "ring-1 ring-gray-200",

        // Hover
        "hover:ring-3 hover:ring-primary-200",

        // Focus / Typing
        "focus-visible:ring-1",
        "focus-visible:ring-primary-500",

        // Invalid
        "aria-invalid:ring-1",
        "aria-invalid:ring-error-300",
        "aria-invalid:bg-input-invalid",

        // Disabled
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",

        className
      )}
      {...props}
    />
  )
}

export { Textarea }
