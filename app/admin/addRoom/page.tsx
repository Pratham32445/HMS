import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const AddRoom = () => {
  return (
    <div>
      <div>
        <div className="my-5">
          <Label htmlFor="roomNo">Room Number</Label>
          <Input
            className="my-2"
            id="roomNO"
            type="text"
            placeholder="Enter Room Number"
          />
        </div>
        <div className="my-5">
          <Label htmlFor="roomNo">Room Type</Label>
          <div className="my-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">SINGLE</SelectItem>
                <SelectItem value="double">DOBULE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="my-5">
          <Label htmlFor="roomNo">Max Occupancy</Label>
          <Input
            className="my-2"
            id="roomNO"
            type="number"
            placeholder="Max Occpancy"
          />
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
