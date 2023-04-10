import React from "react";
import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

// step 1: initial state
const FilterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

// step 2: context
const FilterContext = createContext(FilterInitialState);

// step 3: provider
export const FilterProvider = ({ children }) => {
  // step 4: dispatch
  const [state, dispatch] = useReducer(filterReducer, FilterInitialState);

  function initialProductList({ products }) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: state.products,
      },
    });
  }

  const value = {
    productList: FilterInitialState.productList,
    initialProductList,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
