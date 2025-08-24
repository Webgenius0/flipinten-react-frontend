import React from "react";
import { Users, UserPlus, Gift, TrendingUp } from "lucide-react";
import Container from "../common/Container";
import CommonHeading from "../common/CommonHeading";

const ReferHowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Invite Friends",
      description:
        "Get your unique referral link to share with friends.Get your unique referral link to share with friends.",
      icon: Users,
      color: "from-red-500 to-pink-500",
    },
    {
      number: "2",
      title: "Friend Joins",
      description:
        "Get your unique referral link to share with friends.Get your unique referral link to share with friends.",
      icon: UserPlus,
      color: "from-red-500 to-pink-500",
    },
    {
      number: "3",
      title: "Earn Rewards",
      description:
        "Get your unique referral link to share with friends.Get your unique referral link to share with friends.",
      icon: Gift,
      color: "from-red-500 to-pink-500",
    },
    {
      number: "4",
      title: "Unlimited Earnings",
      description:
        "Get your unique referral link to share with friends.Get your unique referral link to share with friends.",
      icon: TrendingUp,
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="bg-[#F6F6F6] py-16 px-4 sm:px-6 lg:px-8">
      <Container>
        {/* Header */}
        <div className="flex justify-center items-center mb-16">
          <CommonHeading text="How it Works here" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps?.map((step, index) => {
            return (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-2 border-primary-red">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#FDEEEE] text-primary-red rounded-xl flex items-center justify-center font-bold text-lg">
                      {step?.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step?.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ReferHowItWorks;
