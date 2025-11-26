import { useParams } from "react-router";

export default function SkillDetail() {
  const { id } = useParams();

  return <h2>{id}</h2>;
}
