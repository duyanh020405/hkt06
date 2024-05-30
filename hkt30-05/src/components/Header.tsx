import React, { useState, useEffect } from 'react';
import './Header.scss';
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const img = [
    './public/shop-ban-hang/images/banner/banner-5.jpg',
    "./public/shop-ban-hang/images/banner/banner-4.jpg",
    "./public/shop-ban-hang/images/banner/banner-3.jpg",
    "./public/shop-ban-hang/images/banner/banner-2.jpg",
    "./public/shop-ban-hang/images/banner/banner-1.jpg",
    

  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % img.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const changeUp = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % img.length);
  };

  const changeDown = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + img.length) % img.length);
  };

  return (
    <div className='under_header'>
      <button onClick={changeDown}>
        <img className='imgIcon' src="https://blizzstoreperu.com/cdn/shop/t/7/assets/back.png?v=150929464083354926551624679903" alt="Previous" />
      </button>
      <img src={img[currentIndex]} alt="Slideshow" />
      <button onClick={changeUp}>
        <img className='imgIcon' src="https://th.bing.com/th/id/R.4f95ebfcf140f878f1b51e301882f6b0?rik=FTJ%2fvpX6H7SM%2fg&pid=ImgRaw&r=0" alt="Next" />
      </button>
     
    </div>
  );
};

export default function Header() {
  return (
    <div>
      <div className='header'>
        <h1>Rikkei_Shop</h1>
        <div style={{display: "flex", flexDirection: "row", gap: 5}}>
          <input type="text" placeholder='Nhập để tìm kiếm' />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: 20}}>
          <h3>Giỏ hàng</h3>
          <h3>Đăng nhập</h3>
          <h3><i className="bi bi-cart"></i>Đăng ký</h3>
        </div>
      </div>
      <ImageCarousel />
      <img src="" alt="" />
    </div>
    
  );
}
