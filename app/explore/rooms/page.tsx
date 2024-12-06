"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
import SparklesText from "@/components/ui/sparkles-text";
import axios from "axios";
import { Room } from "@/types";
import { LoaderCircle } from "lucide-react";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const getRooms = async () => {
    const res = await axios.get("/api/rooms");
    setRooms(res.data.rooms);
  };
  useEffect(() => {
    getRooms();
  }, []);

  console.log(rooms);

  return (
    <div>
      <div className="mt-[100px]">
        <div className="flex justify-center items-center">
          <p className="pb-2 border-b ">
            <SparklesText text="Rooms" className="text-4xl" />
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-10 my-10">
          {rooms.length > 0 ? (
            rooms.map((room: Room, idx) => (
              <Card key={room.Id} className="w-3/12 p-0">
                <CardHeader>
                  <CardTitle className="mb-2">{room.roomNumber}</CardTitle>
                  <CardDescription className="flex flex-col gap-2">
                    <p>${room.basePrice}</p>
                    <p>{room.description}</p>
                    <p>{room.roomType}</p>
                  </CardDescription>
                </CardHeader>
                <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                  <CardContent className="relative w-full">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        className="rounded"
                        src={"/hotel1.jpg"}
                        fill
                        alt="hotel"
                      />
                    </AspectRatio>
                  </CardContent>
                </BlurFade>
                <CardFooter>
                  <Link className="w-full" href={`/explore/rooms/${room.Id}`}>
                    <Button className="w-full">Book Room</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div>
              <LoaderCircle width={30} height={30} className="animate-spin"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
