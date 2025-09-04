import { BackgroundBeamsWithCollision } from "../../../components/ui/background-beams-with-collision";

export function Banner() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-center text-[#292b5a] z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#2392a9]">
          FixOgo
        </h1>
        <p className="text-lg md:text-2xl font-medium mb-6">
          Fast, Reliable Home Services at Your Doorstep
        </p>
        <div className="flex justify-center gap-4 mb-6 flex-wrap text-sm md:text-base">
          <span className="bg-[#f7b019]/20 text-[#f7b019] px-3 py-1 rounded-full font-semibold">
            Grocery Delivery
          </span>
          <span className="bg-[#f7b019]/20 text-[#f7b019] px-3 py-1 rounded-full font-semibold">
            Home Repairs
          </span>
          <span className="bg-[#f7b019]/20 text-[#f7b019] px-3 py-1 rounded-full font-semibold">
            Daily Help
          </span>
          <span className="bg-[#f7b019]/20 text-[#f7b019] px-3 py-1 rounded-full font-semibold">
            Beauty Services
          </span>
        </div>
        <button className="bg-[#2392a9] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1b6b83] transition">
          Explore Services
        </button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
