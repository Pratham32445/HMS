"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function Login() {
  const { toast } = useToast();
  const [authInfo, setAuthInfo] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const loginGuest = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await signIn("credentials", {
      email: authInfo.email,
      password: authInfo.password,
      redirect: false,
    });
    setIsLoading(false);
    if (result?.error) {
      toast({
        title: "email or password is wrong",
        variant: "destructive",
      });
      return;
    }
    if (result?.ok) {
      toast({
        title: "Login succedd",
        variant: "success",
      });
      router.push("/explore/rooms");
    }
    console.log(result);
  };
  return !isLoading ? (
    <div className="w-full min-h-screen  flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) =>
                  setAuthInfo({ ...authInfo, email: e.target.value })
                }
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                onChange={(e) =>
                  setAuthInfo({ ...authInfo, password: e.target.value })
                }
                id="password"
                type="password"
                required
              />
            </div>
            <Button onClick={loginGuest} type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  ) : (
    <div className="flex justify-center items-center width-full min-h-screen">
      <LoaderCircle className="animate-spin" width={50} height={50} />
    </div>
  );
}

export default Login;
