const UserSkeleton = ({ count }: { count: number }) => {
  const skeleton = Array.from({ length: count }, (_, index) => {
    return (
      <div key={index} className="border shadow-sm rounded p-2 w-full mx-auto ">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  });
  return skeleton;
};

export default UserSkeleton;
