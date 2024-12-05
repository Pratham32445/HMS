import NewUsers from "@/components/admin/NewUsers";
import Stats from "@/components/admin/Stats";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 p-10">
          <div>
            <p className="font-bold text-2xl">Total Revenue</p>
            <p className="text-3xl my-3">$15,231.89</p>
            <p className="text-sm">+20.1% from last month</p>
          </div>
        </div>
        <div className="aspect-video rounded-xl p-10 bg-muted/50">
          <div>
            <p className="font-bold text-2xl">Total RoomBookings</p>
            <p className="text-3xl my-3">$15,231.89</p>
            <p className="text-sm">+20.1% from last month</p>
          </div>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <NewUsers />
        </div>
      </div>
      <div className="h-[40vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <Stats />
      </div>
    </>
  );
};

export default Dashboard;
