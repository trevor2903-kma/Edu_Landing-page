import Hero from "@/components/hero/Hero";
import Methodology from "@/components/methodology/Methodology";
import ExpertProfiles from "@/components/experts-profile/ExpertProfiles";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Methodology />
      <ExpertProfiles />
      <PopularCourses />
      <Testimonials />
    </main>
  );
}
