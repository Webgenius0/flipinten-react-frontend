import Container from "@/components/common/Container";


export default function WeAreHiringBanner() {
  return (
    <section className="py-[80px]">
        <Container>
            <div className="p-12 customBackGroundsWAH">
                <div className="text-center max-w-[550px] mx-auto">
                    <h2 className="text-[#FFF] text-[40px] font-semibold leading-[60px]">Drop Resume & Get Your Desire Job</h2>
                    <p className="text-center text-[#FFF] text-base font-medium leading-normal mt-[36px]">Join Our Creative Team!</p>
                </div>
                <div className="p-3 bg-white w-full mt-8 rounded-[12px]"></div>
                <p className="text-center text-[#FFF] text-base font-medium leading-normal mt-[36px]">Help us build amazing YouTube videos. Explore exciting roles.</p>
            </div>
        </Container>
    </section>
  )
}
