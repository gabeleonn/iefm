import { SmallGroupCard } from "../components/small-groups/card";
import { withLayout } from "../hocs/with-layout";

const items = [1, 2, 3];

function SmallGroupsPage() {
  return (
    <section className="flex flex-col gap-8">
      {items.map((i) => (
        <SmallGroupCard key={i} />
      ))}
    </section>
  );
}

export const SmallGroups = withLayout(SmallGroupsPage);
