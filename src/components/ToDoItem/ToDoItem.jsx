import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

import { useDispatch } from 'react-redux'
import { setCheck } from '../../features/todoSlice'

import s from './ToDoItem.module.css'




const ToDoItem = (props) => {
    
    const displatch = useDispatch()

    const handleChange = () => {
        displatch(setCheck(props.id))
    } 
    
    return (
        <div className={s.todo_item}>
            {/* check box */}
            <Checkbox
                checked={props.done}
                onChange={handleChange}
                color='primary'
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {/* name */}
            <p className={props.done && s.todoItem__done}>{props.name}</p>

        </div>
    )
}

export default ToDoItem
