import { createSlice } from '@reduxjs/toolkit'

// const [todoList, setTodoList] = useState([])


const initialState = {
    todoList: [ ] // = useState([])
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state/* [todoList */,action) => {
            state.todoList.push(action.payload)/* setTodoList */
        }, 
        setCheck: (state,action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true){
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
            } )

        }
    }
});

export const { saveTodo, setCheck } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer