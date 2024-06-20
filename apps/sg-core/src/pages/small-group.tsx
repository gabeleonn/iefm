import { useParams } from "react-router-dom";
import { withAnimation } from "../hocs/with-animation";

const items = [
  {
    id: 1,
    name: "Zoe",
    leadership: "João & Maria Santos",
    labels: ["jovens", "misto"],
  },
  {
    id: 2,
    name: "Gileade",
    leadership: "Jose & Joana Costa",
    labels: ["familia", "crianças"],
  },
  {
    id: 3,
    name: "Moriah",
    leadership: "Antonio & Carla Oliveira",
    labels: ["jovens", "casais"],
  },
];

function SmallGroupPage() {
  const { id } = useParams();
  return (
    <section className="flex flex-col gap-8">
      {id ? JSON.stringify(items[parseInt(id)]) : null}
    </section>
  );
}

export const SmallGroup = withAnimation(SmallGroupPage);
