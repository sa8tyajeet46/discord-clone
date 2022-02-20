import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {MenuIcon} from '@heroicons/react/outline';
import {auth,res,db} from './firebase';
import {useNavigate} from 'react-router-dom';
import {signInWithPopup} from 'firebase/auth';
 function Header(){
    const navigate=useNavigate();
 const [user]=useAuthState(auth);
     const sign=()=>{
       signInWithPopup(auth,res).then(()=>navigate("/channels")).catch((error)=>{alert(error)});
    };
    console.log(db);
return (<header className="flex bg-[#295DE7] items-center justify-between px-4 py-2 text-white">
    <a href="/">
    <img src="./logo.svg" alt="" className="w-32 h-12 object-contain"></img>
    </a>
    <div className="hidden lg:flex space-x-6 items-center">
        <a className="link">Download</a>
        <a className="link">Why Discord</a>
        <a className="link">Saftey</a>
        <a className="link">support</a>
        <a className="link">Nitro</a>
    </div>
    <div className="flex space-x-4">
        <button  onClick={!user?sign:()=>navigate('/channels')} className="bg-white p-2 rounded-full whitespace-nowrap text-[#7289da] hover:transition duration-2000 ease-in-out md:text-xl px-4 focus:outline-none">{!user?"Log in":"open Discord"}</button>
        <MenuIcon className='w-8 lg:hidden'/>
    </div>
</header>);
}
export {Header};