export function validateSkillName(name: string): string | null {
  const trimmed = name.trim();

  if (!trimmed) return "Le nom est obligatoire";
  if (trimmed.length < 2) return "Le nom doit contenir au moins 2 caractères";
  if (trimmed.length > 80) return "Le nom doit faire moins de 80 caractères";
  return null;
}
