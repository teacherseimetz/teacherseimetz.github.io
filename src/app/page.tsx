import { About } from "../components/About";
import { Classes } from "../components/Classes";
import { ClassPreview } from "../components/ClassPreview";
import { Consulting } from "../components/Consulting";
import { Events } from "../components/Events";
import { Faq } from "../components/Faq";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Teachers } from "../components/Teachers";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <HowItWorks />
      <ClassPreview />
      <Teachers />
      <Faq />
      <Consulting />
      <Events />
    </main>
  );
}
