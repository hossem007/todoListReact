import React from 'react'


const TodoCard = ({task,del,comp}) => {

    console.log(task.id)
    return (
        <div>
            <h2 id={task.isDone?'complited':''}>{task.action}</h2>
            <button onClick = {()=>del(task.id)}>Delete</button>
            <button onClick={()=>comp(task.id)} >Complete</button>
        </div>
    )
}

export default TodoCard
