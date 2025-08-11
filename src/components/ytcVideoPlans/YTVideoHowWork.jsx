import Container from "@/components/common/Container";
import CommonHeading from "../common/CommonHeading";
import ChoosePlanIcon from "../icons/ChoosePlanIcon";
import UploadContentIcon from "../icons/UploadContentIcon";
import ReviewIcon from "../icons/ReviewIcon";
import PublishIcon from "../icons/PublishIcon";



const HowItWorksData = [
  {
    id: 0,
    icon: <ChoosePlanIcon/>,
    heading: 'Choose a Plan',
    subHeading: 'Pick the video plan that fits your needs (Standard, Custom, or Shorts).'
  },
  {
    id: 1,
    icon: <UploadContentIcon/>,
    heading: 'Choose a Plan',
    subHeading: 'Share your script, footage, or idea.'
  },
  {
    id: 2,
    icon: <ReviewIcon/>,
    heading: 'Review & Approve',
    subHeading: 'We send you the edited video to review and approve. '
  },
  {
    id: 3,
    icon: <PublishIcon/>,
    heading: 'Publish',
    subHeading: ' Your final video is ready to upload and share on YouTube. '
  },
]

export default function YTVideoHowWork() {
  return (
    <section className="py-[120px] bg-[#F6F6F6]">
      <Container>
        <div className="text-center">
          <CommonHeading text="How does it work" />
        </div>

        <div className="mt-[64px] grid grid-cols-4">
          {HowItWorksData.map((item)=>(
            <div key={item.id} className="max-w-max flex flex-col items-center">
              <div className="py-[10px] px-[12px] bg-[#E52621] rounded-[8px] w-max">{item.icon}</div>
              <div className="max-w-[326px] mt-[33px] flex flex-col gap-3">
                <h3 className="text-[#000] text-center text-2xl font-semibold leading-[28px]">{item.heading}</h3>
                <p className="text-[#5B6477] text-center text-[16px] leading-6">{item.subHeading}</p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
