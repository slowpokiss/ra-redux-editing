import './App.css'
import { useReducer } from 'react';
import List from './components/List'
import Form from './components/Form'
import formReducer from './redux/formReducer';
import Filter from './components/Filter';
import { initState } from './redux/formReducer';


export interface itemInterface {
  title: string;
  price: undefined;
  currState: string | number;
  items: Array<Object>;
  filteredItems: Array<Object>;
}

export interface actionInterface {
  type: string;
  payload?: any;
}

export interface props {
  state: itemInterface;
  dispatch: (action: actionInterface) => void;
}

function App() {
  const [state, dispatch] = useReducer(formReducer, initState);

  return (
    <div className="app-container">
      <Form state={state} dispatch={dispatch} />
      <Filter state={state} dispatch={dispatch} />
      <List state={state} dispatch={dispatch} />
    </div>
  );
}

export default App
