import { Input } from "@/components/ui/input";
import { DateOfBirthPicker } from "./CalendarForBirthday";
import { SelectDemo } from "./SelectDemo";
import { Button } from "@/components/ui/button";

type Props = {};

function Inputs({}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4">
      <div>
        <p className="text-left pl-3 text-sm font-medium text-textColor">
          Name
        </p>
        <Input className="w-full rounded-2xl pl-5 mt-2" type="text" id="name" />
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium  text-textColor">
          Lastname
        </p>
        <Input
          className="w-full rounded-2xl pl-5 mt-2 "
          type="text"
          id="lastname"
        />
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium  text-textColor">
          Date of birth
        </p>
        <DateOfBirthPicker />
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium  text-textColor">
          Gender
        </p>
        <SelectDemo />
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium  text-textColor">
          Email
        </p>
        <Input
          className="w-full rounded-2xl pl-5 mt-2"
          type="email"
          id="email"
        />
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium  text-textColor">
          Password
        </p>
        <Input
          className="w-full rounded-2xl pl-5 mt-2"
          type="password"
          id="password"
        />
      </div>
    </div>
  );
}

export default Inputs;
