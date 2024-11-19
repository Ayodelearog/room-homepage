import React from 'react'
import Image from 'next/image'

const Discovery = () => {
  return (
    <div className='w-full  py-12 px-10 text-left font-spartan lg:hidden'>
        <h1 className='text-3xl font-bold mb-4'>Discover innovative ways to decorate</h1>
        <p className='text-[14px] font-semibold text-primary-dark-gray '>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collectiion and make your property a reflection of you and what you love.</p>

        <div className='w-full relative flex items-center gap-6 mt-10'>
            <p className='font-semibold font-spartan tracking-[.5rem]'>SHOP NOW</p>
            <Image src='/images/icon-arrow.svg' width={56} height={12} alt='arrow right' className='object-contain animate-slide-right-and-back'/>
        </div>

    </div>
  )
}

export default Discovery