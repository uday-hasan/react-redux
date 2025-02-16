import { useDispatch, useSelector } from "react-redux";
import { SET_PAGINATION } from "../services/constants/foodConstant";
import React from "react";

const Pagination = () => {
  const { foods, page } = useSelector((state) => state.foodReducer);
  const dispatch = useDispatch();
  return (
    <div className="my-8 flex justify-center gap-8 flex-wrap lg:flex-nowrap">
      {new Array(foods.length).fill(" ").map((_, index) => {
        return (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md ${
              index === page && "!bg-[#ffffffde] !text-[#646cff] !font-bold"
            }`}
            onClick={() => dispatch({ type: SET_PAGINATION, payload: index })}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(Pagination);
