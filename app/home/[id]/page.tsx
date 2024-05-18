import { CategoryShowCase } from "@/app/components/CategoryShowcase";
import { HomeMap } from "@/app/components/HomeMap";
import { SelectCalendar } from "@/app/components/SelectCalendar";
import prisma from "@/app/lib/db";
import { useCountries } from "@/app/lib/getCountries";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
async function getData(homeid: string) {
  const data = await prisma.home.findUnique({
    where: {
      id: homeid,
    },
    select: {
      photo: true,
      description: true,
      guests: true,
      bedrooms: true,
      bathrooms: true,
      title: true,
      categoryName: true,
      price: true,
      country: true,
      User: {
        select: {
          profileImage: true,
          firstName: true,
        },
      },
    },
  });
  return data;
}

export default async function HomeRoute({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);
  return (
    <div className="w-[75%] mx-auto mt-10">
      <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
      <div className="relative h-[550px]">
        <Image
          alt="Image of the home"
          src={`https://fgidykyldnvclmtzbgmz.supabase.co/storage/v1/object/public/airbnbcloneimages/${data?.photo}`}
          fill
          className="rounded-lg h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between gap-x-24 mt-8 mb-12">
        <div className="w-2/3">
          <h3 className="text-xl font-medium">
            {country?.flag} {country?.label} /{country?.region}
          </h3>
          <div className="flex gap-x-2 text-muted-programmer">
            <p>{data?.guests}Guests</p>*<p>{data?.bedrooms}Bedrooms</p>
          </div>
          <div className="flex items-center mt-6">
            <div className="flex flex-col ml-4">
              <h3 className="font-medium">Hosted by {data?.User?.firstName}</h3>
              <p className="text-sm text-muted-foreground">Host since 2017</p>
            </div>
          </div>
          <Separator className="my-7" />
          <CategoryShowCase categoryName={data?.categoryName as string} />
          <Separator className="my-7" />
          <p className="text-muted-foreground">{data?.description}</p>
          <Separator className="my-7" />
          <HomeMap locationValue={country?.value as string} />
        </div>
        <SelectCalendar />
      </div>
    </div>
  );
}
