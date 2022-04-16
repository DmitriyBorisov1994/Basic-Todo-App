import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css'

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
   let classes = [];
   if (todo.completed) {
      classes.push('done')
   }
   return (
      <li className={styles.li}>
         <span className={classes.join(' ')}>
            <input type='checkbox' className={styles.input} onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
            <strong>{index + 1}:</strong>
            &nbsp;
            {todo.title}
         </span>
         <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
      </li>
   )
}
TodoItem.propTypes = {
   todo: PropTypes.object.isRequired,
   index: PropTypes.number,
   onChange: PropTypes.func.isRequired,
   onRemove: PropTypes.func.isRequired
}
export default TodoItem