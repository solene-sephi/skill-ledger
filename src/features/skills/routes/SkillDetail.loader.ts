import { data, type LoaderFunctionArgs } from "react-router";
import { getSkillById } from "../api/skills";

export default function skillDetailLoader({ params }: LoaderFunctionArgs) {
  const idParam = params.id;
  const id = Number(idParam);

  if (!idParam || Number.isNaN(id) || !Number.isInteger(id)) {
    throw data("Not a valid parameter value", { status: 404 });
  }

  const skill = getSkillById(id);

  if (!skill) {
    throw data("Skill Not Found", { status: 404 });
  }

  return { skill };
}
