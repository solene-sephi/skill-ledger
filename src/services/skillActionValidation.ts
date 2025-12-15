export function validateSkillActionName(name: string): string | null {
  // Validation expects already cleaned inputs (trimmed, etc.)
  if (!name) return "Le nom est obligatoire";
  if (name.length < 2) return "Le nom doit contenir au moins 2 caractères";
  if (name.length > 100) return "Le nom doit faire moins de 100 caractères";
  return null;
}

export function validateSkillActionLink(link: string): string | null {
  const urlPattern =
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;

  if (!link) return null; // optional field
  if (!urlPattern.test(link)) return "Le lien n'est pas une URL valide";

  return null;
}
