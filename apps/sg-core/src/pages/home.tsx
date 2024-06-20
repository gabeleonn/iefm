import { withLayout } from "../hocs/with-layout";

function HomePage() {
  return <div>Home</div>;
}

export const Home = withLayout(HomePage);
