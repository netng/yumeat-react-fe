import React from 'react'
import {topPicks} from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
    return (
        <>
            <h1 className='text-center font-bold text-2xl text-orange-500'>Top Picks</h1>
            <div className='hidden lg:flex max-w-[1520px] mx-auto py-2 px-2'>
                <Splide options={{perPage: 4, gap: '0.5rem', drag: 'free', arrows: false}}>
                    {
                        topPicks.map((item) => (
                            <SplideSlide>
                                <div className='rounded-3xl relative'>
                                    <div className='absolute w-full h-full bg-black/50 text-white rounded-3xl'>
                                        <p className='px-2 pt-4 font-bold text-2xl'>{item.title}</p>
                                        <p className='px-2'>{item.price}</p>
                                        <button className='border-dotted border-white mx-2 absolute bottom-4 hover:bg-orange-500 duration-600'>Add To Cart</button>
                                    </div>
                                    <img className='rounded-3xl object-cover w-full h-[200px]' src={item.img} />
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </>
    )
}

export default TopPicks