import React from "react";

export const Textarea = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium transition placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 ${className}`}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
