import { notifications } from '@/utils/services/NotificationService';
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import salty from '@/assets/salty.png';
import Table from '@/components/Table';
import Stats from '@/components/Stats';
import { setInterval } from 'timers/promises';


export default function Home() {

  const [data, setData] = useState([] as any);
  useEffect(() => {
    axios.get('https://saltybet.com/state.json').then((res) => {
      setData(res.data);
    });
  }, []);


  return (
    <div className="w-full">
      <div className='flex flex-col h-full p-16'>
        <div className="flex items-center justify-between p-3 bg-[#222222] rounded-t">
          <h1 className='flex items-center font-extrabold text-white text-2xl'><img src={salty} className="w-10 h-10 animate-[wiggle_1s_ease-in-out_infinite] mr-1" />Buddy</h1>
          <div>
            <span className='badge border-2 bg-[#1F1F1F] rounded-md border-[#333333]/60 px-5 py-3.5 font-bold text-white text-sm mr-3'>{data.remaining ? data.remaining : 'No Data'}</span>
            {data.status === 'open' ? <div className="badge border-2 bg-[#8CBA80]/50 rounded-md border-[#8CBA80] px-5 py-3.5 font-bold ">Open</div> : <div className="badge border-2 bg-[#d14836]/50 rounded-md border-[#d14836] px-5 py-3.5 font-bold ">Locked</div>}
          </div>
        </div>
        <div className="flex flex-col h-full justify-center items-center p-5 rounded-b bg-[#222222]/75">
          <div className='grid grid-cols-2 gap-4 w-full h-full'>
            <div className='bg-[#d14836]/10 rounded'>
              <div className='w-full h-[40px] bg-[#d14836]/80 p-2 rounded-t text-white font-bold'>{data.p1name}</div>
              <Stats />
              <div className="overflow-x-auto !min-h-[calc(100%-40px) px-5">
                <Table />
              </div>
            </div>
            <div className='bg-[#349eff]/10 rounded'>
              <div className='w-full h-[40px] bg-[#349eff]/80 rounded-t p-2 text-white font-bold'>{data.p2name}</div>
              <Stats />
              <div className="overflow-x-auto !min-h-[calc(100%-40px) px-5">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


