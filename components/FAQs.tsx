import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqsData = [
  {
    question: "What is Lockin and how does it work?",
    answer:
      "Lockin is a commitment platform that lets you set personal goals, stake money on your success, and compete with others. If you complete your goal, you get your money back (and sometimes more). If not, your stake is forfeited. It’s built on blockchain for transparency and fairness.",
    // defaultOpen: true, // This property is not directly used by Shadcn AccordionItem, use Accordion's defaultValue
  },
  {
    question: " Why do I need to stake money on my goals?",
    answer: "Staking money makes your commitment real. You’re more likely to follow through when something is on the line. It creates skin in the game and boosts accountability, which is proven to improve goal success rates.",
  },
  {
    question: "Is Lockin free to use?",
    answer: "Yes, Lockin is free to join and use. You only need to stake your own money when joining a challenge. There may be a small transaction or network fee due to blockchain processing.",
  },
  {
    question: "Is Lockin built on a real blockchain?",
    answer: "Yes, Lockin is built on the Solana blockchain, which means fast transactions, low fees, and full transparency. All stakes and outcomes are verifiable on-chain.",
  },
  {
    question: "What kind of goals can I commit to?",
    answer: "You can commit to anything — daily habits, fitness goals, learning targets, etc. Soon we’ll also support community challenges, where multiple users join the same goal and compete or collaborate.",
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