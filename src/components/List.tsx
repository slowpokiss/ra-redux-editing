import { DElETE_ITEM, SET_CURRSTATE, CLEAR_FORM } from "../redux/actions";
import { props } from "../App";
import { useEffect } from "react";

export default function List({ state, dispatch }: props) {
  const deleteItem = (index: number) => {
    dispatch({ type: DElETE_ITEM, payload: { index } });
    dispatch({ type: CLEAR_FORM });
  };

  const editItem = (price: number, title: string, index: number) => {
    dispatch({ type: SET_CURRSTATE, payload: { price, title, index } });
  };

  // let currentItemsList = state.items;
  // useEffect(() => {
  //   if (state.filteredItems.length > 0) {
  //     currentItemsList = state.filteredItems;
  //   }
  // }, [state.filteredItems])

  return (
    <div className="list-container">
      <ul className="list">
        Список
        {state.filteredItems.map((el: any, ind: number) => {
          return (
            <li className="list-item" key={ind}>
              <div className="item-title">{el.title}</div>
              <div className="item-price">{el.price}</div>
              <div className="item-actions">
                <button
                  className="action action-edit"
                  onClick={() => editItem(el.price, el.title, ind)}
                >
                  &#9998;
                </button>
                <button
                  className="action action-delete"
                  onClick={() => deleteItem(ind)}
                >
                  &#10006;
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
