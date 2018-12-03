import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELE_TODO_ITEM} from './store/actionTypes';
class TodoList extends Component{
    render(){
        const {inputValue , changeInputValue,changeListValue,list,handleDele} = this.props;
        return(
           <div>
              <input value={inputValue} onChange={
                  changeInputValue
              }/>
              <button onClick={changeListValue}>提交</button>
              <ul>
                 {
                     list.map((item,index)=>{
                         return(
                             <li key={index} onClick={handleDele}>{item}</li>
                         )
                     })
                 }
              </ul>
           </div>
        )
    }
}
const mapStateToProps = (state)=>{
    // state是store里的数据，映射到inputValue和list
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispathToProps = (dispatch)=>{
    // store.dispatch,props
    return{
        changeInputValue(e){
            const action ={
                type:CHANGE_INPUT_VALUE,
                value:e.target.value
            }
            dispatch(action);
        },
        changeListValue(){
            const action = {
                type:ADD_TODO_ITEM
            }
            dispatch(action);
        },
        handleDele(index){
            const action = {
                type:DELE_TODO_ITEM,
                index:index
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(TodoList);
// 让我的todolist组件与provider的store做连接
// 让我的todolist组件与store做连接，规则在mapStateToProps里，把store里的数据映射给state
// 让我的todolist组件与store做关联，如果想对store里数据做修改，就在mapDispatchProps里修改