import {
  CHANGE_PRICE,
  CHANGE_TITLE,
  SUBMIT_FORM,
  CLEAR_FORM,
  DElETE_ITEM,
  SET_CURRSTATE,
  FILTER_ITEMS,
  CLEAR_FILTERS
} from "./actions";

export const initState = {
  title: "",
  price: 0,
  items: [],
  filteredItems: [],
  currState: "initial",
};

const formReducer = (state = initState, action: any) => {
  switch (action.type) {
    case CHANGE_PRICE:
      return {
        ...state,
        price: action.payload.value,
      };

    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload.value,
      };

    case CLEAR_FORM:
      return {
        ...state,
        title: "",
        price: 0,
        currState: "initial",
      };

    case SUBMIT_FORM:
      if (state.currState !== "initial") {
        const newItem = state.items[state.currState];
        newItem.title = action.payload.title;
        newItem.price = action.payload.price;

        return {
          ...state,
          items: state.items.map((el, ind) => {
            if (ind === Number(state.currState)) {
              return newItem;
            }
            return el;
          }),
          filteredItems: state.items.map((el, ind) => {
            if (ind === Number(state.currState)) {
              return newItem;
            }
            return el;
          }),
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              title: action.payload.title,
              price: Number(action.payload.price),
            },
          ],
          filteredItems: [
            ...state.items,
            {
              title: action.payload.title,
              price: Number(action.payload.price),
            },
          ],
        };
      }

    case DElETE_ITEM:
      return {
        ...state,
        items: state.items.filter((el, ind) => ind !== action.payload.index),
        filteredItems: state.items.filter((el, ind) => ind !== action.payload.index),
      };

    case SET_CURRSTATE:
      return {
        ...state,
        title: action.payload.title,
        price: action.payload.price,
        currState: action.payload.index,
      };

    case FILTER_ITEMS:
      if (!action.payload.filterValue || action.payload.filterValue !== "") {
        return {
          ...state,
          filteredItems: state.items.filter((el) =>
            el.title.startsWith(action.payload.filterValue)
          ),
        };
      } else {
        return {
          ...state,
          filteredItems: state.items
        };
      }

    case CLEAR_FILTERS: 
      return {
        ...state,
        filteredItems: state.items
      }

    default:
      return state;
  }
};

export default formReducer;
