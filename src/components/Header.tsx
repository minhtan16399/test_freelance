'use client';
import {CpuIcon} from "@/shared/icons/cpu";
import {useEffect, useState} from "react";
import {NavbarIcon} from "@/shared/icons/navbar-icon";
import {DropdownMenu} from "@/components/DropdownMenu";

export const Header = () => {
    const [navScroll, setNavScroll] = useState<boolean>(false);
    useEffect(() => {
        const scrollNavbarHandler = () => {
            setNavScroll(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0);
        };
        document.addEventListener('scroll', scrollNavbarHandler);
        return () => {
            document.removeEventListener('scroll', scrollNavbarHandler);
        };
    }, []);

    const menuNavbar = [
        {
            key: 1,
            name: 'Playground',
            value:'',
            url: '/'
        },
        {
            key: 2,
            name: 'How it works',
            value:'products',
            url: '/'
        },
        {
            key: 3,
            name: 'Pricing',
            value:'api',
            url:'/'
        },
        {
            key: 4,
            name: 'Case Study',
            value: 'pricing',
            url:'/'
        }
    ];
    return (
        <header className={navScroll ? 'py-5 px-5 md:px-10 lg:px-[105px] fixed top-0 w-full z-10 backdrop-blur-md' : 'py-5 px-5 md:px-10 lg:px-[105px] fixed top-0 w-full z-10'}>
            <nav className='flex items-center justify-between'>
                <div className='p-[5px] w-fit bg-white rounded-[50%] shadow'>
                    <CpuIcon/>
                </div>
                <div className='lg:w-[63.5%] flex items-center justify-end lg:justify-start gap-10'>
                    <ul className='hidden lg:flex gap-[73px] justify-between items-center font-normal text-xl'>
                        <li className='hover:scale-105 transition-all duration-200'><a href='#'>Playground</a></li>
                        <li className='hover:scale-105 transition-all duration-200'><a href='#'>How it works</a></li>
                        <li className='hover:scale-105 transition-all duration-200'><a href='#'>Pricing</a></li>
                        <li className='hover:scale-105 transition-all duration-200'><a href='#'>Case Study</a></li>
                    </ul>
                    <button className='text-white font-semibold text-base w-[111px] p-3 rounded-3xl bg-gradient-to-r from-[#676fc580] to-[#676FC5] hover:scale-105 transition-all duration-200'>Sign Up</button>
                    <div className="flex items-center justify-center xl:hidden">
                        <DropdownMenu icon={<NavbarIcon/>} dataMenu={menuNavbar}
                                      defaultValue={''}
                                      hiddenIcon={true} text={'hidden'}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}