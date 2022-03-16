import React, {
  useReducer,
  Dispatch,
} from 'react';
import { idText } from 'typescript';

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
    id: '',
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
    case 'removeCard': {
      const queue = state.queue.filter(card => card.id !== payload);
      console.log('removeCard', payload, state.queue.map(({id}) => id));
      localStorage.setItem('bartelby-mono-queue', JSON.stringify(queue))
      return ({
        ...state,
        queue,
      });
    }
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
    case 'setActiveId':
      return ({
        ...state,
        active: {
          ...state.active,
          id: payload,
        }
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