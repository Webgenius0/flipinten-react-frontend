import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import CommonButton from "@/components/common/CommonButton";


export default function YTCPlanBanner() {
  return (
    <section className="py-[120px]">
        <Container>
            <div className="max-w-[644px] mx-auto text-center flex flex-col items-center gap-[32px]">
                <div className="flex flex-col gap-4">
                    <CommonHeading text="Choose the Perfect Plan for Your Channel" />
                    <CommonSubHeading text="Flexible plans to grow your YouTube presence" />
                </div>
                <CommonButton text="Get Started" />
            </div>
        </Container>
    </section>
  )
}
