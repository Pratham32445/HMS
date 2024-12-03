import React from "react";
import Bestroomscard from "./Bestroomscard";

const BestRooms = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-center items-center">
        <div>
          <div className="flex justify-center">
            <p className="text-3xl text-center border-b w-fit pb-2">
              Our Best Rooms
            </p>
          </div>
          <div>
            <div className="my-10 flex gap-5">
              {["/hotel1.jpg", "/hotel2.avif", "/hotel3.jpg"].map((src,idx) => (
                <Bestroomscard src={src} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRooms;
