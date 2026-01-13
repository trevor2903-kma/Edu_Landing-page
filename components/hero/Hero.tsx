import Link from "next/link";
import HeroContent from "./HeroContent";
import HeroBanner from "./HeroBanner";
import PartnersSection from "../partners/PartnersSection";
import CourseBanner from "../course/CourseBanner";
import { BackGroundGrid } from "../course/BackGroundGrid";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Top Section: Content */}
      <HeroContent />

      {/* Bottom Section: Banner */}
      <HeroBanner />

      {/* Bottom Sections */}
      <div className="relative w-full">
        <PartnersSection />
        <CourseBanner />
      </div>
    </div>
  );
}
