import { AppleCardsCarousel } from "@/components/AppleCardsCarousel";
// import { Auroraa } from "@/components/Auroraa";
// import { BackgroundCollision } from "@/components/BackgroundCollision";
// import { BackgroundGradientDemo } from "@/components/BackgroundGradient";
// import { BackgroundLinesDemo } from "@/components/BackgroundLines";
// import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
// import { ColourfulTextDemo } from "@/components/ColourfulTextDemo";
// import { CompareDemo } from "@/components/CompareDemo";
import { CoverDemo } from "@/components/CoverDemo";
// import FAQsTwo from "@/components/faqs-2";
import FeaturesCard from "@/components/features-11";
import Features from "@/components/features-12";
// import { FlipWordsDemo } from "@/components/FlipWordsDemo";
// import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import FooterSection from "@/components/footer";
// import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import HeroSection from "@/components/hero-section";
// import { HeroScrollDemo } from "@/components/HeroScrollDemo";
// import { HoverBorderGradientDemo } from "@/components/HoverBorderGradientDemo";
import IntegrationsSection from "@/components/integrations-7";


import LogoCloud from "@/components/logo-cloud";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
// import { PlaceholdersAndVanishInputDemo } from "@/components/PlaceholdersAndVanishInputDemo";
// import { PointerHighlightDemo } from "@/components/PointerHighlightDemo";
// import { SidebarDemo } from "@/components/SidebarDemo";
import StatsSection from "@/components/stats";
// import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo";
// import TestimonialSection from "@/components/Testimonial";

import WallOfLoveSection from "@/components/testimonials";
// import { TextGenerateEffectDemo } from "@/components/TextGenerateEffectDemo";
// import { TextHoverEffectDemo } from "@/components/TextHoverEffectDemo";

// import { ThreeDCard } from "@/components/ThreeDCard";
// import { ThreeDM } from "@/components/ThreeDM";
import { TimelineDemo } from "@/components/TimelineDemo";
// import { PinContainer } from "@/components/ui/3d-pin";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";







export default function Home() {
  return (
    <>
    
      <HeroSection />
      <MacbookScrollDemo />
      {/* <BackgroundLinesDemo/> */}
      {/* <AnimatedTestimonials/> */}
      {/* <Auroraa/> */}
      {/* <ThreeDCard/> */}
      {/* <ThreeDM/>   */}
      {/* <PinContainer> */}
        {/* <h1>Contact us</h1> */}
      {/* </PinContainer> */}
      <AppleCardsCarousel />
      {/* <BackgroundCollision/> */}
      {/* <BackgroundGradientDemo/> */}
      
      {/* <CanvasRevealEffectDemo/> --> hav to resolve the error */}

      <CardHoverEffectDemo/>
      {/* <ColourfulTextDemo/> */}
      {/* <CompareDemo/> */}
      <CoverDemo/>
      {/* <HeroScrollDemo/> */}
      {/* <FlipWordsDemo/> */}
      {/* <FloatingDockDemo/> */}
      {/* <GoogleGeminiEffectDemo/> */}
      {/* <HoverBorderGradientDemo/> */}
      {/* <MacbookScrollDemo/> */}
      {/* <PlaceholdersAndVanishInputDemo/> */}
      {/* <PointerHighlightDemo/> */}
      {/* <SidebarDemo/> */}
      {/* <SVGMaskEffectDemo/> */}
      {/* <TextGenerateEffectDemo/> */}
      {/* <TextHoverEffectDemo/> */}
      <TimelineDemo/>
      


      
    

      

      <LogoCloud />
      <Features />
      <FeaturesCard />
      <StatsSection />
      <IntegrationsSection />
      <WallOfLoveSection />
      {/* <FAQsTwo /> */}
      <FooterSection />
    </>
  );
}
