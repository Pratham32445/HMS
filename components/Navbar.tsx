import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authoptions } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(authoptions);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 
      bg-black/10 
      backdrop-blur-lg 
      border border-black/20 
      shadow-lg 
      rounded-b-xl
      transition-all duration-300
    "
    >
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        <div>
          <p className="text-xl font-bold">CheckInn</p>
        </div>
        <div className="flex items-center gap-4">
          {!session ? (
            <>
              <Link href={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link href={"/signup"}>
                <Button>Create Account</Button>
              </Link>
            </>
          ) : (
            <Button>Account</Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
