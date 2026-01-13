import Hero from "@/components/hero/Hero";
import Methodology from "@/components/Methodology";
import ExpertProfiles from "@/components/ExpertProfiles";
import PopularCourses from "@/components/PopularCourses";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <Methodology />
      <PopularCourses />
      <ExpertProfiles />
      <Testimonials />
    </main>
  );
}
