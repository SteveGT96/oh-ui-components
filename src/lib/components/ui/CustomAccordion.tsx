import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CustomAccordionProps } from "./type";

export function CustomAccordion(props: CustomAccordionProps) {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible={props.collapsible}
      className="max-w-lg"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {props.content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
