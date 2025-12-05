import type { HTMLAttributes } from "react";
import Button from "./Button";

type TagVariant =
  | "primaryOutline"
  | "secondary"
  | "secondaryOutline"
  | "tertiaryOutline";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: TagVariant;
  isRemovable?: boolean;
  onRemove?: (label: string) => void;
}

const colorsClasses: Record<TagVariant, string> = {
  primaryOutline: "bg-white text-black border-2 border-orange-500",
  secondary: "bg-green-400 text-black border-2 border-green-400",
  secondaryOutline: "bg-white text-black border-2 border-green-500",
  tertiaryOutline: "text-black bg-white border-2 border-grey-900",
};

export default function Tag({
  label,
  variant = "secondary",
  isRemovable = false,
  onRemove,
  className = "",
  ...props
}: TagProps) {
  const classes = colorsClasses[variant];

  // Guard: removable tags must receive an onRemove handler
  if (isRemovable && !onRemove) {
    throw new Error("Tag : isRemovable=true nécessite la prop onRemove.");
  }
  const canRemove = isRemovable && typeof onRemove === "function";

  return (
    <span
      {...props}
      className={`px-2 py-1 rounded-md text-xs ${className} ${classes}`}
    >
      {label}
      {canRemove && (
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
