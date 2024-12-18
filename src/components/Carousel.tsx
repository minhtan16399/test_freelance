import {ChevronDownIcon} from "@/shared/icons/chevron-down";
import {ChevronRightIcon} from "@/shared/icons/chevron-righ";
import Image from "next/image";
import {MedalStarIcon} from "@/shared/icons/medal-star";
import {DiscountShapeIcon} from "@/shared/icons/discount-shape";
import {MagicStarIcon} from "@/shared/icons/magic-star";
import {BubbleIcon} from "@/shared/icons/bubble";
import {ArrowRightIcon} from "@/shared/icons/arrow-right";
import {LocationIcon} from "@/shared/icons/location";

export const Carousel = () => {
    return (
        <div className="max-w-[1240px] mx-auto flex pt-40">
            <div className='w-1/2 flex flex-col gap-12 pt-24 h-full'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-4xl font-bold text-[#2E324E] leading-[52px]'>Close More Deals by
                        <span className='text-[#676FC5]'> Instantly Matching </span>
                        Buyers to the Right Properties</h1>
                    <p className='w-2/3 text-xl text-[#787EA2] leading-7'>Revolutionize how you find and present
                        properties—save time and impress clients with professional presentation</p>
                </div>
                <div className='flex gap-6'>
                    <button
                        className='text-white font-semibold text-base p-3 rounded-[40px] bg-gradient-to-r from-[#676fc580] to-[#676FC5] hover:scale-105 transition-all duration-200 flex gap-[58px] items-center'>
                        <span className='pl-3'>Get Started</span>
                        <span className=''><ChevronDownIcon/></span>
                    </button>
                    <button
                        className='text-[#676FC5] font-semibold text-base p-3 rounded-[40px] bg-white border-[#676FC5] border hover:scale-105 transition-all duration-200 flex gap-[58px] items-center'>
                        <span className='pl-3'>Try Playground</span>
                        <span className=''><ChevronRightIcon/></span>
                    </button>
                </div>
            </div>
            <div className='w-1/2 relative h-[573px]'>
                <div className='w-[370px] h-[370px] bg-gradient-to-tr to-white from-30% from-[#676FC5] to-100% blur-md opacity-15 rounded-[50%] absolute -right-12 -top-16'></div>
                <div className='w-[370px] h-[370px] bg-gradient-to-bl to-white from-30% from-[#676FC5] to-100% blur-md opacity-15 rounded-[50%] absolute -left-12 -bottom-16'></div>
                <div className='bg-white rounded-xl w-[283px] overflow-hidden absolute top-0 right-12'>
                    <div className='flex items-center justify-between gap-8 px-5 py-3'>
                        <div className='w-2/3 flex flex-col gap-2'>
                            <h2 className='text-xs font-bold text-[#2E324E] '>$355,000 → 255,000</h2>
                            <p className='text-[10px] font-semibold text-[#2E324E] opacity-80'>6000 E Camelback Rd Unit
                                7707, Scottsdale, AZ 85251</p>
                        </div>
                        <div className='w-fit'>
                            <DiscountShapeIcon/>
                        </div>
                    </div>
                    <div>
                        <Image width={283} height={254} src='/Rectangle_7.png' alt='alt for rectangle 1'/>
                    </div>
                </div>
                <div
                    className='flex items-center gap-5 px-3 py-2 bg-white w-fit rounded-3xl absolute right-5 top-[32%]'>
                    <span className='text-xs font-semibold'>Best choice</span>
                    <MagicStarIcon/>
                </div>
                <div
                    className='bg-white backdrop-blur-md bg-opacity-60 rounded-2xl w-[356px] overflow-hidden absolute bottom-0 left-12'>
                    <div className='flex items-center justify-between gap-8 px-5 py-3'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-xl font-bold text-[#2E324E] '>$455,000</h2>
                            <p className='text-[14px] font-semibold text-[#2E324E] opacity-80'>15902 N 170th Ln,
                                Surprise, AZ 85388</p>
                        </div>
                        <div className='w-fit'>
                            <MedalStarIcon/>
                        </div>
                    </div>
                    <div>
                        <Image width={356} height={375} src='/Rectangle_6.png' alt='alt for rectangle 2'/>
                    </div>
                </div>
                <div className='flex items-center gap-5 px-3 py-2 bg-white w-fit rounded-3xl absolute left-0 top-[47%]'>
                    <span className='text-xs font-semibold'>2 bedrooms</span>
                    <MagicStarIcon/>
                </div>
                <div className='flex flex-col w-fit items-center gap-2 absolute right-20 bottom-32'>
                    <LocationIcon/>
                    <div className='flex items-center gap-5 px-3 py-2 bg-white w-fit rounded-3xl'>
                        <span className='text-xs font-semibold px-4'>Arizona</span>
                    </div>
                </div>
                <div
                    className='backdrop-blur-md bg-opacity-70 rounded-xl w-[511px] p-3 gap-6 absolute bottom-9 right-0 flex items-center hover:translate-x-2 cursor-pointer transition-all duration-200'
                    style={{background: 'linear-gradient(to right, #ffffff8a 0%, #ffffff 50%, #ffffff 100%)'}}
                >
                    <div className='p-3 bg-white rounded-[50%]'><BubbleIcon/></div>
                    <span className='text-[14px] text-[#2E324E] font-medium'>I want to find an apartment
                        <span className='font-bold'> in Arizona </span> with
                        <span className='font-bold'> 2 bedrooms </span> and
                        <span className='font-bold'> close to school </span>
                    </span>
                    <button className=''><ArrowRightIcon/></button>
                </div>
            </div>
        </div>
    )
}