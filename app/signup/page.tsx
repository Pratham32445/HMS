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
import axios,{AxiosError} from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation"

function Signup() {
  const [authInfo, setAuthInfo] = useState({ email: "", password: "" });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [Errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();

  const createAccount = async () => {
    try {
      if (!authInfo.email || !authInfo.password) {
        toast({
          title: "Please provide all the fields",
          variant: "destructive",
        });
        return;
      }
      setErrors({ email: "", password: "" });
      setIsLoading(true);
      const res = await axios.post(`/api/auth/account`, {
        email: authInfo.email,
        password: authInfo.password,
      });
      if (res.status == 201) {
        signIn("credentials", {
          email: authInfo.email,
          password: authInfo.password,
          redirect: false,
        });
        toast({
          title: "Account created successfully",
          variant: "success",
        });
        setIsLoading(false);
        router.push("/explore/rooms");
      }
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof AxiosError && error.response) {
        const type = error.response.data.type;
        switch (type) {
          case "toast-error":
            toast({
              title: error.response.data.message,
              variant: "destructive",
            });
            break;
          case "show-errors":
            setErrors(error.response.data.Errors);
            break;
          default:
            break;
        }
      }
    }
  };

  return !isLoading ? (
    <div className="w-full min-h-screen  flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Create your Email and Password below to create a fresh new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) =>
                  setAuthInfo({ ...authInfo, email: e.target.value })
                }
              />
              <p className="text-xs text-red-500">
                {Errors.email && Errors.email}
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) =>
                  setAuthInfo({ ...authInfo, password: e.target.value })
                }
              />
              <p className="text-xs text-red-500">
                {Errors.password && Errors.password}
              </p>
            </div>
            <Button onClick={createAccount} type="submit" className="w-full">
              Signup
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
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

export default Signup;
