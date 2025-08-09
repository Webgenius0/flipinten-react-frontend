import Container from "@/components/common/Container";
import CommonHeading from "@/components/common/CommonHeading";


const WorkData = [
    {
        id: 0,
        numbering: '01',
        heading: 'Choose a Plan',
        paragraph: 'Select a plan that fits your needs: Monthly, Yearly, or Lifetime.'
    },
    {
        id: 1,
        numbering: '02',
        heading: 'Upload Your Content',
        paragraph: 'Select a plan that fits your needs: Monthly, Yearly, or Lifetime.'
    },
    {
        id: 2,
        numbering: '03',
        heading: 'Review & Publish',
        paragraph: 'Select a plan that fits your needs: Monthly, Yearly, or Lifetime.'
    },
    {
        id: 3,
        numbering: '04',
        heading: 'Creating',
        paragraph: 'Select a plan that fits your needs: Monthly, Yearly, or Lifetime.'
    },
    {
        id: 4,
        numbering: '05',
        heading: 'Payment and Billing Details',
        paragraph: 'Select a plan that fits your needs: Monthly, Yearly, or Lifetime.'
    },
    {
        id: 5,
        numbering: '06',
        heading: 'Activation',
        paragraph: 'Select a plan that fits your needs: Monthly, Yearly, or Lifetime.'
    },
]


export default function YTCHowItWorks() {
  return (
    <section className="py-[130px] bg-[#F6F6F6]">
        <Container>
            <div className="flex flex-col items-center">
                <CommonHeading text="How does it work" />

                <div className="mt-20 grid grid-cols-3 gap-[80px]">
                    {WorkData.map((items)=>(
                        <div key={items.id} className="flex gap-8 items-start">
                            <div className="h-[42px] w-[42px] bg-[#E52621] rounded-full flex justify-center items-center shadow-customTwo">
                                <span className="text-white font-medium leading-[26px]">{items.numbering}</span>
                            </div>
                            <div className="max-w-[236px] flex flex-col gap-6">
                                <h3 className="text-[#000] text-2xl font-semibold">{items.heading}</h3>
                                <p className="text-[#5B6477] text-[16px] leading-6">{items.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
  )
}
