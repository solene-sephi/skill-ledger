type ButtonVariant = "primary" | "tertiary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const colorsClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-600",
  tertiary: "bg-grey-900 text-white hover:bg-black",
};

export default function Button({
  variant = "primary",
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = colorsClasses[variant];

  return (
    <button
      type={type}
      className={`px-4 py-2 text-sm hover:cursor-pointer ${classes} ${className} disabled:bg-grey-500 disabled:text-white disabled:cursor-not-allowed disabled:hover:bg-grey-500 disabled:hover:text-white`}
      {...props}
    >
      {children}
    </button>
  );
}
