import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authoptions } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";

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
          <div className="flex items-center">
            <Link href={"/"}>
            <p className="text-xl font-bold">CheckInn</p>
            </Link>
            <Image src={"/logo.svg"} width={30} height={30} alt="logo"/>
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
              <div className="flex gap-4">
                {session.user.isAdmin && (
                  <Link href="/admin">
                    <Button>Admin</Button>
                  </Link>
                )}
                <Button>Account</Button>
              </div>
            )}
          </div>
        </div>
      </nav>
    )
};

export default Navbar;
