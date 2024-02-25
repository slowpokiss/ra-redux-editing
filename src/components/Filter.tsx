import { props } from "../App"
import { FILTER_ITEMS, CLEAR_FILTERS} from "../redux/actions";


export default function Filter({ state, dispatch }: props) {



  const onInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: CLEAR_FILTERS})
    dispatch({type: FILTER_ITEMS, payload: {filterValue: ev.target.value}})
  }

  return (
    <div className="container-filter">
      <form className="form-filter">
        <input type="text" name="filter" required onInput={onInput}/>
      </form>
    </div>
  )
}