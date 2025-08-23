import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";
import TrustImage from "@/assets/trustLogo.png"


const TrustData = [
  {
     id: 1,
     img: TrustImage,
  },
  {
     id: 2,
     img: TrustImage,
  },
  {
     id: 3,
     img: TrustImage,
  },
  {
     id: 4,
     img: TrustImage,
  },
  {
     id: 5,
     img: TrustImage,
  },
  {
     id: 6,
     img: TrustImage,
  },
]

export default function WAHTrustedCompany() {
  return (
    <section className=" pt-[40px] pb-[80px]">
        <Container>
            <div className="flex flex-col justify-center items-center">
              <CommonHeading text="Trusted By" />

              <div className="grid grid-cols-6 gap-20 items-center">
                {TrustData.map((item)=>(
                  <div key={item.id} className="w-full h-[36px]">
                    <img className="w-full h-full" src={item.img} alt="not found" />
                  </div>
                ))}
              </div>
            </div>
        </Container>
    </section>
  )
}
