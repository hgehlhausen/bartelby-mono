import React, {
  useReducer,
  Dispatch,
} from 'react';

import { CardProps } from '../card/Card';

interface StoreState {
  active: CardProps,
  queue: Array<CardProps>
}

interface Action {
  type: string | Symbol;
  payload?: any
}

const initialQueue = localStorage.getItem('bartelby-mono-queue');

const initialState = {
  active: {
    title: '',
    bar: '',
    rule: '',
    imageUrl: ''
  },
  queue: initialQueue ? JSON.parse(initialQueue) : [],
};

const history = [];

const reducer = (state: StoreState, action: Action) => {
  const { type, payload } = action;
  history.push([type, payload, Date.now()]);
  switch (action.type) {
    case 'pushCard': {
      const queue = [...state.queue, { ...state.active }];
      localStorage.setItem('bartelby-mono-queue', JSON.stringify(queue))
      return ({
        ...state,
        queue,
      });
    }
    case 'setActiveImageUrl':
      return ({
        ...state,
        active: {
          ...state.active,
          imageUrl: payload,
        },
      });
    case 'setActiveBar':
      return ({
        ...state,
        active: {
          ...state.active,
          bar: payload,
        },
      });
    case 'setActiveRule':
      return ({
        ...state,
        active: {
          ...state.active,
          rule: payload,
        },
      });
    case 'setActiveTitle':
      return ({
        ...state,
        active: {
          ...state.active,
          title: payload,
        },
      });
    default:
      return state;
  }
};

let state: StoreState = initialState;
let dispatch: Dispatch<Action> = () => state;

export function useDispatch() {
  return dispatch;
}
export function useSelector(selector: Function) {
  return selector(state);
}

export default function useStore() {
  const [s, d] = useReducer(reducer, initialState);
  state = s;
  dispatch = d;
  return [state, dispatch];
}