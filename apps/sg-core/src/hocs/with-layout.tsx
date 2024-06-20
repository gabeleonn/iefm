import { composeHocs } from "../helpers/compose";
import { withAnimation } from "./with-animation";
import { withNavigation } from "./with-navigation";

export function withLayout(Component: any) {
  return composeHocs([withAnimation, withNavigation], Component);
}
