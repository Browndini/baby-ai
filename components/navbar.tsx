import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimit } from "@/lib/api-limit";

export default async function Navbar() {
  const subscribed = await checkSubscription();
  const apiLimit = await getApiLimit();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimit={apiLimit} subscribed={subscribed} />
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
