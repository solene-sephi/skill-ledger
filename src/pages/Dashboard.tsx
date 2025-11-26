import { Link } from "react-router";
import SkillCard from "../components/SkillCard";
import type { Skill } from "../types/Skill";

const skills: Skill[] = [
  {
    id: 1,
    name: "Javascript",
    type: "hard",
    actionNb: 7,
  },
  {
    id: 2,
    name: "Communication d’équipe",
    type: "soft",
    actionNb: 12,
  },
];

const totalSkills = skills.length;
const totalActions = skills.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue.actionNb);
}, 0);

export default function Dashboard() {
  return (
    <>
      <p>Nb total de compétences : {totalSkills}</p>
      <p>Nb total d'actions : {totalActions}</p>
      <p>Dernière action: </p>
      <Link to="/add">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Ajouter une compétence
        </button>
      </Link>
      <div className="mt-6 flex flex-wrap gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
}
