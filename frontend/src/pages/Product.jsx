import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RealtedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async() => {

    products.map((item) => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        {/* Product Images... */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.78%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        
        {/*...... Product Information..... */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_icon} alt="" className='w-3 5' />
              <img src={assets.star_dull_icon} alt="" className='w-3 5' />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price} </p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description} </p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% original Product</p> 
                <p>Cash on delivery is available on this product</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>
      
      {/*==========> Description Section <========== */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>Discover a range of stylish and comfortable clothing perfect for any occasion. From casual wear to formal attire, our collection offers the latest trends and timeless classics, all crafted with high-quality fabrics. Whether you're looking for something trendy or a wardrobe essential, we have the perfect piece for you. Shop now and elevate your everyday style with clothing designed to fit and flatter.</p>
        <p>Our clothing is designed to meet your fashion needs, whether you're dressing up for a special event or keeping it casual for a day out. Each piece is carefully crafted to combine style, comfort, and durability, ensuring you look and feel your best. With a wide range of sizes, colors, and designs, you’re sure to find something that suits your personal style. Refresh your wardrobe with our versatile collection today!</p>
        </div>
      </div>
      
      {/* ......Display related Products...... */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
