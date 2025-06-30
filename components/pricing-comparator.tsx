"use client"
import { useState } from "react";

const CheckSVG = ({ className = "w-4 h-4 mr-3 fill-emerald-500 shrink-0" }) => (
  <svg className={className} viewBox="0 0 12 12">
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
);

const plans = [
  {
    name: "Essential",
    price: { yearly: 29, monthly: 35 },
    description: "Perfect for getting started.",
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
    ],
    popular: false,
  },
  {
    name: "Perform",
    price: { yearly: 49, monthly: 55 },
    description: "Best for growing teams.",
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
      "Predefined chunks as necessary",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { yearly: 79, monthly: 85 },
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
      "Predefined chunks as necessary",
      "Free from repetition",
    ],
    popular: false,
  },
];

export default function PricingComparator() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 dark:bg-[oklch(0.147_0.004_49.25)] text-neutral-800 dark:text-neutral-200 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Simple, transparent pricing
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Choose the perfect plan
            <span className="block text-emerald-500">for your needs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no surprises. 
            Cancel anytime with our 30-day money-back guarantee.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckSVG className="w-4 h-4 fill-emerald-500" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSVG className="w-4 h-4 fill-emerald-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSVG className="w-4 h-4 fill-emerald-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
            <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
              <span
                className={`absolute inset-0 w-1/2 bg-[#54a295] rounded-full shadow-sm transform transition-transform duration-150 ease-in-out ${
                  isAnnual ? "translate-x-0" : "translate-x-full"
                }`}
              ></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                isAnnual ? "text-white" : "text-black dark:text-slate-400"
              }`}
              aria-pressed={isAnnual}
              onClick={() => setIsAnnual(true)}
            >
              Yearly <span className={isAnnual ? "text-indigo-200" : "text-slate-400 dark:text-slate-500"}>-20%</span>
            </button>
            <button
              className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                !isAnnual ? "text-white" : "text-slate-500 dark:text-slate-400"
              }`}
              aria-pressed={!isAnnual}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {plans.map((plan) => (
            <div key={plan.name} className="h-full">
              <div
                className={`relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5 ${
                  plan.popular ? "ring-2 ring-emerald-500" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 mr-6 -mt-4">
                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="mb-5">
                  <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">{plan.name}</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                    <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                      {isAnnual ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-slate-500 font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-slate-500 mb-5">{plan.description}</div>
                  <a
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-emerald-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                    href="#0"
                  >
                    Purchase Plan
                  </a>
                </div>
                <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckSVG />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
