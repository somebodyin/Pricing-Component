"use client";

import React, { createContext, useContext, useState } from 'react';

type PlanTypeContextProviderProps = {
    children: React.ReactNode;
}

type PlanTypeContextType = {
    planType: PlanType;
    togglePlanType: () => void;
}

type PlanType = "annually" | "monthly";

export const PlanTypeContext = createContext<PlanTypeContextType | null>(null);

export default function PlanTypeContextProvider({ children }: PlanTypeContextProviderProps) {
    const [planType, setPlanType] = useState<PlanType>("annually");

    const togglePlanType = () => {
        if (planType === "annually") {
            setPlanType("monthly");
        } else {
            setPlanType("annually");
        }
    };

    return (
        <PlanTypeContext.Provider 
            value={{
                planType,
                togglePlanType,
            }}
        >
            {children}
        </PlanTypeContext.Provider>
    );
}

export function usePlanType() {
    const context = useContext(PlanTypeContext);

    if (context === null) {
        throw new Error(
            "useTheme must be used within an PlanTypeContextProvider"
        );
    }

    return context;
}