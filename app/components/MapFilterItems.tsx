"use client"
import Link from "next/link";
import { categoryItems } from "../lib/categoryItems";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export function MapFilterItems(){
    const searchParams = useSearchParams();
    const search = searchParams.get("filter");
    const pathname= usePathname()
   
    const createQueryString = useCallback((name:string,value:string)=>{
        const  params= new URLSearchParams(searchParams.toString());  
        params.set(name,value); 
        return params.toString();

        

    },[searchParams])
    

return(
    <div className="flex justify-center gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar ">
      {categoryItems.map((item)=>(
         <Link key = {item.id} href={pathname+"?"+createQueryString("filter",item.name)} className={cn(search==item.name ?"border b-2 border-black pb-2 flex-shrink-0":"opacity-70 flex-shrink-0","flex gap-y-3 flex-col items-center")}>
            <div className="h-6 w-6 relative">
           
                <Image src = {item.imageUrl} alt= "category image" className="h-6 w-6 relative" width={24} height={24}></Image> 

            </div>
        <p className="font-medium text-xs">{item.title}</p>
        </Link>

      )

      )}
    </div>
)
}