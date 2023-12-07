/*import React from 'react';
import Swiper from 'swiper';*/
import bannerData from './banner-data/banner-data';
import './banner.css';

function Banner() {

  return (
    <div className="Banner">
      <picture>
        <source type="image/webp" srcSet={bannerData[0].image.webp.srcset} />
        <img src={bannerData[0].image.fallback.src} srcSet={bannerData[0].image.fallback.srcset} width={bannerData[0].image.width} height={bannerData[0].image.height} alt={bannerData[0].image.alt} />
      </picture>
      <p className="banner__info">
        <span className="banner__message">{bannerData[0].info.message}</span>
        <span className="title title--h1">{bannerData[0].info.title.replace(/&nbsp;/g, ' ')}</span>
        <span className="banner__text">{bannerData[0].info.text}</span>
        <a className="btn" href={bannerData[0].info.button.href}>{bannerData[0].info.button.text}</a>
      </p>
    </div>

  /*    <div className="Banner">
      <picture>
        <source type="image/webp" srcSet={bannerData[1].image.webp.srcset} />
        <img src={bannerData[1].image.fallback.src} srcSet={bannerData[1].image.fallback.srcset} width={bannerData[1].image.width} height={bannerData[1].image.height} alt={bannerData[1].image.alt} />
      </picture>
      <p className="banner__info">
        <span className="banner__message">{bannerData[1].info.message}</span>
        <span className="title title--h1">{bannerData[1].info.title.replace(/&nbsp;/g, ' ')}</span>
        <span className="banner__text">{bannerData[1].info.text}</span>
        <a className="btn" href={bannerData[1].info.button.href}>{bannerData[1].info.button.text}</a>
      </p>
    </div>*/

  /*    <div className="Banner">
      <picture>
        <source type="image/webp" srcSet={bannerData[2].image.webp.srcset} />
        <img src={bannerData[2].image.fallback.src} srcSet={bannerData[2].image.fallback.srcset} width={bannerData[2].image.width} height={bannerData[2].image.height} alt={bannerData[2].image.alt} />
      </picture>
      <p className="banner__info">
        <span className="banner__message">{bannerData[2].info.message}</span>
        <span className="title title--h1">{bannerData[2].info.title.replace(/&nbsp;/g, ' ')}</span>
        <span className="banner__text">{bannerData[2].info.text}</span>
        <a className="btn" href={bannerData[2].info.button.href}>{bannerData[2].info.button.text}</a>
      </p>
    </div>*/
  );
}

export default Banner;
