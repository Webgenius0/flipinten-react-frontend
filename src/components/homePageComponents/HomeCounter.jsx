import Container from "@/components/common/Container";
import CountUp from "react-countup";

export default function HomeCounter() {
  const countData = [
    {
      id: 0,
      heading: 45,
      text: "Leave a lasting impact with your content",
    },
    {
      id: 1,
      heading: 60,
      text: "Leave a lasting impact with your content",
    },
    {
      id: 2,
      heading: 400,
      text: "Leave a lasting impact with your content",
    },
    {
      id: 3,
      heading: 390,
      text: "Leave a lasting impact with your content",
    },
  ];

  return (
    <section className="py-[36px] bg-[#F6F6F6] my-[100px]">
      <Container>
        {/* <CountUp end={100} duration={5} /> */}
        <div className="grid grid-cols-4 items-center">
          {countData.map((item, index) => {
            const isLast = index === countData.length - 1;

            return (
              <div
                key={item.id}
                className={`text-center w-max relative ${
                  isLast
                    ? ""
                    : "after:absolute after:content-[''] after:w-[1px] after:h-[93px] after:bg-[#6A7283] after:right-[-40px] after:top-0"
                }`}
              >
                <h3 className="text-[#262629] text-5xl font-semibold">
                  <CountUp end={item.heading} duration={5} />
                </h3>
                <p className="mt-2 max-w-[280px] text-[16px] text-[#262629] leading-6">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
