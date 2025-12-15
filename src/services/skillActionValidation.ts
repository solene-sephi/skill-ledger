export function validateSkillActionName(name: string): string | null {
  const trimmed = name.trim();

  if (!trimmed) return "Le nom est obligatoire";
  if (trimmed.length < 2) return "Le nom doit contenir au moins 2 caractères";
  if (trimmed.length > 100) return "Le nom doit faire moins de 100 caractères";
  return null;
}
