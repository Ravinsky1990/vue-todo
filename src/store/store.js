import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos:[],
        filters:{
            text: '',
            all: true,
            done: false,
            undone: false
        },
        sorting:{
            ascending: false,
            descending: true,
        }
    },
    mutations:{
        addTodo(state, todoItem){
            state.todos = [...state.todos, todoItem]
        },
        deleteTodo(state, todoToRemove){
            let filtered = state.todos.filter((todo)=>{
                return todo.id !== todoToRemove.id
            });
            state.todos = [...filtered]
        },
        markAsDone(state, DoneTodo){
            return state.todos.map((todo)=>{
                if (todo.id == DoneTodo.id){
                    todo.done = true;
                    return todo
                }else{
                    return todo
                }
            })
        },
        changeFilterProp(state, type){
            state.filters = {...state.filters};
            for (let key in state.filters){
                if(key == type){
                    state.filters[key] = !state.filters[key];
                }else if(key == 'text'){
                    //nothing to do
                }
                else{
                    state.filters[key] = false
                }
            }
        },
        changeSortingProp(state, type){
            state.sorting = {...state.sorting};
            for (let key in state.sorting){
                if(key == type){
                    state.sorting[key] = !state.sorting[key];
                }else{
                    state.sorting[key] = false
                }
            }
        },
        changeFilterText(state, text){
            state.filters = {...state.filters, text:text}
        }
    }
})