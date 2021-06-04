import React, { useState } from 'react'
import s from './Input.module.css'

import {useDispatch} from 'react-redux'
import {saveTodo} from '../../features/todoSlice'

export const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        console.log(`adding todo ${input}`)

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
    }

    return (
        <div className={s.inp}>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={addTodo} > Add </button>
        </div>
    )
}

export default Input