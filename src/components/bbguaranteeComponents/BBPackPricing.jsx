import React from "react";
import Container from "../common/Container";
import CheckmarkIcon from "../SVG/CheckmarkIcon";
import CommonHeading from "../common/CommonHeading";

const BBPackPricing = () => {
  const plans = [
    {
      plan: "Lifetime Basic",
      price: "$5,000",
      metrics: "Lifetime Basic",
    },
    {
      plan: "Premium",
      price: "$10,000",
      metrics: "5K Subs + 20K Hours",
    },
  ];

  return (
    <section className="w-full py-[120px] bg-white">
      <Container>
        <div className="w-full">
          {/* Title */}
          <div className="flex justify-center items-center">
            <CommonHeading text="Buy Back Pricing" />
          </div>

          {/* Table */}
          <div className="overflow-x-auto mt-12">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="">
                <tr className="bg-green-600 text-white text-center">
                  <th className="py-3 px-4 font-medium text-center">
                    Plan Type
                  </th>
                  <th className="py-3 px-4 text-center font-medium">
                    Buy Back Price (After 24 Months)
                  </th>
                  <th className="py-3 px-4 text-center font-medium">
                    Qualifying Metrics
                  </th>
                </tr>
              </thead>

              <tbody>
                {plans?.map((plan, index) => (
                  <tr key={index} className="transition border-b">
                    <td className="py-4 px-4 text-center">{plan?.plan}</td>
                    <td className="py-4 px-4 text-center border-x-1">
                      {plan?.price}
                    </td>
                    <td className="py-4 px-4 text-center flex items-center justify-center gap-2">
                      <div className="w-5 h-5">
                        <CheckmarkIcon />
                      </div>
                      {plan?.metrics}
                    </td>
                  </tr>
                ))}

                {/* Fixed footer row */}
                <tr>
                  <td
                    colSpan="3"
                    className="py-5 px-4 text-center text-gray-500 text-sm"
                  >
                    Prices adjust based on channel performance. See Terms.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BBPackPricing;
