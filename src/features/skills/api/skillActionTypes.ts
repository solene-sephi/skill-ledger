import {
  FALLBACK_ACTION_TYPE_ID,
  getSkillActionTypesMock,
  type SkillActionType,
} from "../data/skillActionTypes";

type SkillActionTypesSource = {
  list: () => readonly SkillActionType[];
};

const mockSource: SkillActionTypesSource = {
  list: getSkillActionTypesMock,
};

// Swap this implementation when you wire a real API client.
const source: SkillActionTypesSource = mockSource;

export function getAllActionTypes() {
  return source.list();
}

export function getActionType(id: string) {
  const types = source.list();
  // Lookup by id, fallback to "autre", then to the first entry as a safety net.
  const found = types.find((type) => type.id === id);
  return (
    found ?? types.find((type) => type.id === FALLBACK_ACTION_TYPE_ID) ?? types[0]
  );
}
