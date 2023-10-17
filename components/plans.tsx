"use client";

import React from 'react'
import Plan from './plan'
import { plans } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Plans() {
  return (
    <motion.div 
      className="flex flex-col gap-8 mb-20 items-center pt-[4rem] lg:flex-row lg:gap-0 lg:mb-0 drop-shadow-purple"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          type: "tween",
          duration: 0.2
      }}
    >
        {
            plans.map((plan, index) => (
                <React.Fragment key={index}>
                    <Plan {...plan}/>
                </React.Fragment>
            ))
        }
    </motion.div>
  )
}
