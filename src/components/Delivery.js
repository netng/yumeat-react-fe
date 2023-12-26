import React from 'react'

const Delivery = () => {
    return (
        <div className='w-full my-4 bg-white py-16'>
            <div className='text-center font-bold text-orange-500 text-2xl'>Quick Delivery App</div>
            <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='max-w-[520px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-[#00df9a]'>Get the App</p>
                    <h1 className='text-2xl font-bold py-2 md:text-4xl sm:text-3xl'>Limitless Convenience on-demand</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda, voluptate reprehenderit
                    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                    eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
                    voluptate reprehenderit dolore autem cum ullam sed odit
                    perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda, voluptate reprehenderit
                    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                    eveniet ex deserunt fuga?
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] my-6 font-medium rounded-md mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Delivery