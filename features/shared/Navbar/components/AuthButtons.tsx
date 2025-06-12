import { Button } from "@/components/ui/button";
import Notification from "./Notification";
import Link from "next/link";

const AuthButtons = ({ isColumn = false }: { isColumn?: boolean }) => (
  <div
    className={`flex ${
      isColumn ? "flex-col gap-4 items-center" : "gap-4 items-center"
    }`}
  >
    <Notification />
    <Button
      variant="outline"
      className={`text-black/70 bg-white hover:bg-gray-200 ${
        isColumn ? "w-full" : ""
      }`}
    >
      <Link href="/register">Register</Link>
    </Button>
    <Button
      className={`border text-white/70 hover:opacity-80 ${
        isColumn ? "w-full" : ""
      }`}
    >
      Log In
    </Button>
  </div>
);

export default AuthButtons;
