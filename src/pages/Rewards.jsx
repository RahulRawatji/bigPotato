import React from 'react';

import './Rewards.css';

const Rewards = () => {
  return (<>
    <div className='header py-3 px-10'>
        <h2 className=''>STARBUCKS® REWARDS</h2>
    </div>
    <div className='flex justify-center p-20'>
        <div className='flex flex-col gap-5'>
            <div className='grid place-content-center gap-3'>
                <h2 className='text-2xl text-center'>Getting started is easy</h2>
                <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className='grid grid-cols-3 place-content-center p-5'>
                <div className='flex flex-col justify-center gap-4 p-5' >
                    <img class=" self-center" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="" width="48"/>
                    <h1 className='text-center'>Create an account</h1>
                    <p className='text-center'>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
                </div>
                <div className='flex flex-col justify-center gap-4 p-5'>
                <img class="self-center" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="" width="48"/>
                <h1 className='text-center'>Order and pay how you’d like</h1>
               <p className='text-center'>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
                </div>
                <div className='flex flex-col gap-4 justify-center p-5 gap-4'>
                <img class="self-center" src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="" width="48"/>
                <h1 className='text-center'>Earn Stars, get Rewards</h1>
                <p className='text-center'>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                </div>
            </div>
        </div>
    </div>

    <div className='sb__middle'>
        <h2>Get your favorites for free</h2>
        <div>
            <button className='p-3'>25<span aria-hidden="true" class="sb_star text-xs">★</span></button>
            <button className='p-3'>50<span aria-hidden="true" class="sb_star text-xs">★</span></button>
            <button className='p-3'>150<span aria-hidden="true" class="sb_star text-xs">★</span></button>
            <button className='p-3'>200<span aria-hidden="true" class="sb_star text-xs">★</span></button>
            <button className='p-3'>400<span aria-hidden="true" class="sb_star text-xs">★</span></button>
        </div>
    </div>
    </>
  )
}

export default Rewards