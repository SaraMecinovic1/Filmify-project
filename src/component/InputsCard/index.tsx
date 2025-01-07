import { Input } from "@/components/ui/input";
import { DateOfBirthPicker } from "./CalendarForBirthday";
import { SelectDemo } from "./SelectDemo";

type InputsProps = {
  register: any;
  errors: any;
};

function Inputs({ register, errors }: InputsProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 px-7 py-5">
      <div>
        <p className="text-left pl-3 text-sm font-medium text-textColor">
          Name
        </p>
        <Input
          className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
          type="text"
          id="name"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium text-textColor">
          Lastname
        </p>
        <Input
          className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
          type="text"
          id="lastname"
          {...register("lastname")}
        />
        {errors.lastname && (
          <p className="text-red-500">{errors.lastname.message}</p>
        )}
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium text-textColor">
          Date of birth
        </p>
        <DateOfBirthPicker
          {...register("birthDate", { required: "Date of birth is required." })}
        />
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium text-textColor">
          Gender
        </p>
        <SelectDemo
          {...register("gender", { required: "Gender is required." })}
        />
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium text-textColor">
          Email
        </p>
        <Input
          className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
          type="email"
          id="email"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <p className="text-left pl-3 text-sm font-medium text-textColor">
          Password
        </p>
        <Input
          className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2"
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
    </div>
  );
}

export default Inputs;
