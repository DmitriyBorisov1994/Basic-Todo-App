import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './todoListItem'
import classes from './index.module.css'

function TodoList({ todos, toggleTodo, removeTodo }) {
   return (
      <ul className={classes.ul}>
         {todos.map(
            (todo, index) => {
               return <TodoItem todo={todo} key={todo.id} index={index} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            }
         )}
      </ul>
   )
}
TodoList.propTypes = {
   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
   onToggle: PropTypes.func.isRequired,
   onRemove: PropTypes.func.isRequired
}

export default TodoList