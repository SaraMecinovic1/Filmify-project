import Advertisement from "@/component/Advertisement";
import NavBar from "@/component/Navbar";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="w-full p-8   ">
      <Advertisement />
    </div>
  );
}
