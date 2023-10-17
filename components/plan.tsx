"use client";

import React from 'react'
import PropDivider from './prop-divider'
import { plans } from '@/lib/data'
import clsx from 'clsx';
import { usePlanType } from '@/context/plan-type-context';

type PlanProps = (typeof plans)[number];

export default function Plan({
	name,
	active,
	price,
	features,
}: PlanProps ) {
	const { planType } = usePlanType();

	let planClass = `flex flex-col justify-start items-center rounded-[0.65rem] px-[1.9rem] font-bold  ${
		(active) ? "h-[31.25rem] w-[21.875rem] bg-customGradientBottom py-[3.4rem] text-white" : "h-[28.4rem] w-[21.875rem] py-[1.9rem] bg-white text-"
	}`;


	return (
		<section className={planClass}>
			
			<h2 className="text-lg">{name}</h2>
			
			<h1 className={`flex items-center gap-[0.7rem] text-7xl -tracking-[0.03em] mt-[1.45rem] mb-[2.1rem] ${
				(active)? "text-white" : "text-DarkGrayishBlue"
			}`}>
				<span className="text-[2.5rem]">$</span>
				{price[planType]}
			</h1>
			
			<div className="flex flex-col items-center gap-[0.95rem] w-full text-[0.95rem]">
				<PropDivider />
				<h3>{features.storage} Storage</h3>
				<PropDivider />
				<h3>{features.users} Users Allowed</h3>
				<PropDivider />
				<h3>Send up to {features.sendUp}</h3>
				<PropDivider />
			</div>

			<button className={`h-[2.75rem] w-full text-xs tracking-[.17em] rounded-md mt-[1.95rem] uppercase border-[0.1rem] ${
				(active)? "active-btn" : "gradient-btn"
			}`}>
				Learn more
			</button>

		</section>
	)
}
