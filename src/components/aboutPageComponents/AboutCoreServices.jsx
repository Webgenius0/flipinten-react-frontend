import Container from "@/components/common/Container";
import CommonHeading from "../common/CommonHeading";
import CoreImageOne from "@/assets/coreServiceImageOne.png";
import CoreImageTwo from "@/assets/coreServiceImageTwo.png";
import CoreImageThree from "@/assets/coreServiceImageThree.png";
import CoreImageFour from "@/assets/coreServiceImageFour.png";
import CommonButton from "../common/CommonButton";

const ImagesData = [
    {
        id: 0,
        image: CoreImageOne,
    },
    {
        id: 1,
        image: CoreImageTwo,
    },
    {
        id: 2,
        image: CoreImageThree,
    },
    {
        id: 3,
        image: CoreImageFour,
    }
]


export default function AboutCoreServices() {
  return (
    <section className="py-[140px]">
        <Container>
            <div className="flex gap-[72px] items-center mx-12">
                <div className="flex flex-col items-start gap-10">
                    <div className="flex flex-col items-start justify-baseline text-start gap-4 max-w-[734px]">
                        <CommonHeading text="About our Core Services" />
                        <div>
                            <p className="text-[#5B6477] text-[20px] leading-[30px]">"We provide everything YouTubers need to create professional, engaging, and high-performing videos. Our services include voiceovers in multiple languages, expert video editing, YouTube SEO optimization, subtitles and translations, and optional channel management. From script to screen, we help you grow your audience, boost views, and make your content stand out."</p> 
                        </div>
                    </div>
                    <CommonButton text="Explore our services" />
                </div>

                <div className="w-[513px] h-[568px] flex flex-wrap items-end gap-[19px]">
                    {ImagesData.map((item,index)=>(
                        <div key={item.id} className={`${index === 0 ? 'customLayOutOne' : index === 1 ? "customLayOutTwo" : index === 2 ? "customLayOutThree" : index === 3 ? "customLayOutFour" : '' } overflow-hidden`}>
                            <img className="h-full w-full object-cover" src={item.image} alt="not found" />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
  )
}
