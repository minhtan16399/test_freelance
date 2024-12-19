import React, { useEffect, useState } from 'react';

export const NavbarIcon = () => {
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        const unSelectHandler = () => {
            if (menu) {
                return setMenu(false);
            }
        };
        document.addEventListener('click', unSelectHandler);
        return () => {document.removeEventListener('click', unSelectHandler)};
    }, [menu]);

    return (
        <ul className='w-6 flex flex-col items-center justify-center gap-1' onClick={() => {
            setMenu(!menu);
        }}>
            <li
                className={!menu ? 'w-full h-0.5 bg-[#676FC5] transition-all duration-200 rounded' : 'w-full h-0.5 bg-[#676FC5] transition-all duration-200 rounded rotate-45 translate-y-1.5'}></li>
            <li
                className={!menu ? 'w-full h-0.5 bg-[#676FC5] transition-all duration-200 rounded' : 'w-full h-0.5 bg-[#676FC5] transition-all duration-200 rounded opacity-0'}></li>
            <li
                className={!menu ? 'w-full h-0.5 bg-[#676FC5] transition-all duration-200 rounded' : 'w-full h-0.5 bg-[#676FC5] transition-all duration-200 rounded -rotate-45 -translate-y-1.5'}></li>
        </ul>
    )
}