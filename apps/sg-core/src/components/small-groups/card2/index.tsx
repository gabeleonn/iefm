import { Badge, Button, Card, HR } from "flowbite-react";

function Title({ children }: { children?: React.ReactNode }) {
  return <h2 className="font-bold text-lg text-gray-800">{children}</h2>;
}

function Leaders({ children }: { children?: React.ReactNode }) {
  return <p className="text-sm text-gray-800">{children}</p>;
}

function ScheduleItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center gap-2">
      {icon}
      <p className="text-xs text-gray-400">{children}</p>
    </div>
  );
}

function Schedule({ children }: { children?: React.ReactNode }) {
  return <div className="flex flex-row gap-4">{children}</div>;
}

function Spacer({ size = "sm" }: { size?: "sm" | "md" }) {
  const sizes = {
    sm: "h-2",
    md: "h-4",
  };

  return <div className={sizes[size]} />;
}

function LabelGroup({ children }: { children?: React.ReactNode }) {
  return <div className="flex flex-row gap-4">{children}</div>;
}

function Label({
  children,
  icon: Icon,
}: {
  children?: React.ReactNode;
  icon: React.FC;
}) {
  return (
    <Badge
      color="gray"
      size="xs"
      className="w-max rounded-md text-gray-500 font-normal text-[10px]"
      icon={Icon}
    >
      {children}&nbsp;
    </Badge>
  );
}

function Content({ children }: { children?: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

function Actions({ children }: { children?: React.ReactNode }) {
  return <div className="flex flex-row gap-2 justify-between">{children}</div>;
}

function Action({
  children,
  icon,
  color,
}: {
  children?: React.ReactNode;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Button color={color} size="xs">
      {icon}
      <span className="flex items-center ml-2">{children}</span>
    </Button>
  );
}

function Divider({ size = "sm" }: { size?: "sm" | "md" | "xs" }) {
  const sizes = {
    xs: "my-1",
    sm: "my-2",
    md: "my-4",
  };
  return <HR className={sizes[size]} />;
}

export function SmallGroupsCard({ children }: { children?: React.ReactNode }) {
  return (
    <Card color="blue" className="max-w-md w-full">
      {children}
    </Card>
  );
}

SmallGroupsCard.Title = Title;
SmallGroupsCard.Leaders = Leaders;
SmallGroupsCard.ScheduleItem = ScheduleItem;
SmallGroupsCard.Schedule = Schedule;
SmallGroupsCard.Spacer = Spacer;
SmallGroupsCard.Label = Label;
SmallGroupsCard.Content = Content;
SmallGroupsCard.Actions = Actions;
SmallGroupsCard.Action = Action;
SmallGroupsCard.Divider = Divider;
SmallGroupsCard.LabelGroup = LabelGroup;
