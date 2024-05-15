import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreationSubmit } from "./Submitbuttons";

export function CreationBottomBar() {
  return (
    <div className="w-full bottom-0 z-10 fixed border-t h-24 bg-white">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
        <Button variant="secondary" asChild>
          <Link href="/"> Cancel</Link>
        </Button>
        <CreationSubmit />
      </div>
    </div>
  );
}
