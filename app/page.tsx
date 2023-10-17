"use client";

import PlanSelector from "@/components/plan-selector";
import Plans from "@/components/plans";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center lg:justify-center">
      <motion.div
        initial={{ y: -200, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="mt-[4rem] text-[2rem] font-bold lg:-mt-[2.45rem]">
          Our Pricing
        </h1>
        <PlanSelector />
      </motion.div>

      <Plans />
    </main>
  )
}
