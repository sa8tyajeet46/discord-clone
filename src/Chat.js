import { BellIcon, ChatIcon, DotsCircleHorizontalIcon, HashtagIcon, PlusCircleIcon, PlusIcon, QuestionMarkCircleIcon, SearchCircleIcon, SearchIcon, UserGroupIcon } from '@heroicons/react/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/channelSlice';
import { useRef } from 'react';
import { collection, addDoc,doc,orderBy, query,getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import {auth,db} from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
   
export default function Chat(){
    const channelname=useSelector(selectChannelName);
    const channelid=useSelector(selectChannelId);
    const [user]=useAuthState(auth);
    const [msg]=useCollection(channelid && query(collection(doc(collection(db,"channels"),channelid),"message"),orderBy("timestamp","asc")));
    const inputref=useRef("");
    async function setmsg(e){
        e.preventDefault();
        const d=new Date();
        if(inputref!=="")
        {
           // await addDoc(collection(
               const kef=collection(doc(collection(db,"channels"),channelid),"message");
              await addDoc(kef,{
                //,channelid),{
                 timestamp:d,   
               message:inputref.current.value,
               name:user?.displayName,
               photo:user?.photoURL,
               email:user?.email,
             }
             ).then(()=>console.log("succes")).catch((error)=>console.log(error));
            console.log(kef);
        }
        inputref.current.value="";
    }
    return (
        <div className="text-gray-400 flex flex-col h-screen">
         <header className="flex  justify-between items-center space-x-5 bg-[#181818]  p-4">
             <div className="flex space-x-2 items-center ">
             <HashtagIcon className="w-7 text-gray-600 font-semibold"></HashtagIcon>
              <span className='text-xl font-bold'>{channelname}</span></div>
              <div className="flex space-x-10">
              <div className ="flex space-x-4">
              <BellIcon className="w-6 "></BellIcon>
              <UserGroupIcon className="w-6 "></UserGroupIcon>
              <ChatIcon className="w-6 "></ChatIcon>
              </div>
              <div>
                  <form className="bg-[#36393F] flex justify-between px-1 cursor-pointer rounded-sm">
                      <input type="text" className="border-none outline-0 bg-[#36393F] focus:bg-[#36393F] px-2 py-1 rounded-sm " placeholder='search' ></input>
                      <SearchIcon className='w-5'></SearchIcon>
                  </form>
              </div>
              <div className="flex space-x-2">
                  <QuestionMarkCircleIcon className="w-6 "></QuestionMarkCircleIcon>
                  <DotsCircleHorizontalIcon className="w-6 "></DotsCircleHorizontalIcon>
              </div>
              </div>
         </header>
         <main className=" flex flex-col ">
             <div className='flex-col overflow-y-scroll scrollbar-hide  flex space-y-3 py-2 h-[600px] bg-[#202225]'>
                {channelid && msg?.docs.map((d)=>{
                    const {message,name,photo,email}=d.data();
                    const timestamp=new Date(d.data().timestamp*1000)
                    const time=timestamp.toString();
                return (<Message 
                    name={name} email={email} photo={photo} message={message} key={d.id} time={time}
                    />)
                }
                )
                }
             </div>
             <div className="absolute bottom-0 p-5 flex space-x-5 items-center flex-grow w-96">
               <form className="bg-slate-800 flex flex-row px-2 space-x-3 py-2 rounded-full w-full ">
               <PlusCircleIcon className="w-7"></PlusCircleIcon>
               <input type="text" className='focus:outline-none px-2 py-1 bg-slate-800 w-full' placeholder={channelid?`Message ${channelname}`:"select a channel" } 
               disabled={!channelid}
               ref={inputref}
               ></input>
               <button type="submit" onClick={setmsg} className="hidden"></button>
               </form>
             </div>
         </main>
        </div>
    );
}