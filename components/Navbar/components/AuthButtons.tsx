import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const AuthButtons = ({ isColumn = false }: { isColumn?: boolean }) => (
  <div
    className={`flex ${
      isColumn ? "flex-col gap-4 items-center" : "gap-4 items-center"
    }`}
  >
    <Bell className="text-white/70 w-5 h-5" />
    <Button
      variant="outline"
      className={`text-black/70 bg-white hover:bg-gray-200 ${
        isColumn ? "w-full" : ""
      }`}
    >
      Register
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
