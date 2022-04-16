import React, { useState } from 'react';
import PropTypes from 'prop-types'
import classes from "./index.module.css"

export function AddTodoForm({ addTodo }) {
   const [value, setValue] = useState('');

   function submitHandler(event) {
      event.preventDefault();
      if (value.trim()) {
         addTodo(value)
         setValue('')
      }
   }

   return (
      <form className={classes.formBlock} onSubmit={submitHandler}>
         <input className={classes.formInput} value={value} onChange={(event) => setValue(event.target.value)}></input>
         <button className={classes.formButton} type='submit'>Add todo</button>
      </form>
   )
}

AddTodoForm.propTypes = {
   onCreate: PropTypes.func.isRequired
}