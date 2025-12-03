import Tag, { type TagProps } from "./Tag";

type SkillTagListProps =
  // Tag props that can be forwarded to every tag in the list
  Pick<TagProps, "variant" | "isRemovable" | "onRemove"> & {
    tags: string[];
  };

export default function SkillTagList({
  tags,
  variant,
  isRemovable,
  onRemove,
}: SkillTagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag
          label={tag}
          key={crypto.randomUUID()}
          variant={variant}
          isRemovable={isRemovable}
          onRemove={onRemove}
        ></Tag>
      ))}
    </div>
  );
}
