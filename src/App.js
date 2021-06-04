import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import ToDoItem from './components/ToDoItem/ToDoItem';

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

const todoList = [
  {
    item: 'todo',
    done: false,
    id: 5142762
  },
  {
    item: 'todo2',
    done: true,
    id: 6125371236
  }
]

function App() {

  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <div className="App_container">
        <div className="App_todoContainer">
          {
            todoList.map(item => (
              <ToDoItem
                name={item.item}
                done={item.done}
                id={item.id} />
            ))
          }
        </div>
        <Input />
      </div>
      {/*   */}
      {/* input */}

    </div>
  );
}

export default App;
