import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full sm:w-[270px] rounded-2xl pl-5 mt-2 text-accent placeholder:text-accent">
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
  );
}
