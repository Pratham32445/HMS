import React from "react";
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

const data = [
  {
    name: "Desc 102A",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore explicabo, quam labore exercitationem necessitatibus voluptatum reprehenderit beatae modi tempore?",
    image: "/room1.jpg",
  },
  {
    name: "Desc 102A",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore explicabo, quam labore exercitationem necessitatibus voluptatum reprehenderit beatae modi tempore?",
    image: "/room2.jpg",
  },
  {
    name: "Desc 102A",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore explicabo, quam labore exercitationem necessitatibus voluptatum reprehenderit beatae modi tempore?",
    image: "/room3.jpg",
  },
  {
    name: "Desc 102A",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore explicabo, quam labore exercitationem necessitatibus voluptatum reprehenderit beatae modi tempore?",
    image: "/room4.jpg",
  },
  {
    name: "Desc 102A",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore explicabo, quam labore exercitationem necessitatibus voluptatum reprehenderit beatae modi tempore?",
    image: "/room4.jpg",
  },
  {
    name: "Desc 102A",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut inventore explicabo, quam labore exercitationem necessitatibus voluptatum reprehenderit beatae modi tempore?",
    image: "/room4.jpg",
  },
];

const Rooms = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <div className="flex justify-center items-center">
          <p className="pb-2 border-b ">
            <SparklesText text="Rooms" className="text-4xl" />
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-10 my-10">
          {data.map(({ name, desc, image }, idx) => (
            <Card key={idx} className="w-3/12 p-0">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                <CardContent className="relative w-full">
                  <AspectRatio ratio={16 / 9}>
                    <Image className="rounded" src={image} fill alt="hotel" />
                  </AspectRatio>
                </CardContent>
              </BlurFade>
              <CardFooter>
                <Link className="w-full" href={`/explore/rooms/323`}>
                  <Button className="w-full">Book Room</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
