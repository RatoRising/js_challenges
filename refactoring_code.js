// // Challenge - Given the following code that returns "start, finish, timeout", create a solution that returns "start, timeout, finish".
// const delay = () => setTimeout(() => {
//     console.log('time out');
// }, 1000)
// async function main() {
//     console.log('start');
//     await delay()
//     console.log('finish');
// }
// main()

// My solution - no feedback was given during the live
const delay = () => setTimeout(() => {
    console.log('time out');
    console.log('finish');
}, 1000)

async function myFn() {
    console.log('start');
    await delay()
}
myFn()