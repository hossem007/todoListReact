import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({list,del,comp}) => {

    
    return (
        <div>
            
            {list.map((el,i)=>

                <TodoCard key={i} task={el} del={del} comp={comp} />

               )
            }
            
        </div>
    )
}

export default TodoList
