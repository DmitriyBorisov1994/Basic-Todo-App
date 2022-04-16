import React from 'react';
import { TodoPage } from './pages/todo'
import './App.css'

//const AddTodo = React.lazy(() => import('./pages/todo/todoPage'))

function App() {
  return (
    <div className='wrapper'>
      <h1 className='heading'>Todo App</h1>
      <React.Suspense fallback={<p>Loading...</p>}>
        <TodoPage />
      </React.Suspense>
    </div>
  );
}

export default App;
