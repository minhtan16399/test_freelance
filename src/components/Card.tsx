import Image from "next/image";
interface Card {
    title: string;
    description: string;
    image: string;
    name: string;
    information: string;
}
export const Card = ({title, description, image, name, information}: Card) => {
    return (
        <div className='flex flex-col bg-white rounded-xl min-w-[328px] max-w-[328px] p-5 gap-6'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-base font-bold text-[#2E324E]'>{title}</h2>
                <p className='text-[#787EA2] text-[14px] font-normal'>{description}</p>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='w-[42px] h-[42px] rounded-[50%] overflow-hidden'>
                    <Image width={42} height={42} src={image} alt={`alt for ${title}`} />
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-[14px] font-semibold text-[#2E324E]'>{name}</span>
                    <span className='text-xs font-normal text-[#787EA2]'>{information}</span>
                </div>
            </div>
        </div>
    )
}