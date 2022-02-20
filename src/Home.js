import React from 'react';
import Menu from './MenuIcon.js';
import {auth,db} from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';
import { ChevronDownIcon, CogIcon, MicrophoneIcon, PhoneIcon, PlusIcon } from '@heroicons/react/outline';
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import Channel from './Channel.js';
import Chat from './Chat';
import { useState } from 'react';
export default function Home(){
    const navigate=useNavigate();
    const [user]=useAuthState(auth);
    const [channel]=useCollection(collection(db,"channels"));
   const addChannel=async ()=>{
        const ChannelName=prompt("enter channel name");
       const docref= await addDoc(collection(db, "channels"), {
            ChannelName
             }).then(()=>console.log("m")).catch((e)=>console.log(e));
    }
    const logout=()=>{
        user?auth.signOut():console.log("error");
    }
return (
    <>{!user && navigate("/")}
    <div className="flex h-screen min-h-screen">
        <div className="flex flex-col bg-[#202225] items-center space-y-3 p-2">
            <div className="rounded-full p-2 bg-[#36393f]  hover:bg-[#295DE7]">
        <img src="./logo1.png" alt="" className="h-5"></img>
        </div>
        <hr className="w-full border-gray-700"></hr>
        <Menu image="./logo2.png"></Menu>
        <Menu image="./logo3.png"></Menu>
        <Menu image="./logo4.png"></Menu>
        <Menu image="./logo5.png"></Menu>
        <div className="rounded-full p-2 bg-[#36393f] hover:bg-[#3ba55c] hover:text-gray-50">
            <PlusIcon className="w-7 "></PlusIcon>
        </div>
        </div>
        <div className="bg-[#36393f] items-center">
            <div className="h-full overflow-y-scroll scrollbar-hide">
            <div className="bg-gray-800 text-white p-4 flex flex-row sticky">
                Official PAPA's server...
                <ChevronDownIcon className="w-4 flex"></ChevronDownIcon>
            </div>
            <div className='flex flex-col  border-1 bg-gray-800'>
            <div className="cursor-pointer px-2 pt-2  flex flex-row items-center justify-between text-gray-400 hover:text-white">
            <img src={user?.photoURL} className="h-7 rounded-full"></img>{user?.displayName.slice(0,7)+"..."}<button className="border-2 border-gray-300 px-1 h-7 rounded-xl items-center flex justify-center" onClick={logout}>Log out</button>
        </div>
        <div className="flex-col flex ">
        <div className="flex  space-x-20 px-2 text-sm font-bold">
           <div className="text-gray-400 h-7 flex items-center"> #{user?.uid.slice(0,5)}</div>
           <div className="flex justify-between space-x-2 text-gray-400">
               <MicrophoneIcon className='w-4'></MicrophoneIcon>
               <PhoneIcon className='w-4'></PhoneIcon>
               <CogIcon className='w-4'></CogIcon>
           </div>
        </div>
        </div>
        </div>
            <div className="flex flex-row text-gray-400 items-center px-2 sticky">
                <ChevronDownIcon className="w-4"></ChevronDownIcon>channels
                <PlusIcon className='w-4 ml-auto cursor-pointer ' onClick={addChannel} ></PlusIcon></div>
                <div className="">
                 {channel?.docs.map((doc)=>{
                     return (<Channel key={doc.id} id={doc.id} name={doc.data().ChannelName} />)
                 })}
                </div>
        </div>
        </div>
        <div className="bg-[#202225] flex-grow">
         <Chat />
        </div>
</div></>);
}