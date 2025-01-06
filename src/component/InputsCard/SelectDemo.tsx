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
      <SelectTrigger className="w-[270px] rounded-2xl pl-5">
        <SelectValue placeholder="select gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Gender</SelectLabel>
          <SelectItem value="apple">Female</SelectItem>
          <SelectItem value="banana">Male</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
