export default function HeroBanner() {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
        <div className="relative w-full rounded-2xl overflow-hidden bg-sky-50 aspect-[21/9] flex items-center justify-center border-2 border-dashed border-primary-200">
          {/* This div represents the Full Width Banner. 
               In a real scenario, you would use <Image src={bannerAsset} ... /> here. 
               For now, we simulate the visual presence. */}
          <div className="text-center">
            <span className="text-primary-300 text-5xl font-bold opacity-30">
              Hero Banner Image
            </span>
            <p className="text-primary-400 mt-2 text-sm">
              (Student Group & Badges)
            </p>
          </div>

          {/* Decorative Elements simulating the banner content if needed */}
          <div className="absolute inset-x-0 -bottom-10 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    );
}