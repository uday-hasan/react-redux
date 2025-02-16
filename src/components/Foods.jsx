import { useDispatch, useSelector } from "react-redux";
import { addCartAction } from "../services/actions/cartAction";
import React, { useEffect, useMemo } from "react";
import { getFood } from "../services/actions/foodAction";
import Pagination from "./Pagination";
import Loading from "./Loading";
import FoodItem from "./FoodItem";
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
            <FoodItem
              className={"!disabled:cursor-not-allowed"}
              disabled={carts.find((item2) => item2.idDrink === item.idDrink)}
              item={item}
              handleClick={() => dispatch(addCartAction(item))}
              key={item.idDrink}
              text={"Add to cart"}
            />
          ))}
      </div>
      <Pagination />
    </div>
  );
};

export default React.memo(Foods);
