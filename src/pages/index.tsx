import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


const VehiclesGrid = dynamic(() => import("@/components/VehiclesGrid"));
const RegulatoryInfo = dynamic(() => import("@/components/RegulatoryInfo"));
const BusinessGrowth = dynamic(() => import("@/components/BusinessGrowth"));
const CarFinancingSection = dynamic(() => import("@/components/CarFinancing"));
const DealerManagementSystem = dynamic(() => import("@/components/DealerShipManagement"));
const CardGrid = dynamic(() => import("@/components/CardGrid"));
const TestimonialCarousel = dynamic(() => import("@/components/Testimonial"));
const StayConnected = dynamic(() => import("@/components/StayConnected"));
const FaqSection = dynamic(() => import("@/components/Faq"));
const GetStartedSection = dynamic(() => import("@/components/GetStartedScreen"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VehiclesGrid />
        <RegulatoryInfo />
        <BusinessGrowth />
        <CarFinancingSection />
        <DealerManagementSystem />
        <CardGrid />
        <TestimonialCarousel />
        <StayConnected />
        <FaqSection />
        <GetStartedSection />
      </main>
      <Footer />
    </>
  );
}
