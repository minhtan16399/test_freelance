import {Carousel} from "@/components/Carousel";
import {Card} from "@/components/Card";

export default function Home() {
    const dataComment1 = [
        {
            title: 'Fast and accurate!',
            description: '“This tool cut down my search time dramatically and made it easier to meet my clients\' needs, no matter how complex.”',
            name: 'John',
            information: 'Real Estate Agent',
            image: '/avatar1.png',
        },
        {
            title: 'Amazing to work with',
            description: '“I impressed my clients with how quickly I found matching properties—and how clear the comparisons were.”',
            name: 'Sarah',
            information: 'Realtor',
            image: '/avatar2.png',
        },
        {
            title: 'Top-notch experience!',
            description: '“I impressed my clients with how quickly I found matching properties—and how clear the comparisons were.”',
            name: 'Sarah',
            information: 'Realtor',
            image: '/avatar3.png',
        },
        {
            title: 'Fast and accurate!',
            description: '“This tool cut down my search time dramatically and made it easier to meet my clients\' needs, no matter how complex.”',
            name: 'John',
            information: 'Real Estate Agent',
            image: '/avatar1.png',
        },
        {
            title: 'Amazing to work with',
            description: '“I impressed my clients with how quickly I found matching properties—and how clear the comparisons were.”',
            name: 'Sarah',
            information: 'Realtor',
            image: '/avatar2.png',
        },
        {
            title: 'Top-notch experience!',
            description: '“I impressed my clients with how quickly I found matching properties—and how clear the comparisons were.”',
            name: 'Sarah',
            information: 'Realtor',
            image: '/avatar3.png',
        }
    ];

    const dataComment2 = [
        {
            title: 'Top-notch experience!',
            description: '"My clients were thrilled by the speed and accuracy of my work. The tool\'s ability to provide clear and concise comparisons was a huge time-saver for everyone involved."',
            name: 'David Pham',
            information: 'Business Consultant',
            image: '/avatar4.png',
        },
        {
            title: 'Amazing to work with',
            description: '"I was impressed with how quickly I could find matching properties. The clear comparisons helped my clients make decisions effortlessly—it made me look like a true professional!"',
            name: 'Sarah Nguyen',
            information: 'Real Estate Agent, New York',
            image: '/avatar5.png',
        },
        {
            title: 'Efficient and professional',
            description: '"This tool allowed me to wow my clients by delivering perfect matches in no time. The detailed comparisons were easy to understand and added so much value to the process."',
            name: 'Michael Tran',
            information: ' Financial Advisor, LA',
            image: '/avatar6.png',
        },
        {
            title: 'Top-notch experience!',
            description: '"My clients were thrilled by the speed and accuracy of my work. The tool\'s ability to provide clear and concise comparisons was a huge time-saver for everyone involved."',
            name: 'David Pham',
            information: 'Business Consultant',
            image: '/avatar4.png',
        },
        {
            title: 'Amazing to work with',
            description: '"I was impressed with how quickly I could find matching properties. The clear comparisons helped my clients make decisions effortlessly—it made me look like a true professional!"',
            name: 'Sarah Nguyen',
            information: 'Real Estate Agent, New York',
            image: '/avatar5.png',
        },
        {
            title: 'Efficient and professional',
            description: '"This tool allowed me to wow my clients by delivering perfect matches in no time. The detailed comparisons were easy to understand and added so much value to the process."',
            name: 'Michael Tran',
            information: ' Financial Advisor, LA',
            image: '/avatar6.png',
        }
    ]

  return (
    <div className="bg-[#EFF3F9]">
        <div className="min-h-dvh max-w-[1440px] mx-auto">
            <section className="bg-[url('/Grid.png')]">
                <Carousel/>
            </section>
            <main className='w-full pt-60 pb-24 bg-[#EFF3F9]'>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col items-center w-full gap-4'>
                        <h2 className='text-5xl text-[#2E324E] font-semibold leading-[57px]'>What Agents Are Saying</h2>
                        <p className='text-[#787EA2] text-base font-medium w-1/3 px-16 text-center'>Discover what our
                            satisfied customers have to say
                            about their experiences with our services</p>
                    </div>
                    <div className='w-full relative flex flex-col gap-6 scroll'>
                        <div className='flex gap-6 animate-scroll-to-left'>
                            {dataComment1?.map((item, index) => (
                                <Card key={index} title={item?.title}
                                      description={item?.description}
                                      image={item?.image}
                                      name={item?.name}
                                      information={item?.information}
                                />
                            ))}
                        </div>
                        <div className='flex gap-6 animate-scroll-to-right'>
                            {dataComment2?.map((item, index) => (
                                <Card key={index} title={item?.title}
                                      description={item?.description}
                                      image={item?.image}
                                      name={item?.name}
                                      information={item?.information}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
}
