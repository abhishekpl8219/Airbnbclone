import { File } from "lucide-react";

export function NoItems() {
  return (
    <div className="flex min-h-[400px] flex-col item-center justify-center rounded-md vorder border-dashed p-8 text-center animate-in fase-in-50 mt-10">
      <div className=" flex h-20 w-20   items-center justify-center rounded-full bg-primary/10 ">
        <File className="h-10 w-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">
        Sorry no listings found for this category
      </h2>
      <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
        Please check a other category or create your own listing
      </p>
    </div>
  );
}
