import CommonHeading from "@/components/common/CommonHeading";
import Container from "@/components/common/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PiPlusCircleLight } from "react-icons/pi";
import { PiMinusCircleFill } from "react-icons/pi";

const items = [
  {
    title: "1. How does TruckLink match shippers with truckers?",
    content:
      "Our AI-powered algorithm considers factors like location, cargo size, timing, and trucker availability to instantly match shippers with the most suitable truckers, ensuring efficiency and reduced delivery times.",
  },
  {
    title: "2. Is it free to sign up and use the platform?",
    content:
      "Our AI-powered algorithm considers factors like location, cargo size, timing, and trucker availability to instantly match shippers with the most suitable truckers, ensuring efficiency and reduced delivery times.",
  },
  {
    title: "3. Is it free to sign up and use the platform?",
    content:
      "You can contact our support team anytime by emailing support@learnva.com or by filling out the contact form on our website. We're here to help with any questions or issues you may have.",
  },
  {
    title: "4.  Is it free to sign up and use the platform?",
    content:
      "Our 24/7 driver support team is always available via in-app chat or phone to help you resolve problems immediately.",
  },
  {
    title: "5.  Is it free to sign up and use the platform?",
    content:
      "Our 24/7 driver support team is always available via in-app chat or phone to help you resolve problems immediately.",
  },
  {
    title: "6. How does TruckLink match shippers with truckers?",
    content:
      "Our AI-powered algorithm considers factors like location, cargo size, timing, and trucker availability to instantly match shippers with the most suitable truckers, ensuring efficiency and reduced delivery times.",
  },
  {
    title: "7. Is it free to sign up and use the platform?",
    content:
      "Our AI-powered algorithm considers factors like location, cargo size, timing, and trucker availability to instantly match shippers with the most suitable truckers, ensuring efficiency and reduced delivery times.",
  },
  {
    title: "8. Is it free to sign up and use the platform?",
    content:
      "You can contact our support team anytime by emailing support@learnva.com or by filling out the contact form on our website. We're here to help with any questions or issues you may have.",
  },
  {
    title: "9.  Is it free to sign up and use the platform?",
    content:
      "Our 24/7 driver support team is always available via in-app chat or phone to help you resolve problems immediately.",
  },
  {
    title: "10.  Is it free to sign up and use the platform?",
    content:
      "Our 24/7 driver support team is always available via in-app chat or phone to help you resolve problems immediately.",
  },
  {
    title: "11.  Is it free to sign up and use the platform?",
    content:
      "Our 24/7 driver support team is always available via in-app chat or phone to help you resolve problems immediately.",
  },
  {
    title: "12.  Is it free to sign up and use the platform?",
    content:
      "Our 24/7 driver support team is always available via in-app chat or phone to help you resolve problems immediately.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="py-[140px] bg-[#F6F6F6]">
      <Container>
        <div className="text-center flex flex-col justify-center items-center gap-6">
          <CommonHeading text="Frequently Ask Questions" />
          <p className="text-[#6A7283] text-[18px] leading-[27px]">
            See how has transformed logistics operations for our users
          </p>
        </div>

        <div className="mt-[48px]">
          <div className="mt-[60px]">
            <Accordion
              type="single"
              collapsible
              className="space-y-6 grid grid-cols-2 gap-x-10 items-center"
            >
              {items.map(({ title, content }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none rounded-md data-[state=open]:bg-[#ED7A3A] px-[60px] custombgTwos"
                >
                  <AccordionPrimitive.Header className="flex w-full">
                    <AccordionPrimitive.Trigger className="flex w-full items-start justify-between py-4 font-medium transition-all  text-xl text-start group">
                      <div className="w-[90%] text-[#1C1D20] text-[20px] leading-[30px] font-medium group-data-[state=open]:text-[#1C1D20]">
                        {title}
                      </div>
                      <div className="relative h-8 w-8">
                        <PiPlusCircleLight
                          size={32}
                          className="absolute transition-all duration-200 group-data-[state=open]:opacity-0 group-data-[state=open]:scale-50 right-0"
                        />
                        <PiMinusCircleFill
                          size={32}
                          className="absolute text-white transition-all duration-200 opacity-0 scale-50 group-data-[state=open]:opacity-100 group-data-[state=open]:scale-100 right-0"
                        />
                      </div>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent>
                    <p className="text-[18px] leading-[27px] text-[#6A7283] font-normal">
                      {content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
