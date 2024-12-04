import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

function getDaysInMonth(month, year) {
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
}: {
  open: boolean;
  setOpen: () => void;
}) => {
  const { current, next } = getDaysMonthAndNext();
  const [days, setDays] = useState(current);
  const [currentMonth, setCurrentMonth] = useState(0);
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
              <div key={idx} className="cursor-pointer">
                <div className={`w-[20px] h-[20px] bg-neutral-500`}></div>
                <p className="text-center text-xs my-2">{idx + 1}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              disabled={currentMonth == 0}
              className="cursor-pointer"
              onClick={() => setCurrentMonth(currentMonth - 1)}
            >
              <ChevronLeft />
            </Button>
            <Button
              disabled={currentMonth == 1}
              className="cursor-pointer"
              onClick={() => setCurrentMonth(currentMonth + 1)}
            >
              <ChevronRight className="cursor-pointer" />
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Roomdialog;
