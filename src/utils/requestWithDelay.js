export const requestWithDelay = (fn, delay = 0) => {
   return (args) => {
      return new Promise((resolve) => {
         setTimeout(async () => {
            const result = await fn(args)
            resolve(result)
         }, delay)
      })
   }
}