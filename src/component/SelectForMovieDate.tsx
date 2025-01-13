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
import { Calendar, CalendarDays } from "lucide-react";

function generateRandomDatesForCurrentMonth(numDates: number) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const randomDates = [];

  for (let i = 0; i < numDates; i++) {
    // Randomizujemo datum između 1 i 28
    const randomDay = Math.floor(Math.random() * 28) + 1;
    // Kreiramo datum sa slučajnim danom u trenutnom mesecu i godini
    const randomDate = new Date(currentYear, currentMonth, randomDay);

    // Formatiramo datum u format dd/mm/yyyy
    // const formattedDate = randomDate.toISOString();
    const formattedDate = `${randomDate.getDate()}/${
      randomDate.getMonth() + 1
    }/${randomDate.getFullYear()}`;

    randomDates.push(formattedDate);
  }
  return randomDates;
}

export function SelectForMoviedate({
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
  const randomDates = generateRandomDatesForCurrentMonth(4);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger
            ref={ref}
            onBlur={onBlur}
            className="w-[200px] sm:w-[150px] rounded-3xl pl-5 mt-2 text-accent placeholder:text-accent"
          >
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent className="bg-[#191919]">
            <SelectGroup>
              <SelectLabel className="text-accent">
                <CalendarDays />
                Date
              </SelectLabel>

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
