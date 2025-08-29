import { BackgroundBeamsWithCollision } from "../../../components/ui/background-beams-with-collision";


export function Banner() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-center text-black z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">FixOgo</h1>
        <p className="text-lg md:text-2xl font-medium mb-6">
          Your Local Solution for All Services
        </p>
        <div className="flex justify-center gap-4 mb-6 flex-wrap text-sm md:text-base">
          <span className="bg-white/10 px-3 py-1 rounded-full">Cleaning</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">Plumbing</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">Electrical</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">
            Appliance Repair
          </span>
        </div>
        <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
          Explore Services
        </button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
