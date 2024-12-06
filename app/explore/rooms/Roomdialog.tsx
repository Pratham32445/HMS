import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

function getDaysInMonth(month : number, year : number) {
  return new Date(year, month + 1, 0).getDate(); // Month is 0-indexed
}

const getDaysMonthAndNext = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const current = getDaysInMonth(currentMonth, currentYear);
  const next = getDaysInMonth(
    (currentMonth + 1) % 12,
    currentMonth === 11 ? currentYear + 1 : currentYear
  );
  return { current, next };
};

const Roomdialog = ({
  open,
  setOpen,
  price,
}: {
  open: boolean;
  setOpen: () => void;
  price: number;
}) => {
  const { current, next } = getDaysMonthAndNext();
  const [days, setDays] = useState(current);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [selectedDays, setSelectedDays] = useState<Record<string, boolean>>({});

  const addSeat = (day: number) => {
    if (selectedDays[`${currentMonth}|${day}`]) {
      setSelectedDays((prevState) => {
        const newRooms = { ...prevState };
        delete newRooms[`${currentMonth}|${day}`];
        return newRooms;
      });
      return;
    }
    setSelectedDays((prevState) => ({
      ...prevState,
      [`${currentMonth}|${day}`]: true,
    }));
  };

  const createBooking = async () => {
     
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Avalibility</DialogTitle>
          <DialogDescription>
            By clicking on the unbooked rooms you can create the booking
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: days }).map((day, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => addSeat(idx + 1)}
              >
                <div
                  className={`w-[20px] h-[20px] ${
                    selectedDays[`${currentMonth}|${idx + 1}`]
                      ? "bg-green-500"
                      : "bg-neutral-500"
                  }`}
                ></div>
                <p className="text-center text-xs my-2">{idx + 1}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              disabled={currentMonth == 0}
              className="cursor-pointer"
              onClick={() => [
                setCurrentMonth(currentMonth - 1),
                setDays(current),
              ]}
            >
              <ChevronLeft />
            </Button>
            <Button
              disabled={currentMonth == 1}
              className="cursor-pointer"
              onClick={() => [setCurrentMonth(currentMonth + 1), setDays(next)]}
            >
              <ChevronRight className="cursor-pointer" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>Booking Cost : ₹{Object.keys(selectedDays).length * price}</p>
          <Button
            disabled={Object.keys(selectedDays).length == 0}
            type="submit"
            onClick={createBooking}
          >
            Book
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Roomdialog;
