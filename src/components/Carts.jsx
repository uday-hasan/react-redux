import React, { useCallback } from "react";
import { removeCartAction } from "../services/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
const Carts = () => {
  const { carts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    (id) => {
      dispatch(removeCartAction(id));
    },
    [dispatch]
  );
  return (
    <div>
      <h1 className="my-2 text-center">Carts:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
        {carts.length ? (
          carts.map((item) => (
            <div
              key={item.idDrink}
              className="flex flex-col justify-center items-center"
            >
              <img className="max-w-[300px] " src={item.strDrinkThumb} />
              <p className="font-semibold text-xl ">{item.strDrink}</p>
              <button onClick={() => handleRemove(item.idDrink)}>Remove</button>
            </div>
          ))
        ) : (
          <h1 className="text-xl font-semibold text-red-400">
            No item in cart
          </h1>
        )}
      </div>
    </div>
  );
};

export default React.memo(Carts);
