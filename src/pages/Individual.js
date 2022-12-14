import React from 'react';
import Borrow from '../components/Borrow';
import IncomingStream from '../components/IncomingStream';
import Spent from '../components/Spent';
import Withdraw from '../components/Withdraw';

const Individual = () => {
    return ( 
        <div className='flex flex-row w-screen h-screen items-center bg-slate-900' >
            <div className='flex flex-col w-[60%]' >
            <IncomingStream/>
            <Spent/>
            </div>
            <div className='flex flex-col h-fit w-[40%] items-center justifu-center' >
                <Withdraw/>
                <Borrow/>
            </div>
        </div>
     );
}
 
export default Individual;