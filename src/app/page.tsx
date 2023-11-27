import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Faq } from "@/components/faq";
import { Places } from "@/components/places";

export default function Home() {
  return (
    <main>
      <Hero />
      <Places />
      <Faq />
    </main>
  )
}
