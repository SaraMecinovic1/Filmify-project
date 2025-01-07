"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateOfBirthPicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      console.log("Selected Date of Birth:", date);
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#191919] text-accent">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="w-full rounded-2xl text-left font-normal pl-5 mt-2 text-accent hover:bg-transparent"
          >
            {selectedDate ? (
              format(selectedDate, "PPP") // Prikazuje izabrani datum u accent boji
            ) : (
              <span className="text-accent">Pick a date of birth</span> // Placeholder u accent boji
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-accent" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-[#191919] text-accent"
          align="start"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
