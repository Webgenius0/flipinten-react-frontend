import Container from "@/components/common/Container";
import userLoveImage from "@/assets/userLoveImage.png";
import CommonHeading from "@/components/common/CommonHeading";
import AvatarGroup from "@/assets/AvatarGroup.png";
import CommonButton from "@/components/common/CommonButton";

export default function AboutUserLove() {
  return (
    <section className="py-[140px] bg-[#F6F6F6]">
      <Container>
        <div className="flex justify-between items-center mx-12">
          <div className="w-[548px] h-[442px]">
            <img
              className="w-full h-full object-cover"
              src={userLoveImage}
              alt="not found"
            />
          </div>
          <div className="flex flex-col gap-[33px]">
            <div className="max-w-[665px] flex flex-col gap-6">
              <div className="max-w-[383px]">
                <CommonHeading text="What Our User Love About Us" />
              </div>
              <p className="text-[#5B6477] text-[20px] leading-6">
                ‘’ I’ve been running my YouTube channel for over a year, and
                audio was always a struggle. I tried recording my own
                voiceovers, but it took forever and didn’t sound professional.
                Then I found this service – total game changer!’’ .
              </p>
            </div>

            <div className="flex flex-col gap-[70px]">
              <div className="flex gap-[45px]">
                <div className="w-[144px] h-[44px]">
                  <img
                    className="h-full w-full"
                    src={AvatarGroup}
                    alt="not found"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#262629] text-2xl font-medium leading-[18px]">
                    User Feedback
                  </h3>
                  <div className="flex gap-3 items-center">
                    <div className="w-[28px] h-[28px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M20.4864 24.5001C20.2998 24.5008 20.1158 24.4568 19.9498 24.3717L13.9998 21.2567L8.04975 24.3717C7.65558 24.579 7.17778 24.5438 6.81825 24.281C6.45873 24.0181 6.28019 23.5736 6.35809 23.1351L7.52475 16.5667L2.71809 11.9001C2.41249 11.5951 2.30028 11.1463 2.42642 10.7334C2.56437 10.3104 2.93091 10.0027 3.37142 9.94007L10.0214 8.97174L12.9498 2.98674C13.1447 2.58425 13.5525 2.32861 13.9998 2.32861C14.447 2.32861 14.8548 2.58425 15.0498 2.98674L18.0131 8.96007L24.6631 9.92841C25.1036 9.99102 25.4701 10.2987 25.6081 10.7217C25.7342 11.1346 25.622 11.5834 25.3164 11.8884L20.5098 16.5551L21.6764 23.1234C21.7615 23.57 21.5793 24.0253 21.2098 24.2901C20.9985 24.4381 20.7441 24.512 20.4864 24.5001Z"
                          fill="#FFC107"
                        />
                      </svg>
                    </div>
                    <div>
                        <h3 className="text-[#1C1D20] text-2xl font-medium leading-[18px]">4.9  <span className="text-[#5B6477] text-[18px] leading-[18px]">(18.6k Reviews)</span></h3>
                    </div>
                  </div>
                </div>
              </div>
              <CommonButton text="See more stories" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
