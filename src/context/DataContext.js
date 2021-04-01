import { useContext, createContext, useReducer } from "react";
import { reducerFunc, initialState } from "../reducer/reducer";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <DataContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        cartTotal: state.cartTotal,
        wishlist: state.wishlist,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
