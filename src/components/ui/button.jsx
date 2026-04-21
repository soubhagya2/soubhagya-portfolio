import React from "react";

export const Button = React.forwardRef(({ className = "", ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-2.5 font-medium transition ${className}`}
    {...props}
  />
));

Button.displayName = "Button";
