// In your parent component

import { AnimatedTestimonials } from "./ui/animated-testimonials";


const TESTIMONIALS = [
  {
    quote: "This product changed my life! The seamless integration and intuitive design make it a joy to use every day.",
    name: "Alex Johnson",
    designation: "Product Designer, TechCorp",
    src: "/images/testimonials/1.jpg"  // Replace with actual image paths
  },
  {
    quote: "Incredible performance boost for our team. We've seen a 40% increase in productivity since implementation.",
    name: "Sarah Williams",
    designation: "CTO, Startup Labs",
    src: "/images/testimonials/2.jpg"
  },
  {
    quote: "The support team is exceptional. They resolved our complex integration issues within 24 hours.",
    name: "Michael Chen",
    designation: "Engineering Lead, DataSystems",
    src: "/images/testimonials/3.jpg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-neutral-900">
      <AnimatedTestimonials 
        testimonials={TESTIMONIALS} 
        autoplay={true} 
      />
    </section>
  );
}