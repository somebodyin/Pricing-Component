"use client";

import React, { useState } from 'react'
import clsx from 'clsx';
import { usePlanType } from '@/context/plan-type-context';



export default function PlanSelector() {
  const { planType, togglePlanType } = usePlanType();
    
  return (
    <>
        <div className="flex flex-row items-center mt-[2.2rem] font-bold text-[0.925rem] text-LightGrayishBlue">
            <p>Annually</p>
            <button 
              className={clsx("h-[2rem] w-[3.5rem] bg-customGradient rounded-full mx-[1.5rem] opacity-100 transition-all duration-300 relative", {
                "opacity-70": planType === "monthly",
              })}
              onClick={togglePlanType}
            >
              <div className={clsx("absolute w-[1.5rem] h-[1.5rem] top-0 my-[0.25rem] mx-[0.3rem] bg-white rounded-full transition-all duration-300", {
                "translate-x-[1.4rem]": planType === "monthly",
              })}></div>
            </button>
            <p>Monthly</p>
        </div>
    </>
  )
}
