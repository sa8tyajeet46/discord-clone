import { HashtagIcon } from '@heroicons/react/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/channelSlice';

 export default function Channel(props){
    const dispatch = useDispatch();
    const history = useNavigate();
  
    const setChannel = () => {
      dispatch(
        setChannelInfo({
          channelId: props.id,
          channelName: props.name,
        })
      );
  
      history(`/channels/${props.id}`);
    };
    return (
        <div className='flex flex-row cursor-pointer p-2 hover:bg-black hover:text-white px-auto space-x-2 text-gray-400 font-mono font-semibold' 
        onClick={setChannel}>
            <HashtagIcon className="w-4"></HashtagIcon><div >{props.name}</div>
        </div>
    );
}
