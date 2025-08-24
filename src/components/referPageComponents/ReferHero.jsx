import Container from "@/components/common/Container";
import ReferHeroImage from "@/assets/refer-hero-image.png";
import CommonButton from "../common/CommonButton";

export default function ReferHero() {
  return (
    <section className="py-[100px]">
      <Container>
        <div className="flex justify-between items-center mx-12">
          <div className="max-w-[623px]">
            <h2 className="text-[#1C1D20] text-[36px] font-semibold leading-[54px]">
              Refer & Earn Unlimited Rewards!
            </h2>
            <p className="text-[#1C1D20] text-[20px] leading-[30px] mt-6">
              Invite your friends to join YTstart and earn cash, credits, or
              free subscriptions when they sign up.
            </p>
            <div className="mt-12">
              <CommonButton text="Get Referral Link" />
            </div>
          </div>
          <div className="w-[604px] h-[340px] rounded-2xl overflow-hidden">
            <img
              src={ReferHeroImage}
              alt="not found"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
