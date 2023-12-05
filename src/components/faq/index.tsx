import { Container } from "../Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaqAccordion } from "./FaqAccordion";
import { faqsData } from "@/dataStore/faqsData";
  

export const Faq = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
        <Container className="flex w-full h-full justify-center">
            <div className="items-center space-y-5 w-7/12">
                <div className="text-center md:space-y-3 space-y-1">
                    <h1 className="lg:text-5xl text-3xl font-bold text-gray-700 tracking-wider"
                    > Frequently Asked Quetions? </h1>
                    <p className="md:text-lg text-gray-600"
                    > Trust us we have got you back this is how we do </p>
                </div>

                <div className="space-y-1">
                  { faqsData.map((data, index) => (
                    <div key={index}
                    >
                      <FaqAccordion title={data.title} />
                    </div>
                  ))}
                </div>
            </div>
        </Container>
    </section>
  )
}