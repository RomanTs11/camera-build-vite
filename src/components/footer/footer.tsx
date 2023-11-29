import footerLogoImg from './../../../markup/img/sprite/icon-logo-mono.svg';
import vkLogoImg from './../../../markup/img/sprite/icon-vk.svg';
import pintererstLogoImg from './../../../markup/img/sprite/icon-pinterest.svg';
import redditLogoImg from './../../../markup/img/sprite/icon-reddit.svg';
import './footer.css';


function Footer() {
  return(
    <div className="footer">
      <div className="container">
        <div className="footer_row">
          <div className="footer_logo">
            <img src={footerLogoImg} alt='footer logo' />
          </div>
          <div className='footer_ad'>
            <ul>
              <li><a href="#!">Интернет-магазин</a></li>
              <li><a href="#!">Фото- и видеотехники</a></li>
            </ul>
          </div>
          <div className='footer_social'>
            <ul>
              <li><a href='#!'></a>
                <img src={vkLogoImg} alt='vk' />
              </li>
              <li><a href='#!'></a>
                <img src={pintererstLogoImg} alt='pinterest' />
              </li>
              <li><a href='#!'></a>
                <img src={redditLogoImg} alt='reddit' />
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
