import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div>landing</div>
      <Link href={"/sign-in"}>
        <Button size={"lg"} value={"click"}>
          Login
        </Button>
      </Link>

      <Link href={"/sign-up"}>
        <Button size={"lg"} value={"click"}>
          Register
        </Button>
      </Link>
    </section>
  );
}
