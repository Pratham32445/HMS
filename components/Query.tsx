import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

const Query = () => {
  return (
    <div className="flex justify-center  pb-5">
      <div className="w-1/2">
        <div className="flex justify-center">
          <p className="text-3xl border-b p-2 text-center w-fit">
            Post Your Query
          </p>
        </div>
        <div className="mt-[60px] w-full">
          <div>
            <div>
              <Input className="w-full p-6" placeholder="Subject..." />
              <Textarea className="my-4" placeholder="Message..." />
              <Button className="w-full">Create</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
