import footerLogoImg from './../../../markup/img/sprite/icon-logo-mono.svg';
import './footer.css';


function Footer() {
  return(
    <div className="footer">
      <div className="container">
        <div className="footer_row">
          <div className='footer_socials'>
            <div className="footer_logo">
              <img src={footerLogoImg} alt='footer logo' />
            </div>
            <div className='footer_ad'>
              <ul>
                <li><a href="#!">Интернет-магазин</a></li>
                <li><a href="#!">Фото- и видеотехники</a></li>
              </ul>
            </div>
            <div className='footer_social_links'>
              <ul>
                <li>
                  <a href='#!'>
                    <svg width={20} height={20} aria-hidden="true">
                      <use xlinkHref="#icon-vk" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <svg width={20} height={20} aria-hidden="true">
                      <use xlinkHref="#icon-pinterest" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <svg width={20} height={20} aria-hidden="true">
                      <use xlinkHref="#icon-reddit" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer_nav'>
            <p className="footer__title">Поддержка</p>
            <ul>
              <li><a href='#!'>Каталог</a></li>
              <li><a href='#!'>Гарантии</a></li>
              <li><a href='#!'>Доставка</a></li>
              <li><a href='#!'>О компании</a></li>
            </ul>
          </div>
          <div className='footer_resources'>
            <p className="footer__title">Ресурсы</p>
            <ul>
              <li><a href='#!'>Курсы операторов</a></li>
              <li><a href='#!'>Блог</a></li>
              <li><a href='#!'>Сообщество</a></li>
            </ul>
          </div>
          <div className='footer_support'>
            <p className="footer__title">Поддержка</p>
            <ul>
              <li><a href='#!'>FAQ</a></li>
              <li><a href='#!'>Задать вопрос</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
