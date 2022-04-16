
export const fetchTodos = async (args = {}) => {
   const { limit = 5 } = args
   const result = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
   return await result.json()
}