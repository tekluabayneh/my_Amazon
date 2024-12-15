import { Type } from "../action.type";
export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const isExistItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (!isExistItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      let itemIndex = state.basket.findIndex((item) => item.id === action.id);
      if (itemIndex !== -1) {
        let updatedBasket = [...state.basket];

        if (updatedBasket[itemIndex].amount > 1) {
          updatedBasket[itemIndex].amount -= 1;
        } else {
          console.log("Removing item from basket");
          updatedBasket.splice(itemIndex, 1);
        }
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case Type.EMPTY_BASKET:
      return {
        ...state,
        user: [],
      };
    default:
      return action;
  }
};
