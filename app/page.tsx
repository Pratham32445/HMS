import { getServerSession } from "next-auth";
import { authoptions } from "./api/auth/[...nextauth]/options";
import Landing from "@/pages/Landing";

export default async function Home() {
  const { user } = await getServerSession(authoptions);
  console.log(user, "is user");
  return (
    <div>
      <Landing/>
    </div>
  );
}
