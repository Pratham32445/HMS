import React from "react";
import Image from "next/image";

const LandingReviews = ({
  src,
  className = "",
  message = "",
  name = "John Doe"
}: {
  src: string;
  className?: string;
  message: string;
  name : string;
}) => {
  return (
    <div className={`absolute ${className} p-3 rounded`}>
      <div className="flex gap-3 items-center">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <Image
            src={src}
            width={50}
            height={50}
            className="w-full h-full object-cover"
            alt="userReview"
          />
        </div>
        <div>
          <p>{name}</p>
          <p className="text-xs">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingReviews;
