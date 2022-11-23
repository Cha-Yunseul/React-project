import { Link } from 'react-router-dom';

function CartEmpty() {
  return (
    <>
      <h1 className="text-2xl py-16">장바구니에 물품이 없습니다.</h1>
      <Link to="/" className="btn btn-primary blockmt-10">
        담으러 가기
      </Link>

      <div className="self-start shrink-0 items-center mt-28 mb-56 float-right block">
        <span className="text-xl md:text-2xl">총 : $0</span>
        <label
          htmlFor="confirm-modal"
          className="modal-button btn btn-primary ml-5"
        >
          구매하기
        </label>
      </div>
    </>
  );
}

export default CartEmpty;
