# batch4-assignment-1

## blog-2 : How to handle asynchronous operations using async/await over callback/promise TypeScript.

Asynchronous programming plays an important role when doing tasks like fetching typescript data or reading files or making api calls from the server. In this blog we will look at the difference between callback, promise, and async/await. There are several methods for handling asynchronous operations in TypeScript, why async/await is the popular and generally best method as a modern and efficient way to handle asynchronous operations.

### Callbacks:
Before promises and async/await came along, asynchronous code was handled with callbacks in JavaScript. A callback is a function that is passed as an argument to another function and is executed after the asynchronous operation completes. However, this method suffers from the problem of "callback hell", where the code is difficult to read and understand.
Having more complex nested code in function arguments or using more callbacks makes the code complex and difficult. As a result, debugging is also difficult.

### Promises:
Fixed issues with promise callbacks. A promise represents a value that can be received in the present or in the future. Promises help chain multiple asynchronous operations and are easier to read than callbacks.
- Chaining: Promises can be chained using the .then() method, which makes the code easier to read.
- Error handling: Errors can be handled in promises using .catch() or .finally() methods.
- Promise Hell : Although promises are better than callbacks, chaining too many .then() calls can lead to the "promise hell" problem, where the code becomes complicated again.

### async/await:
ECMAScript 2017 (ES8) introduced async/wait, which allows asynchronous code to be written in a synchronous way, making the code easier to read and maintain. It is based on promises, but provides a cleaner syntax for handling asynchronous operations.`async` functions declared with the `async` keyword always return a promise. await can only be used within an async function. `await` the `await` expression stops the execution of the asynchronous function and waits until the promise is resolved or rejected.
- Synchronous way: async/await synchronous, that is, asynchronous code can be written one after the other, which is easier to read.
- Error handling: Error handling is easy using try/catch blocks. Callback/Promise Hell is avoidable

### Main and Last Point : 
Callbacks and promises used to be popular methods for asynchronous operations, async/await is now the modern and preferred method. It makes code easier to read, makes error handling easier, and allows for cleaner code to be written. Since TypeScript is derived from JavaScript, TypeScript projects can handle asynchronous operations by using async/await to handle asynchronous tasks.
