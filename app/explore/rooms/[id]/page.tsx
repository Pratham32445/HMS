"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Roomdialog from "../Roomdialog";
import { useParams } from "next/navigation";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { Room as RoomType } from "@/types";

const Room = () => {
  const [showImage, setShowImage] = useState("");
  const [dialog, setDialog] = useState(false);
  const [roomInfo, setRoomInfo] = useState<RoomType | null>(null);
  const params = useParams();
  useEffect(() => {
    const fetchRoom = async () => {
      if (params && params.id) {
        console.log(params.id);
        const { data } = await axios.post("/api/rooms/Id", { Id: params.id });
        setShowImage(data.room.images[0]);
        setRoomInfo(data.room);
      }
    };
    fetchRoom();
  }, []);

  return roomInfo ? (
    <div>
      <div className="flex mt-[150px]">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-2/3">
            <AspectRatio ratio={16 / 9}>
              <Image
                className="rounded object-cover"
                fill
                src={showImage}
                alt="coding"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-3 mx-3">
            {roomInfo.images.map((src, id) => (
              <div
                key={id}
                className="cursor-pointer"
                onClick={() => setShowImage(src)}
              >
                <Image
                  className="rounded object-cover"
                  alt="coding"
                  width={50}
                  height={50}
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-4">
            <p className="text-2xl my-3">{roomInfo.roomNumber}</p>
            <p className="text-neutral-600 my-2">{roomInfo.description}</p>
            <p className="my-2">Price : ₹{roomInfo.basePrice}</p>
            <p className="my-2">Max Occupancy : {roomInfo.maxOccupancy}</p>
            <p>
              Status :{" "}
              <span
                className={`${
                  roomInfo.status == "AVAILABLE"
                    ? "text-green-800"
                    : "text-red-700"
                } font-bold`}
              >
                {" "}
                {roomInfo.status}
              </span>
            </p>
            <Button className="my-4" onClick={() => setDialog(true)}>
              Check Avalibility
            </Button>
          </div>
        </div>
      </div>
      <Roomdialog open={dialog} price={roomInfo.basePrice} setOpen={setDialog} />
    </div>
  ) : (
    <div className="flex justify-center mt-[150px]">
      <LoaderCircle width={30} height={30} className="animate-spin" />
    </div>
  );
};

export default Room;
