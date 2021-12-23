import React from 'react'
import { AddTodos } from './AddTodos'
import { Todos } from './todos'

export const Wrapper = ({addTodo , todos , eventDelete }) => {
    return (
        <div>
            <AddTodos addTodo = {addTodo}/>
            <Todos todos ={todos} onDelete = {eventDelete}/>
            
        </div>
    )
}
