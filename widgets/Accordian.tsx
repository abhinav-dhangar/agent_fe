import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionData } from "@/data/accordianData"

export function Accordian() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            {accordionData.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger  className="myron text-2xl font-semibold ">{item.trigger}</AccordionTrigger>
                    <AccordionContent className="flex flex-col text-xl gap-4 text-balance geist ">
                        {item.content.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
