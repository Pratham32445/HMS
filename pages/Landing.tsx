import React from "react";
import Promote from "@/components/promote";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Navbar from "@/components/Navbar";
import ShimmerButton from "@/components/ui/shimmer-button";
import LandingReviewMain from "@/components/LandingReviewMain";
import { BorderBeam } from "@/components/ui/border-beam";
import BestRooms from "@/components/BestRooms";
import UserReviews from "@/components/UserReviews";
import Query from "@/components/Query";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <BlurFade delay={0.1} inView>
        <div className="flex min-h-screen justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <BorderBeam className="z-50" size={250} duration={12} delay={9} />
            </div>
            <div className="relative">
              <LandingReviewMain />
              <Promote />
              <h1 className="text-7xl font-bold my-5">
                Choose the Best Rooms you want
              </h1>
            </div>
            <div>
              <div className="flex justify-center gap-4">
                <div className="w-[400px]">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src="/hotel1.jpg"
                      alt="Image"
                      fill
                      className="object-cover rounded-"
                    />
                  </AspectRatio>
                </div>
                <div className="w-[400px]">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src="/hotel3.jpg"
                      alt="Image"
                      fill
                      className=" object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Link href={"/explore/rooms"}>
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Explore
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <BestRooms />
        </div>
        <div>
          <div className="flex justify-center items-center">
            <p className="text-3xl pb-2 border-b ">User Reviews</p>
          </div>
          <UserReviews />
        </div>
        <div>
          <Query />
        </div>
      </BlurFade>
    </div>
  );
};

export default Landing;
