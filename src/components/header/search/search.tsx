import searchImg from './../../../markup/img/sprite/icon-lens.svg';
import './search.css';

function Search() {
  return (
    <div className="search">
      <img src={searchImg} alt='поиск' /> Поиск по сайту
    </div>
  );
}

export default Search;
