import Advertisement from "@/component/Advertisement";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="w-full px-5 mt-[90px]">
      <div className=" w-full">
        <Advertisement />
      </div>
    </div>
  );
}
