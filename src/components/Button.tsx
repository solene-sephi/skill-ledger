type ButtonVariant = "primary" | "secondary";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends React.PropsWithChildren {
  variant?: ButtonVariant;
  type?: ButtonType;
}

const colorsClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-600",
  secondary: "bg-black text-white hover:bg-black/85",
};

export default function Button({
  variant = "primary",
  type = "button",
  children,
}: ButtonProps) {
  const classes = colorsClasses[variant];

  return (
    <button type={type} className={`px-4 py-2 text-sm ${classes}`}>
      {children}
    </button>
  );
}
