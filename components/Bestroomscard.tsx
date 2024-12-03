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
import { Button } from "./ui/button";

const Bestroomscard = ({src} : {src : string}) => {
  return (
    <div>
      <Card className="relative">
        <CardHeader>
          <CardTitle>A-105</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Esse, voluptatem.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={src}
            width={300}
            height={300}
            className="w-full rounded"
            alt="image"
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full">Visit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Bestroomscard;
