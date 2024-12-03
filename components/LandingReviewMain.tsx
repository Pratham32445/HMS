import React from "react";
import LandingReviews from "./LandingReviews";

const LandingReviewMain = () => {
  return (
    <div>
      <LandingReviews
        src="/hotel1.jpg"
        className="top-[-30px] left-0 bg-[#6E40FF]"
        message="Very Fast..."
        name="Maya Joshi"
      />
      <LandingReviews
        src="/hotel1.jpg"
        className="top-[200px] right-[-10px] bg-[#2D4CF9]"
        message="Greate user Experience..."
        name="Alex walker"
      />
      <LandingReviews
        src="/hotel1.jpg"
        className="left-0 top-[440px] text-black bg-[#B2B3FF]"
        message="Love it..."
        name="Alex walker"
      />
    </div>
  );
};

export default LandingReviewMain;
