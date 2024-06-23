import { SmallGroupsCard } from "@/components/small-groups/card";
import { withAnimation } from "@/hocs/with-animation";

import {
  HiOutlineUserGroup as UsersGroup,
  HiOutlineCalendar as Calendar,
  HiOutlineClock as Clock,
  HiOutlineGlobeAmericas as Globe,
  HiOutlineMapPin as Location,
  HiOutlineEye as Eye,
  HiOutlineUserPlus as Join,
} from "react-icons/hi2";

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
        <SmallGroupsCard key={group.id}>
          <SmallGroupsCard.Content>
            <SmallGroupsCard.Title>Célula Zoe</SmallGroupsCard.Title>
            <SmallGroupsCard.Leaders>
              João e Maria Santos
            </SmallGroupsCard.Leaders>
            <SmallGroupsCard.Spacer />
            <SmallGroupsCard.Schedule>
              <SmallGroupsCard.ScheduleItem
                icon={<Calendar size={12} color="gray" />}
              >
                Segunda
              </SmallGroupsCard.ScheduleItem>
              <SmallGroupsCard.ScheduleItem
                icon={<Clock size={12} color="gray" />}
              >
                19:30
              </SmallGroupsCard.ScheduleItem>
            </SmallGroupsCard.Schedule>
            <SmallGroupsCard.Spacer size="md" />
            <SmallGroupsCard.LabelGroup>
              <SmallGroupsCard.Label icon={Location}>
                Nações, FRG
              </SmallGroupsCard.Label>
              <SmallGroupsCard.Label icon={Globe}>
                Jovens Adultos
              </SmallGroupsCard.Label>
              <SmallGroupsCard.Label icon={UsersGroup}>
                17
              </SmallGroupsCard.Label>
            </SmallGroupsCard.LabelGroup>
          </SmallGroupsCard.Content>
          <SmallGroupsCard.Divider size="xs" />
          <SmallGroupsCard.Actions>
            <SmallGroupsCard.Action icon={<Eye size={16} />} color="secondary">
              Ver
            </SmallGroupsCard.Action>
            <SmallGroupsCard.Action icon={<Join size={16} />} color="primary">
              Pedir para entrar
            </SmallGroupsCard.Action>
          </SmallGroupsCard.Actions>
        </SmallGroupsCard>
      ))}
    </section>
  );
}

export const SmallGroups = withAnimation(SmallGroupsPage);
const SmallGroupsWithAnimation = withAnimation(SmallGroupsPage);
export default SmallGroupsWithAnimation;
