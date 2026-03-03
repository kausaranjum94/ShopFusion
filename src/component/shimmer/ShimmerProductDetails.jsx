export const ShimmerProductDetails = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-8 bg-gray-100 rounded-2xl p-8 text-center productCard h-64 relative overflow-hidden animate-pulse">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-6 gap-4 bg-gray-200 mb-3 w-full rounded-xl h-64"></div>
          <div className="col-span-6 gap-4 bg-gray-200 mb-3 w-full h-64 rounded-xl">
            <h2 className="font-bold text-black text-2xl bg-gray-200 mb-3 w-full h-20 rounded-xl"></h2>
            <p className="mb-3 bg-gray-200 w-full h-10 rounded-xl"></p>
          </div>
        </div>
      </div>
    </>
  );
};
