import { Sora } from "next/font/google";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Partners from "@/components/sections/Partners";


const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className={sora.className}>
      <Header />
      <Hero />
      <About />
      <Features />
      <Partners />
    </div>
  );
}
