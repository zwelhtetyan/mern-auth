import Hero from "../components/Hero";
import Profile from "./Profile";

export default function Home() {
  const a = true;

  return <>{a ? <Profile /> : <Hero />}</>;
}
