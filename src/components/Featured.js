import React, { useState } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { RxDotFilled, RxDotsHorizontal } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const prevSlider = () => {
       const isFirstSlide = currentIndex === 0
       const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
       setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1520px] h-[500px] p-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>
            </div>
            <div className='hidden cursor-pointer group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 bg-orange-700 rounded-full text-2xl p-1 text-white'>
                <BsChevronLeft size={25}
                    onClick={prevSlider} />
            </div>
            <div className='hidden cursor-pointer group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 bg-orange-700 rounded-full text-2xl p-1 text-white'>
                <BsChevronRight size={25}
                    onClick={nextSlider} />
            </div>
            <div className='flex top-4 justify-center py-2 '>
                {
                    sliders.map((sliderItems, sliderIndex) => (
                        <div key={sliderIndex}
                            className={sliderIndex === currentIndex ? 'cursor-pointer text-2xl text-orange-700' : 'cursor-pointer text-2xl'}>
                            <RxDotFilled size={25} 
                                onClick={() => moveToNextSlide(sliderIndex)} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured