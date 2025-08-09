import Container from "@/components/common/Container";
import AboutHero from "@/assets/aboutHeroSection.png";
import CommonHeading from "@/components/common/CommonHeading";
import CommonSubHeading from "@/components/common/CommonSubHeading";
import CommonButton from "@/components/common/CommonButton";


export default function AboutHeroSection() {
  return (
    <section className="py-[120px]">
      <Container>
        <div className="flex items-center justify-between mx-12">
          <div>
            <div className="flex flex-col gap-2 items-start">
              <CommonHeading text="About us" />
              <CommonSubHeading text="Building a Better Future with Technology." />
            </div>

            <div className="mt-6 max-w-[665px] flex flex-col gap-[48px]">
              <p className="text-[#5B6477] text-[14px] leading-6">
                We help YouTubers, content creators, and businesses bring their
                videos to life with high-quality, professional voiceovers.
                Whether you’re making tutorials, vlogs, ads, or explainer videos
                – we’ve got the voice that fits your style. We help creators and
                businesses deliver professional voiceovers for powerful,
                engaging videos
              </p>

              <CommonButton text="Get in Touch" />
            </div>
          </div>
          <div className="max-w-[543px] h-[410px]">
            <img
              className="w-full h-full object-cover"
              src={AboutHero}
              alt="not found"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
