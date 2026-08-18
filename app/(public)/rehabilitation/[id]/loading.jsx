export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white/20">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-black" />
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>Loading</span>
          <span className="animate-pulse">.</span>
          <span className="animate-pulse [animation-delay:200ms]">.</span>
          <span className="animate-pulse [animation-delay:400ms]">.</span>
        </div>
      </div>
    </div>
  );
}
