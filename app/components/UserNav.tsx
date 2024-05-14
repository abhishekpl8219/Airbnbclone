import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export async  function UserNav() {
    const{getUser}=getKindeServerSession();
    const user = await getUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex gap-x-3 items-center">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5 " />
          <img
            className="rounded-full h-8 w-8 hidden lg:block"
            src={user?.picture??
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"

            }
            alt="image of the user "
          ></img>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
      {user ?
         <>
        <DropdownMenuItem><LogoutLink className="w-full">Logout</LogoutLink></DropdownMenuItem></>  :
            <> <DropdownMenuItem><RegisterLink className="w-full">Register</RegisterLink></DropdownMenuItem>
        <DropdownMenuItem><LoginLink className="w-full">Login</LoginLink></DropdownMenuItem></>
        }
        </DropdownMenuContent>
        </DropdownMenu>



     
    
   
  );
}
