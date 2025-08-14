import CommonHeading from "../common/CommonHeading";
import Container from "../common/Container";
import Map from "../common/Map";
import CallIcon from "../icons/CallIcon";
import EmailIcon from "../icons/EmailIcon";
import LocationIcon from "../icons/LocationIcon";

const LocationData = [
  {
    id: 0,
    Icon: <CallIcon />,
    headText: "Call",
    number: "084524145547",
  },
  {
    id: 1,
    Icon: <EmailIcon />,
    headText: "Email",
    number: "arshakir132@gmail.com",
  },
  {
    id: 2,
    Icon: <LocationIcon />,
    headText: "Location",
    number: "Texas, USA@gmail.com",
  },
];

export default function ContactSendMassage() {
  return (
    <section className="py-[120px]">
      <Container>
        <div className="flex justify-center items-center">
          <CommonHeading text="Send Us a Message" />
        </div>

        <div className="mt-[48px] grid grid-cols-2 gap-[50px] justify-between">
          <div className="max-w-[736px] max-h-[481px] overflow-hidden">
            <Map />
          </div>

          <div className="max-w-[533px]">
            <form className="flex flex-col gap-[30px]">
              <div className="w-[533px] rounded-[20px] border py-4 px-[24px] bg-[#F6F6F6]">
                <input
                  className="w-full h-full outline-none"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-[533px] rounded-[20px] border py-4 px-[24px] bg-[#F6F6F6]">
                <input
                  className="w-full h-full outline-none"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="h-[150px] w-[533px] rounded-[20px] overflow-hidden">
                <textarea
                  className="h-full w-full rounded-[20px] border py-4 px-[24px] bg-[#F6F6F6] resize-none"
                  name=""
                  id=""
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mt-[30px]">
                <button className="py-[20px] w-full bg-[#E52621] rounded-[20px] text-white text-2xl font-medium">
                  Send now
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-[60px] flex gap-10 items-center justify-center">
          {LocationData.map((data) => (
            <div className="flex gap-4 items-center">
              <div className="w-[42px] h-[42px]">{data.Icon}</div>
              <div className="flex flex-col">
                <h3 className="text-[#202020] text-2xl font-medium">
                  {data.headText}
                </h3>
                <p className="text-[#615E5B] text-[18px]">{data.number}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
