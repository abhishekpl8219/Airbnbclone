import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
}

export function ListingCard({
  description,
  imagePath,
  location,
  price,
}: iAppProps) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://fgidykyldnvclmtzbgmz.supabase.co/storage/v1/object/public/airbnbcloneimages/${imagePath}`}
          alt="Image of house"
          fill
          className="rounded-lg h-full object-cover "
        />
      </div>
      <Link href={"/"} className="mt-2">
        <h3
          className="font-bold text-base
        "
        >
          {country?.flag}
          {country?.label}/{country?.region}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 ">
          {description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">${price} </span>
          Night
        </p>
      </Link>
    </div>
  );
}
