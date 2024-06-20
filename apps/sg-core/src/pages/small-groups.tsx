import { SmallGroupCard } from "../components/small-groups/card";
import { withAnimation } from "../hocs/with-animation";

const items = [
  {
    id: 1,
    name: "Zoe",
    photo:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    leadership: "João & Maria Santos",
    labels: ["jovens", "misto"],
  },
  {
    id: 2,
    name: "Gileade",
    photo:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    leadership: "Jose & Joana Costa",
    labels: ["familia", "crianças"],
  },
  {
    id: 3,
    name: "Moriah",
    photo:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    leadership: "Antonio & Carla Oliveira",
    labels: ["jovens", "casais"],
  },
];

function SmallGroupsPage() {
  return (
    <section className="flex flex-col gap-8">
      {items.map((group) => (
        <SmallGroupCard.Root key={group.id}>
          <SmallGroupCard.Image src={group.photo} />
          <SmallGroupCard.Title>Célula {group.name}</SmallGroupCard.Title>
          <SmallGroupCard.Text>{group.leadership}</SmallGroupCard.Text>
          <SmallGroupCard.Action to={`/celulas/${group.id}`}>
            Gerenciar
          </SmallGroupCard.Action>
        </SmallGroupCard.Root>
      ))}
    </section>
  );
}

export const SmallGroups = withAnimation(SmallGroupsPage);
