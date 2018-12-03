/*
 * @Author: zhangfanglan 
 * @Date: 2018-12-03 11:37:37 
 * @Last Modified by: zhangfanglan
 * @Last Modified time: 2018-12-03 17:03:07
 */
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELE_TODO_ITEM} from './actionTypes'; 
const defaultState = {
  inputValue: '',
  list: []
}
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }else if(action.type===ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputValue);
    newState.inputValue = '';
    return newState;
  }else if(action.type === DELE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  else{
    return state;
  }
}