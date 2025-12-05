type ButtonVariant = "primary" | "tertiary" | "tertiaryOutline";
type ButtonSize = "regular" | "square";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const colorClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange-500 text-white hover:bg-orange-600",
  tertiary: "bg-grey-900 text-white hover:bg-black",
  tertiaryOutline: "border border-grey-500 text-grey-900 hover:bg-grey-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  regular: "px-4 py-2 text-sm",
  square: "p-2 text-sm",
};

export default function Button({
  variant = "primary",
  size = "regular",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = `${colorClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button
      className={`hover:cursor-pointer ${classes} ${className} disabled:bg-grey-500 disabled:text-white disabled:cursor-not-allowed disabled:hover:bg-grey-500 disabled:hover:text-white`}
      {...props}
    >
      {children}
    </button>
  );
}
