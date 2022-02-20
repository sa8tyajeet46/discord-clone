import React from 'react';
import {TrashIcon}  from '@heroicons/react/outline';
export default function Message(props){
    const k=new Date(props.time);
    const p=k.getHours();
    const r=k.getMinutes();
    return (
        <div className="flex px-3 space-x-5 items-center text-white">
            <img src={props.photo} className="w-10 rounded-full"></img>
            <div className="flex flex-col">
                <span>{props.name}</span>
                <div className="flex flex-row space-x-2">
            <span className="text-gray-400 font-semibold">{props.message}</span>
            <span className="text-gray-500">{p}:{r}</span>
            </div>
            </div>
        </div>
    )
}