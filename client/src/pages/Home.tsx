import Hero from "../components/Hero";
import { useAppSelector } from "../hooks/redux";
import Profile from "./Profile";

export default function Home() {
  const { userInfo } = useAppSelector((state) => state.auth);

  return <>{userInfo ? <Profile /> : <Hero />}</>;
}
