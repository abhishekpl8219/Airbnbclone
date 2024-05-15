import { createCategoryPage } from "@/app/action";
import { SelectedCategory } from "@/app/components/SelectedCategory";
import { CreationSubmit } from "@/app/components/Submitbuttons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StructureRoute({params}:{params:{id:string}}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold transition-color tracking-tighter">
          Which of these best describes your Home?
        </h2>
      </div>
      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value ={params.id} ></input>
        <SelectedCategory/>
        <div className="w-full bottom-0 z-10 fixed border-t h-24 bg-white">
            <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
                <Button variant="secondary" asChild><Link href = "/"> Cancel</Link></Button>
                <CreationSubmit/>

            </div>

        </div>
      </form>
    </>
  );
}
