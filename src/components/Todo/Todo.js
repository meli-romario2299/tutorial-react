import React, { useReducer, useRef } from 'react'


const initialState = [
  // {
  //   id: 1,
  //   tarea: 'Mercar'
  // }
];

const initState = () => {
  return JSON.parse(localStorage.getItem('todos'));
}

const todoReducer = (state, action) => {
  
  switch (action.type) {
    case 'AGREGAR':
      localStorage.setItem('todos', JSON.stringify([...state, action.payload]) );
      return [...state, action.payload]
    case 'DELETE':
      localStorage.setItem('todos', JSON.stringify([...state, action.payload]) );
      return state.filter( todo => todo.id !== action.payload)
    default:
      return state;
  }
}


const Todo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, initState);
  const input = useRef();
  // const [contador, setContador] = useState(0)

  const handleAddTarea = () => {
    console.log(input.current.value);
    dispatch({
      type: 'AGREGAR',
      payload: {
        id: new Date().getTime(),
        tarea: input.current.value
      }
    })
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  return (
    <>
      <div>Todo</div>
      <hr />
      <ul>
        { todos.map( todo => {
          return <>
          <li key={todo.id} > { todo.tarea } </li>
          <button onClick={() => handleDelete(todo.id)} >Borrar</button>
          </>
        } ) }
      </ul>
      <input ref={input} />
      <button onClick={handleAddTarea} >Agregar tarea</button>
    </>
    
  )
}

export default Todo