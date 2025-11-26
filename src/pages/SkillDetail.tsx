import { useLoaderData } from "react-router";
import type { Skill } from "../types/Skill";

export default function SkillDetail() {
  const { skill }: { skill: Skill } = useLoaderData();

  return <h2>{skill.name}</h2>;
}
