import { ShimmerCard } from "./ShimmerCard";

export const ShimmerGrid = () => {
  return (
    <div className="container mx-auto px-4 my-5 h-64">
      <div className="grid grid-cols-4 gap-4 my-4 h-64">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};
