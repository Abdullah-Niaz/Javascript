// const promiseone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise 1 resolved");
//         resolve();
//     })
// });
// promiseone.then(function(){
//     console.log("Promise Completed")
// })

// new Promise(function(resolve,reject){
//     console.log("Promise 2");
//     resolve();
// }).then(function(){
//     console.log("promise 2 completed")
// })


// const promisefour = new Promise(function(resolve,reject){
//     let error  = false;
//     if(!error){
//         resolve({username:'Abdullah',email:"abdullah@gmail.com"});
//     }
//     else{
//         reject("Error Something went wrong");
//     };
// })

// promisefour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("promise is either resolve or rejected")
// })


// const promiseFive = new Promise(function(resolve,reject){
//     let error = false;
//     if(!error){
//         resolve({username:'abdullah',password:'123'})
//     }
//     else{
//         reject("ERROR, Something went wrong")
//     }
// });

// async function resolvepromisefive(){
//     try {
//         const resp = await promiseFive; 
//         console.log(resp);
//     } catch (error) {
//         console.log(error);
//     }
// };
// resolvepromisefive();





fetch("https://randomuser.me/api").then(function (result) { return result.json(); }).then(function (result) { console.log(result) }).catch(function (error) { console.log(error) })