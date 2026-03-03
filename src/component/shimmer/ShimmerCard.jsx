export const ShimmerCard = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-8 text-center productCard h-64 relative overflow-hidden animate-pulse">
      <div className="bg-gray-200 mb-3 w-full h-28 rounded-xl"></div>
      <div className="bg-gray-200 mb-3 w-full h-10 rounded-xl"></div>
      <div className="bg-gray-200 mb-3 w-full h-7 rounded-xl"></div>
    </div>
  );
};
