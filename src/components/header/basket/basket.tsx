import basketImg from './../../../markup/img/sprite/icon-basket.svg';

function Basket () {
  return (
    <div className='basket'>
      <img src={basketImg} alt='корзина' />
    </div>
  );
}

export default Basket;
