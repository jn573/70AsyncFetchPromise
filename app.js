// async function myFunc() {
//     // return 'hello';
//
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hallo'), 1000)
//     })
//
//         const error = false;
//
//         if (!error) {
//             const res = await promise;
//             return res;
//         } else {
//             await Promise.reject(new Error('Something went wrong'))
//         }
//
//         // const res = await promise
//         // return res
//     }
//
//     myFunc()
//         .then(res => console.log(res))
//         .catch(err=> console.log(err))

// async await using fetch
async function getUsers () {
    // await the response of the fetch call
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');

    // only proceeds when the promise is resolved
    const data = await response.json()
    // only proceeds when the second response is resolved
    return data
}

getUsers().then(users => console.log(users))