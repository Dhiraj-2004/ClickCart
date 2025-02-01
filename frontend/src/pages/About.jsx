import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-fulol md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to SnapNCart, your go-to destination for the latest trends and timeless styles in fashion. We are passionate about bringing you a carefully curated collection of clothing that blends quality, comfort, and style—all at affordable prices.</p>
          <p>At SnapNCart, we believe that fashion is more than just what you wear—it's how you express yourself. Our mission is to empower our customers with a variety of clothing options, from everyday essentials to bold statement pieces, so you can feel confident and stylish no matter the occasion.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At SnapNCart, our mission is simple: to make fashion accessible, affordable, and enjoyable for everyone. We are dedicated to helping individuals express their unique style by offering a diverse range of high-quality clothing that meets both modern trends and timeless classics.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality is our top priority. We carefully select fabrics and materials that not only look good but feel good. Our clothing undergoes rigorous quality checks to ensure durability, comfort, and style. Whether it’s a casual tee or a formal outfit, we guarantee that every piece meets our high standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Affordable Fashion</b>
          <p className='text-gray-600'>We believe great fashion should be accessible to all. Our collections offer stylish, on-trend pieces at prices that won’t break the bank.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We make shopping easy and hassle-free. Our user-friendly website allows you to browse and shop from the comfort of your home, anytime, anywhere. With intuitive navigation, and a secure checkout process, we ensure that your shopping experience is smooth and stress-free.</p>
        </div>
      </div> 

      <NewsLetterBox />

    </div>
  )
}

export default About
