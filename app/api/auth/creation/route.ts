import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../../../lib/db";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user == null || !user.id) {
    throw new Error("Something went wrong check it");
  }
  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email: user.email ?? "",
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        id: user.id,
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
  }
  return NextResponse.redirect(
    "https://airbnbclone-ae4thye1y-abhishek-patials-projects.vercel.app"
  );
}
