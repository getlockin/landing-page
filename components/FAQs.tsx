import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqsData = [
  {
    question: "What is Dcluttr.ai?",
    answer:
      "Dcluttr.ai is your AI-powered sidekick that helps teams cut through noise, streamline workflows, and focus only on what matters.",
    // defaultOpen: true, // This property is not directly used by Shadcn AccordionItem, use Accordion's defaultValue
  },
  {
    question: "How does Dcluttr.ai work?",
    answer: "(Placeholder answer: Dcluttr.ai analyzes your communication channels...)",
  },
  {
    question: "Is my data secure with Dcluttr.ai?",
    answer: "(Placeholder answer: Yes, we prioritize data security using industry-standard encryption...)",
  },
  {
    question: "Can I customise what Dcluttr surfaces?",
    answer: "(Placeholder answer: Absolutely, Dcluttr.ai offers customization options...)",
  },
  {
    question: "What tools does Dcluttr.ai integrate with?",
    answer: "(Placeholder answer: Dcluttr.ai integrates with popular tools like Slack, Jira, Notion...)",
  },
];

export default function FAQs() {
  return (
    <div className="flex flex-col w-full items-center gap-[72px] pt-[100px] pb-[120px] px-4 md:px-[406px]">
      <h2 className="self-stretch font-medium text-center leading-[56px] text-white text-5xl tracking-[-1.92px]">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {faqsData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="mb-3 bg-[#181818] rounded-xl overflow-hidden border-none"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline">
              <span className="text-left font-medium text-[#fcfcfc] text-base tracking-[-0.16px] leading-6">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5">
              <p className="opacity-80 font-medium text-[#e8e6e9] text-base tracking-[0] leading-[22.4px]">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}