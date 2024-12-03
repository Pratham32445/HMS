import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between p-4 z-50">
      <div>
        <p className="text-xl">CheckInn</p>
      </div>
      <div className="flex gap-4">
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/singup"}>
          <Button>Create Account</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
