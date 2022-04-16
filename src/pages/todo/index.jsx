import TodoList from "./todoList"
import { AddTodoForm } from "./addTodoForm"
import { fetchTodos } from "../../API/fetchTodos"
import React, { useMemo, useEffect } from "react"
import Loader from "../../components/base/loader/Loader"
import { requestWithDelay } from "../../utils/requestWithDelay"

export const TodoPage = () => {
   const [todos, setTodos] = React.useState([])
   const [loading, setLoading] = React.useState(false)

   useEffect(async () => {
      const getTodos = async () => {
         setLoading(true)
         try {
            const todos = await requestWithDelay(fetchTodos, 1000)()
            setTodos(todos)
         }
         catch (e) {
            console.log(e)
         } finally {
            setLoading(false)
         }
      }
      (function () {
         getTodos()
      }())
   }, [])

   function toggleTodo(id) {
      setTodos(
         todos.map(todo => {
            if (todo.id === id) {
               todo.completed = !todo.completed;
            }
            return todo
         }))
   }

   function addTodo(title) {
      setTodos(todos.concat([{
         title: title,
         id: Date.now(),
         completed: false,
      }]))
   }

   function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id))
   }

   const Content = useMemo(() => {
      if (loading) {
         return <Loader />
      }
      if (!todos.length) {
         return <p style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}>No todos!</p>
      }

      return <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
   }, [todos.length, loading, toggleTodo, removeTodo])

   return (
      <React.Fragment>
         <AddTodoForm addTodo={addTodo} />
         {Content}
      </React.Fragment>
   )
}
