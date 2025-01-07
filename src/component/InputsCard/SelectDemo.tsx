import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({
  control,
  name,
  onBlur,
  ref,
}: {
  control: any;
  name: string;
  onBlur: () => void;
  ref: React.Ref<any>;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger
            ref={ref}
            onBlur={onBlur}
            className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2 text-accent placeholder:text-accent"
          >
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent className="bg-[#191919]">
            <SelectGroup>
              <SelectLabel className="text-accent">Gender</SelectLabel>
              <SelectItem value="female" className="text-accent">
                Female
              </SelectItem>
              <SelectItem value="male" className="text-accent">
                Male
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
