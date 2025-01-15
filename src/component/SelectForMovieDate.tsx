import { Controller, Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from "lucide-react";

interface SelectForMovieDateProps {
  control: Control<any>;
  name: string;
  onBlur: () => void;
  ref: React.Ref<any>;
}

export function SelectForMoviedate({
  control,
  name,
  onBlur,
  ref,
}: SelectForMovieDateProps) {
  const randomDates = generateDatesEveryOtherDay(4);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger
            ref={ref}
            onBlur={onBlur}
            className="w-[135px] sm:w-[135px] flex-row rounded-3xl pl-4  text-accent placeholder:text-accent"
          >
            <SelectValue
              placeholder={
                <div className="flex items-center">
                  <CalendarDays className="mr-1.5 w-[15px] text-secondary" />
                  Dates
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className="bg-[#191919]">
            <SelectGroup>
              <SelectLabel className="text-accent">Dates:</SelectLabel>
              {randomDates.map((date, index) => (
                <SelectItem key={index} value={date} className="text-accent">
                  {date}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}

function generateDatesEveryOtherDay(numDates: number): string[] {
  const currentDate = new Date();
  const dates: string[] = [];

  for (let i = 0; i < numDates; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i * 2);
    dates.push(
      `${nextDate.getDate()}/${
        nextDate.getMonth() + 1
      }/${nextDate.getFullYear()}`
    );
  }

  return dates;
}
