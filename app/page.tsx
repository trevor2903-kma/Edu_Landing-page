import Hero from "@/components/HomePage/hero/Hero";
import Methodology from "@/components/HomePage/methodology/Methodology";
import ExpertProfiles from "@/components/HomePage/experts-profile/ExpertProfiles";
import PopularCourses from "@/components/HomePage/popular-courses/PopularCourses";
import Testimonials from "@/components/HomePage/Testimonials";

export default function HomePage() {
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
