export function SkeletonLoader() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-white">
      {/* Navbar Skeleton */}
      <header className="fixed top-0 w-full z-40 py-6 bg-transparent border-transparent">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="w-32 h-8 bg-slate-800/80 rounded-md animate-pulse"></div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-16 h-4 bg-slate-800/80 rounded-full animate-pulse"></div>
            ))}
          </nav>

          {/* Desktop Socials / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-800/80 animate-pulse"></div>
            <div className="w-24 h-9 rounded-full bg-slate-800/80 animate-pulse"></div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden w-8 h-8 bg-slate-800/80 rounded-md animate-pulse"></div>
        </div>
      </header>

      {/* Hero Skeleton wrapper */}
      <main className="grow relative flex items-center justify-center overflow-hidden pt-24 pb-2 lg:pt-24 lg:pb-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-12">
            {/* Left Typography Section */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center text-left lg:pr-10 gap-6">
              <div className="space-y-4">
                <div className="h-16 sm:h-20 lg:h-20 xl:h-24 bg-slate-800/80 rounded-2xl w-3/4 animate-pulse"></div>
                <div className="h-16 sm:h-20 lg:h-20 xl:h-24 bg-slate-800/80 rounded-2xl w-1/2 animate-pulse"></div>
              </div>

              <div className="space-y-3 mt-4">
                <div className="h-6 bg-slate-800/80 rounded-full w-full max-w-lg animate-pulse delay-75"></div>
                <div className="h-6 bg-slate-800/80 rounded-full w-4/5 max-w-lg animate-pulse delay-100"></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5 mt-4">
                <div className="w-full sm:w-[250px] h-14 bg-slate-800/80 rounded-2xl animate-pulse delay-150"></div>
                <div className="w-full sm:w-[150px] h-14 bg-slate-800/80 rounded-2xl animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="w-full lg:w-[45%] relative flex justify-center items-center mt-10 lg:mt-0">
              <div className="relative w-72 h-96 sm:w-80 sm:h-112 xl:w-96 xl:h-128 rounded-t-full rounded-b-[2.5rem] bg-slate-800/60 animate-pulse border border-slate-700/50 shadow-2xl">
                {/* Inner Badge Placeholder */}
                <div className="absolute -bottom-8 -left-6 sm:-left-16 w-48 h-24 rounded-3xl bg-slate-700/80 animate-pulse border border-slate-600/50 delay-300"></div>
                <div className="absolute top-10 -right-8 w-24 h-24 rounded-full bg-slate-700/80 animate-pulse border border-slate-600/50 delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
