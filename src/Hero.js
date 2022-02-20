import React from 'react';
import { DownloadIcon,GlobeAltIcon } from '@heroicons/react/outline';
export default function Header(){
    return (<div className="h-full lg:h-[560px] p-0 bg-[#295DE7]">
        <div className=" h-full bg-[#295DE7] w-auto ">
            <div className="flex flex-col lg:flex-row   h-full">
            <div className="h-full flex flex-col  space-y-7 lg:justify-center lg:w-3xl px-8 w-auto">
                <h1 className="text-5xl text-white font-bold">Your place to talk</h1>
                <h2 className="text-white gap-7 text-lg font-light w-full lg:max-w-3xl">
                    Whether you're part of a school club ,gaming group,
                    worldwide art community, or just a handful of friends
                    that want to spend time together, Discord make it
                    easy to talk and hang out more often. 
                </h2>
                <div className="flex flex-col gap-10 items-start md:flex-row lg:flex-col">
                    <button className="bg-white h-full flex items-center justify-center text-2xl lg:text-xl p-4 rounded-full text-[#7289da]"><DownloadIcon className="flex-nowrap w-min-7 w-7 m-2 text-black"/>Download for windows</button>
                    <button className="bg-black h-full flex items-center justify-center text-2xl lg:text-xl p-4 rounded-full text-white"><GlobeAltIcon className="flex-nowrap w-min-7 w-7 m-2 text-white"></GlobeAltIcon>Open Discord in browser</button>
                </div>
                </div>
                <div className="object-contain  py-4 pb-0 flex flex-col justify-end">
                <img src="./lg.svg" ait="images" className="hidden lg:flex-nowrap lg:flex whitespace-nowrap"></img>
                <img src="./sm.svg" alt="image" className="lg:hidden flex-nowrap flex whitespace-nowrap"></img>
            </div>
            </div>
        </div>
    </div>);
}