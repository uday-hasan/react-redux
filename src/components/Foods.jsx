import { useDispatch, useSelector } from "react-redux";
import { addCartAction } from "../services/actions/cartAction";
import React, { useEffect, useMemo } from "react";
import { getFood } from "../services/actions/foodAction";
import Pagination from "./Pagination";
import Loading from "./Loading";
const Foods = () => {
  const { foods, isLoading, foodPerPage, page } = useSelector(
    (state) => state.foodReducer
  );
  const { carts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [start, end] = useMemo(() => {
    const init = Number(page) * Number(foodPerPage);
    return [init, init + Number(foodPerPage)];
  }, [page, foodPerPage]);
  useEffect(() => {
    dispatch(getFood(start, end));
  }, [dispatch, start, end]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center my-2 ">Foods</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
        {foods &&
          foods.map((item) => (
            <div
              key={item.idDrink}
              className="flex flex-col justify-center items-center gap-4"
            >
              <img className="max-w-[300px] " src={item.strDrinkThumb} />
              <p className="font-semibold text-xl ">{item.strDrink}</p>
              <button
                disabled={carts.includes(item)}
                onClick={() => dispatch(addCartAction(item))}
                className="!disabled:cursor-not-allowed"
              >
                Cart
              </button>
            </div>
          ))}
      </div>
      <Pagination />
    </div>
  );
};

export default React.memo(Foods);
