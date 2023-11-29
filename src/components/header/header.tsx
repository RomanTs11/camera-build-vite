import './header.css';
import logoImg from './../../../markup/img/sprite/icon-logo.svg';
import basketImg from './../../../markup/img/sprite/icon-basket.svg';
import searchImg from './../../../markup/img/sprite/icon-lens.svg';

function Header () {
  return(
    <header className= 'header'>
      <div className='container>'>
        <div className='header_row'>
          <div className='header_logo'>
            <img src={logoImg} alt='Logo' />
          </div>
          <nav className='header_nav'>
            <ul>
              <li><a href='#!'> Каталог</a></li>
              <li><a href='#!'> Гарантии</a></li>
              <li><a href='#!'> Дотсавка </a></li>
              <li><a href='#!'> О Компании</a></li>
            </ul>
          </nav>
          <div className='header_search'>
            <img src={searchImg} alt='корзина' /> Поиск по сайту
          </div>
          <div className='basket'>
            <img src={basketImg} alt='корзина' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
