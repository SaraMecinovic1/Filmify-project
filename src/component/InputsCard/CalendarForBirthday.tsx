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
  // Ispravljeno ime komponente
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date); // Ažuriraj izabrani datum
    console.log("Selected Date of Birth:", date); // Možete ga proslediti dalje, npr. u state ili formu
  };

  return (
    <div className="flex flex-col items-center ">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="w-[270px] rounded-2xl  text-left font-normal pl-5"
          >
            {selectedDate ? (
              format(selectedDate, "PPP") // Formatiran datum
            ) : (
              <span>Pick a date of birth</span> // Ako datum nije izabran
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect} // Povežite onSelect sa funkcijom
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
