import { Input } from "@/components/ui/input";
import { DateOfBirthPicker } from "./CalendarForBirthday";
import { SelectDemo } from "./SelectDemo";

type Props = {};

function Inputs({}: Props) {
  return (
    <div className="w-full h-full bg-[#191919] bg-opacity-90 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <div className="flex flex-col space-y-2">
        <p htmlFor="name" className="text-left pl-3 text-sm font-medium">
          Name
        </p>
        <Input className="w-full rounded-2xl pl-5" type="text" id="name" />
      </div>

      <div className="flex flex-col space-y-2">
        <p htmlFor="lastname" className="text-left pl-3 text-sm font-medium">
          Lastname
        </p>
        <Input className="w-full rounded-2xl pl-5" type="text" id="lastname" />
      </div>

      <div className="flex flex-col space-y-2">
        <p htmlFor="date" className="text-left pl-3 text-sm font-medium">
          Date of birth
        </p>
        <DateOfBirthPicker />
      </div>

      <div className="flex flex-col space-y-2">
        <p htmlFor="gender" className="text-left pl-3 text-sm font-medium">
          Gender
        </p>
        <SelectDemo />
      </div>

      <div className="flex flex-col space-y-2">
        <p htmlFor="email" className="text-left pl-3 text-sm font-medium">
          Email
        </p>
        <Input className="w-full rounded-2xl pl-5" type="email" id="email" />
      </div>

      <div className="flex flex-col space-y-2">
        <p htmlFor="password" className="text-left pl-3 text-sm font-medium">
          Password
        </p>
        <Input
          className="w-full rounded-2xl pl-5"
          type="password"
          id="password"
        />
      </div>
    </div>
  );
}

export default Inputs;
