import Profile from "./page";
import Header from "@/components/Header/Header";

export default function RootLayout() {
  return (
    <>
      <div>
        <Header />
        <Profile />
      </div>
    </>
  );
}
