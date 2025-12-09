import type { HTMLAttributes } from "react";

export type TagVariant =
  | "primaryOutline"
  | "secondary"
  | "secondaryOutline"
  | "tertiaryOutline";

export type TagSize = "sm" | "md";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: TagVariant;
  size?: TagSize;
  onRemove?: (tag: string) => void;
}

const colorsClasses: Record<TagVariant, string> = {
  primaryOutline: "bg-white text-black border-2 border-orange-500",
  secondary: "bg-green-400 text-black border-2 border-green-400",
  secondaryOutline: "bg-white text-black border-2 border-green-500",
  tertiaryOutline: "text-black bg-white border-2 border-grey-900",
};

const sizeClasses: Record<NonNullable<TagProps["size"]>, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
};

export default function Tag({
  label,
  variant = "secondary",
  size = "sm",
  onRemove,
  className = "",
  ...props
}: TagProps) {
  const classes = colorsClasses[variant];
  const sizing = sizeClasses[size];
  return (
    <span {...props} className={`rounded-md ${sizing} ${className} ${classes}`}>
      {label}
      {onRemove && (
        <button
          type="button"
          className="ml-2 hover:cursor-pointer"
          onClick={() => onRemove(label)}
          aria-label={`Supprimer le tag ${label}`}
        >
          ×
        </button>
      )}
    </span>
  );
}
