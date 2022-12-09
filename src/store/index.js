import { createStore } from 'redux';
import reducer from '../reducer/index';

export function configureStore(){
    const store = createStore(reducer);
    return store;
}