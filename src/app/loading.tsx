export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated Loader */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#2F6DB3]/20"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#2F6DB3] border-t-transparent"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
            Loading
          </div>
          <p className="mt-2 text-slate-600">
            Preparing your logistics experience...
          </p>
        </div>
      </div>
    </div>
  );
}