import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProductShowcase } from "@/components/product-showcase";
import { Features } from "@/components/features";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProductShowcase />
      <Features />
      <Contact />
    </div>
  );
}
