import type { SkillTag } from "../../types/Skill";
import type { TagSize, TagVariant } from "../ui/Tag";
import Tag from "../ui/Tag";

interface SkillTagListProps {
  tags: SkillTag[];
  removable?: boolean;
  onRemove?: (tag: string) => void;
  variant?: TagVariant;
  size?: TagSize;
}

export default function SkillTagList({
  tags,
  variant,
  size,
  onRemove,
}: SkillTagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag
          label={tag}
          key={tag}
          variant={variant}
          size={size}
          onRemove={onRemove}
        ></Tag>
      ))}
    </div>
  );
}
