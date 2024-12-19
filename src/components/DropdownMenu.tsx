'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import classNames from "classnames";
import {ArrowDownIcon} from "@/shared/icons/arrow-down";
import Link from 'next/link';

type Props = {
    icon?: ReactNode,
    hiddenIcon?: boolean,
    text?: 'name' | 'value' | 'hidden',
    defaultValue: string,
    dataMenu :
        {
            key: number,
            name: string,
            value: string,
            url?: string,
        }[]
    action?: (value:any)=>void
};

export const DropdownMenu = ({ icon, dataMenu, defaultValue, hiddenIcon, text, action }: Props ) => {
    const [select, setSelect] = useState<boolean>(false);
    const [value,setValue] = useState<string>(defaultValue);
    useEffect(() => {
        const unSelectHandler = () => {
            if (select) {
                return setSelect(false);
            }
        };
        document.addEventListener('click', unSelectHandler);
        return () => {document.removeEventListener('click', unSelectHandler)};
    }, [select]);

    return (
        <div className='relative'>
            <div className='flex items-center justify-center gap-1 cursor-pointer' onClick={() => {
                setSelect(!select)
            }}>
                <div className={classNames('text-center', {'hidden' : text === 'hidden'})} >
                    {(dataMenu.filter((item)=>(
                        item.value === value
                    ))).map((index)=> {
                        if (text === 'value') { return index.value }
                        if (text === 'name' || !text) { return index.name }
                    })}
                </div>
                {icon}
                <div className={classNames('transition-all duration-300', {'rotate-180': select, 'hidden' : hiddenIcon})}>
                    <ArrowDownIcon size={20}/>
                </div>
            </div>
            <div
                className={classNames('absolute top-10 right-0 z-10 bg-white drop-shadow py-3 px-4 rounded-lg min-w-[117px]', {hidden: !select})}>
                <ul className='gap-3 flex flex-col text-nowrap justify-center items-start'>
                    {dataMenu.map((item) => (
                        <li key={item.key}
                            className={classNames('w-full text-neutral-700 hover:font-semibold font-normal text-start transition-all duration-200 cursor-pointer', { 'font-semibold text-neutral-700': value === item.value })}
                            onClick={(event)=>{setSelect(false); setValue(item.value)}}>
                            {item.url
                                ?
                                <Link href={item.url}>
                                    <div>{item.name}</div>
                                </Link>
                                :
                                <div onClick={action}>{item.name}</div>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}