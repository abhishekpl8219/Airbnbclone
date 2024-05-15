import { createCategoryPage } from "@/app/action";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";
import { SelectedCategory } from "@/app/components/SelectedCategory";
import { CreationSubmit } from "@/app/components/Submitbuttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StructureRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold transition-color tracking-tighter">
          Which of these best describes your Home?
        </h2>
      </div>
      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id}></input>
        <SelectedCategory />
        <CreationBottomBar />
      </form>
    </>
  );
}
