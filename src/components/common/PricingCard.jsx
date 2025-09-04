import toast from "react-hot-toast";

export default function PricingCard({ plan, isDash, formOpen, setFormOpen }) {
  return (
    <div className="w-full flex flex-col justify-between gap-8 rounded-3xl bg-white customHoverEffect pb-6">
      {/* Details */}
      <div className="space-y-8">
        <div className="w-full h-[124px] flex flex-col items-center justify-center gap-2.5 bg-primary-green text-center">
          <h3 className="text-white text-2xl font-semibold">{plan?.title}</h3>

          <h4 className="text-white text-3xl font-semibold">{plan?.price}</h4>
        </div>

        <ul className=" flex flex-col px-6">
          {plan?.features?.map((feature, index) => (
            <li
              key={index}
              className="text-center border-b py-6 last:border-b-0"
            >
              <h3 className="text-center text-black text-lg font-semibold">
                {feature}
              </h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Get Started Button */}
      {!plan?.notAnItem && (
        <div className="w-full max-w-80/100 mx-auto">
          {isDash ? (
            <button
              onClick={() => setFormOpen(!formOpen)}
              className="py-4 w-full flex justify-center rounded-[30px] border border-transparent text-white text-lg font-semibold leading-[30px] ease-in-out bg-[#E52621] hover:text-primary-green hover:bg-white hover:border-primary-green cursor-pointer duration-300"
            >
              Get Started
            </button>
          ) : (
            <button
              onClick={() => toast("Feature coming soon")}
              className="py-4 w-full flex justify-center rounded-[30px] border border-transparent text-white text-lg font-semibold leading-[30px] ease-in-out bg-[#E52621] hover:text-primary-green hover:bg-white hover:border-primary-green cursor-pointer duration-300"
            >
              Get Started
            </button>
          )}
        </div>
      )}
    </div>
  );
}
