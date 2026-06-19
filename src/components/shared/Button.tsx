import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-md px-4 py-2 transition-all duration-300 font-medium cursor-pointer";

  const variantStyles = {
    primary:
      "bg-white hover:bg-accent-dark text-bg-base shadow-lg hover:shadow-xl",
    secondary:
      "bg-transparent border-2 border-text-muted text-text-muted hover:border-white hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
