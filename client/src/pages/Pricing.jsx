import { plans, assets } from "../assets/assets";

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-5">
      <h1 className="mt-5 font-bold text-3xl bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text">
        Our Pricing List
      </h1>

      <p className="text-lg text-gray-500 px-3 py-1 border border-gray-500 rounded-full">Find the right plan with the features that fits you better.</p>

      <div className="flex flex-wrap justify-center text-left gap-8 my-10">
        {
          plans.map((plan, index) => {
            return (
              <div key={index} className="bg-white py-4 px-5 rounded-lg drop-shadow-md hover:-translate-y-1 transition-all duration-300">
                <img src={assets.logo} alt={assets.logo} width={40} />
                <p className="font-semibold mt-3">{plan.id}</p>
                <p className="text-gray-500 text-sm">{plan.desc}</p>
                <p className="mt-6 mb-8">
                  <span className="font-bold text-2xl">{plan.price}$</span> per {plan.credits}
                </p>

                <button className="w-full bg-indigo-500 text-white py-1 text-center rounded-md min-w-52">Get Started</button>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
