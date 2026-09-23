import { Hero } from "@/app/components/home/Hero";
import { TrustStrip } from "@/app/components/home/TrustStrip";
import { Services } from "@/app/components/home/Services";
import { Positioning } from "@/app/components/home/Positioning";
import { HowItWorks } from "@/app/components/home/HowItWorks";
import { ConversionCTA } from "@/app/components/home/ConversionCTA";
import { TrustArchitecture } from "@/app/components/home/TrustArchitecture";
import { Founder } from "@/app/components/home/Founder";
import { VerifiedConcierge } from "@/app/components/home/VerifiedConcierge";
import { Locations } from "@/app/components/home/Locations";
import { WhoFor } from "@/app/components/home/WhoFor";
import { Privacy } from "@/app/components/home/Privacy";
import { FinalCTA } from "@/app/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Positioning />
      <HowItWorks />
      <ConversionCTA />
      <TrustArchitecture />
      <Founder />
      <VerifiedConcierge />
      <Locations />
      <WhoFor />
      <Privacy />
      <FinalCTA />
    </>
  );
}
