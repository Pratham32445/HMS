"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import Roomdialog from "../Roomdialog";

const data = {
  name: "Desc 102A",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore explicabo, quam labore exercitationem necessitatibus voluptatum reprehenderit beatae modi tempore?",
  image: "/room3.jpg",
};

const showData = ["/room3.jpg", "/room1.jpg", "/room3.jpg"];

const Room = () => {
  const [showImage, setShowImage] = useState("/room3.jpg");
  const [dialog, setDialog] = useState(false);
  return (
    <div>
      <div className="flex mt-[150px]">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-2/3">
            <AspectRatio ratio={16 / 9}>
              <Image className="rounded" fill src={showImage} alt="coding" />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-3 mx-3">
            {showData.map((src, id) => (
              <div
                key={id}
                className="cursor-pointer"
                onClick={() => setShowImage(src)}
              >
                <Image
                  className="rounded"
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
          <div>
            <p className="text-2xl my-5">{data.name}</p>
            <p>{data.desc}</p>
            <Button className="my-4" onClick={() => setDialog(true)}>
              Check Avalibility
            </Button>
          </div>
        </div>
      </div>
      <Roomdialog open={dialog} setOpen={setDialog} />
    </div>
  );
};

export default Room;
