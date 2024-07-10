import React, {useState } from 'react'
import { useTodo } from '../contexts/todoContext'

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const handleSubmit = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }
    return (
        <form onSubmit={handleSubmit}  className="flex">
          <input
              type="text"
              placeholder="Write a Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-lg px-8 py-2 bg-violet-900 text-white border border-white shrink-0 ml-2">
              Add
          </button>
      </form>
    )
}

export default TodoForm
