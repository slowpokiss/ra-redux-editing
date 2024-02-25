import { FormEvent, useReducer } from "react";
import {
  CHANGE_PRICE,
  CHANGE_TITLE,
  SUBMIT_FORM,
  CLEAR_FORM,
} from "../redux/actions";
import { props } from "../App";


export default function Form({ state, dispatch }: props) {
  const onCancel = () => {
    dispatch({ type: CLEAR_FORM });
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    let title = ev.target.title.value;
    let price = ev.target.price.value;
    dispatch({ type: SUBMIT_FORM, payload: { title, price } });
    dispatch({ type: CLEAR_FORM });
  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    if (name === "title") {
      dispatch({ type: CHANGE_TITLE, payload: { value } });
    }
    if (name === "price") {
      dispatch({ type: CHANGE_PRICE, payload: { value } });
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={onChange}
          className="input-title"
          required
        />
        <input
          type="text"
          name="price"
          value={state.price}
          onChange={onChange}
          className="input-price"
          required
        />
        <input type="submit" value={"Save"} />
        <button type="button" onClick={onCancel} className="action cancel-btn">
          Cancel
        </button>
      </form>
    </div>
  );
}
