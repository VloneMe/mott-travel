import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

interface Props {
  title?: string;
}
  

export const FaqAccordion = (
  { title }: Props
) => {
  return (
    <Accordion  type="single" 
                collapsible
                className=''
    >
        <AccordionItem value="item-1"
                        className='min-w-4xl'
        >
            <AccordionTrigger className='text-lg'
            > { title }</AccordionTrigger>

            <AccordionContent className='text-lg text-gray-600'
            >
            Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}
