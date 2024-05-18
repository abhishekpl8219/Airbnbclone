import { SkeletonCard } from "../components/SkeletonCard";

export default function FavoritesLoading() {
  return (
    <section className="container mx-auto px-5 lg:px-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your Favorites</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
}
