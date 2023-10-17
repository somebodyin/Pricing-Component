import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from "next";
import Image from 'next/image';
import IconBottom from "@/public/images/bg-bottom.svg";
import IconTop from "@/public/images/bg-top.svg";
import PlanTypeContextProvider from '@/context/plan-type-context';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  fallback: [ "sans-serif" ],
  display: "block"
})

export const metadata: Metadata = {
  title: "Pricing Component",
  generator: "Next.js",
  applicationName: "Pricing Component with toogle master",
  description: "Pricing Component solution for FrontendMentor.io",
  keywords: "nextjs, typescript, tailwindcss, Frontend-Mentor, Somebodyin",
  creator: "Somebodyin",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} relative bg-BrightGrayishBlue text-GrayishBlue`}>
        <Image className="fixed top-0 right-0 -z-10" src={IconTop} alt="Icon Top"/>
        <Image className="fixed bottom-0 left-0 -z-10" src={IconBottom} alt="Icon Bottom"/>


        <PlanTypeContextProvider>
          {children}
        </PlanTypeContextProvider>
      </body>
    </html>
  )
}
