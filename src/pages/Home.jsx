import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='grid grid-cols-2 px-10 my-6'>
            <div className='flex justify-center flex-col gap-3 px-20' style={{'backgroundColor':'#f4c5a1'}}>
                <h1 className='text-center'>Make someone’s week</h1>
                <p className='text-center text-xl'>Send a thoughtful gift card surprise, just because.</p>
                <div className='flex justify-center'>
                <button className='border p-2 rounded'>Send an eGift</button>
                </div>
            </div>
            <div>
                <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82712.jpg' alt='star'/>
            </div>
        </div>
        <div className='grid grid-cols-2 px-10 py-6'>
            <div  style={{'backgroundColor':'#96b2e1'}}>
                <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82714.png' alt='star'/>
            </div>
            <div className='flex justify-center flex-col gap-3 px-20' style={{'backgroundColor':'#96b2e1'}}>
                <h1 className='text-center'>Day boosters</h1>
                <p className='text-center text-xl'>Recharge with a bold and lively Iced Shaken Espresso or Iced Brown Sugar Oatmilk Shaken Espresso.</p>
                <div className='flex justify-center'>
                <button className='border p-2 rounded'>Order Now</button>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 px-10 my-6'>
            <div className='flex justify-center flex-col gap-3 px-20 text-white' style={{'backgroundColor':'#8b323e '}}>
                <h1 className='text-center'>Wrap your day</h1>
                <p className='text-center text-xl'>Savory ingredients come together in our Bacon, Sausage & Egg Wrap for a satisfying meal on the go.</p>
                <div className='flex justify-center'>
                <button className='border p-2 rounded'>Order now</button>
                </div>
            </div>
            <div>
                <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82558.jpg' alt='star'/>
            </div>
        </div>
        <div className='grid grid-cols-2 px-10 py-6'>
            <div  style={{'backgroundColor':'#3d7170'}}>
                <img src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82722.png' alt='star'/>
            </div>
            <div className='flex justify-center flex-col gap-3 px-20 text-white' style={{'backgroundColor':'#3d7170'}}>
                <h1 className='text-center'>Taste of the globe</h1>
                <p className='text-center text-xl'>Exceptional coffees unite in Starbucks Tribute Blend® showcasing four of our favorite origins.</p>
                <div className='flex justify-center'>
                <button className='border p-2 rounded'>Order now</button>
                </div>
            </div>
        </div>
        
        <div className='mx-10 h-40 flex flex-col justify-center' style={{'backgroundColor':'#d4e9e2'}}>
            <h2 className='text-center text-xl p-3'>Start fresh with Starbucks® Rewards</h2>
            <h4 className='text-center text-xl'><a href='#'>Join</a> today to earn your way to free coffee and treats.*</h4>
        </div>

        <div className='py-10 text-sm'>
            <h3 className='text-center'>*At participating stores.</h3>
        </div>
    </div>
  )
}

export default Home