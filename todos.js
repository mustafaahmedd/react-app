import React from 'react'
import { Todoitems } from "./todoitems";

//yahan parameter app.js se pass hokr ata hai 

export const Todos = (props) =>{

    let myStyle = {
        minHeight: "70vh",
        margin:"40px auto"
    }

    return (
        <div className = "container" style = {myStyle}>
            <h3 className ="my-4">My Todos are here: </h3>
            {/*return horahi todoitems.js se hookr  */}
            {/*props.todos.map is like a loop in JSX displaying all the elements in an array */}
            {props.todos.length === 0 ? <p>There are No Todos due for Today</p> : 
            props.todos.map( (todos) => {
                return( 
                    <Todoitems key = {todos.sno} todos ={props.todos} onDelete = {props.eventDelete}/>
                  
                )})
            }
            
        </div>
    )
}
