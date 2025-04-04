//calling api using promises
let myPromise=new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1");
    if(fetch){
        resolve("Operation successfully completed using Promises");
    }else{
        reject("Operation failed to complete");
    }
})

myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
   console.log(error)
})

//calling the same api using async/await

async function callApi(){
    let result=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data=await result.json()
    return data;
}
callApi().then((data)=>{
   console.log("Successful Api Call using async/await:",data);
}).catch((error)=>{
    console.log(error)
})