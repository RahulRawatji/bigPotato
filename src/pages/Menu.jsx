import React from 'react';

import './Menu.css';

const Menu = () => {
  return (
    <>
        <div className='menu-nav'>
            <ul className='flex gap-5 ml-32' style={{"fontFamily":"SoDoSans Li","fontSize":"13px"}}>
                <li><a href='#'>All Products</a></li>
                <li>Featured</li>
                <li>Previous Order</li>
                <li>Favorite Product</li>
            </ul>
        </div>
        <div className='flex px-28'>
            <div className='left-grid min-w-30'>
                <div className='px-6 my-5'>
                    <h3 className='font-bold my-4'>Drinks</h3>
                    <ul className='flex flex-col gap-3'>
                        <li>Hot Coffee</li>
                        <li>Hot Teas</li>
                        <li>Hot Drinks</li>
                        <li>Frappuccino Blended Beverages</li>
                        <li>Cold Coffee</li>
                        <li>Iced Teas</li>
                        <li>Cold Drinks</li>
                    </ul>
                </div>

                <div className='px-6 my-5'>
                    <h3 className='font-bold my-4'>Food</h3>
                    <ul className=' flex flex-col gap-3'>
                        <li>Hot Coffee</li>
                        <li>Hot Teas</li>
                        <li>Hot Drinks</li>
                        <li>Frappuccino Blended Beverages</li>
                        <li>Cold Coffee</li>
                        <li>Iced Teas</li>
                        <li>Cold Drinks</li>
                    </ul>
                </div>

                <div className='px-6 my-5'>
                    <h3 className='font-bold my-4'>Drinks</h3>
                    <ul className=' flex flex-col gap-3'>
                        <li>Hot Coffee</li>
                        <li>Hot Teas</li>
                        <li>Hot Drinks</li>
                        <li>Frappuccino Blended Beverages</li>
                        <li>Cold Coffee</li>
                        <li>Iced Teas</li>
                        <li>Cold Drinks</li>
                    </ul>
                </div>
            </div>
            <div className='right-grid min-w-60'>
                <h1 className='my-10'>Menu</h1>
                <div>
                    <h1>Drinks</h1>
                    <div className='grid grid-cols-2'>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu