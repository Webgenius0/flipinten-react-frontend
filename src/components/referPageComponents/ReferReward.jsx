import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";

export default function ReferReward() {
  return (
    <section className="py-[120px]">
      <Container>
        <div
          style={{
            background:
              "linear-gradient(87deg, #E52621 0.51%, #CB221D 15%, #A71C18 73.41%, #7F1512 97.71%)",
          }}
          className="rounded-3xl py-20 px-[200px] text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            How to get your RS 250 referral reward
          </h3>

          <p className="text-lg text-red-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            A business you work with has invited you to join YTstart and enjoy
            the same freedom they have, to work and grow globally. That includes
            lower fees and fast payments when you do business together on the
            YTstart network, with an all-in-one platform that takes the friction
            out of operating across borders.
          </p>

          <Link
            to={"#"}
            className="bg-white text-red-600 font-semibold px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </Container>
    </section>
  );
}
