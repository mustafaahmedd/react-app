import React from 'react'

export const Todoitems = (props) => {
    return (
        <>
        <div>
            <p>dsakjndkjsan kl dksadjsna    </p>
        <h4>{props.todos.sno}  {props.todos.title}</h4>
        <p>{props.todos.desc}</p>

        {/* function pass : onDelete and function call : onDelete() 
        when we call funtion here directly without any mapping then
        it just gets called on the time of renderring but 
        we need to pass it and then call it on the event   */}
        <button className = "btn btn-sm btn-danger my-2"
        onClick = { () => {props.eventDelete(props.todo)}}>
        Delete</button>            
        </div>
        <hr/>
        </>
    )
}
