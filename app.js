

addEventListener("DOMContentLoaded", (e)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        let fragmen = new DocumentFragment();
        for(let datos in res.sprites){
            if(res.sprites[datos]!=null && datos!="other" && datos!="versions"){
                fetch(`${res.sprites[datos]}`)
                .then((res2)=>{
                    return res2.blob();
                })
                .then((res2)=>{
                    let IMG = document.createElement("IMG");
                    IMG.src = URL.createObjectURL(res2);
                    fragmen.appendChild(IMG);

                })
            }
        }
        setTimeout(() => {
            document.body.appendChild(fragmen);
        }, 50);
    })

})





















// const client = new XMLHttpRequest();
// client.responseType = "json";
// client.open("POST", "https://reqres.in/api/users");
// client.addEventListener("load", (e)=>{
//     console.log(e.target.response);
// })
// client.setRequestHeader("Content-type", "application/json; charset=UTF-8");
// client.send(JSON.stringify({
//     "name": "Miguel",
//     "job": "Intructor",
// })); 






// const client = new XMLHttpRequest();
// const promise = new Promise((resolve, reject)=>{
//     if(!localStorage.getItem('datos')){
//         client.open("GET", "https://reqres.in/api/users?page=2");
//         client.send(); 
//         client.addEventListener('load', (e)=>{
//             console.log("peticion");
//             localStorage.setItem('datos', JSON.stringify(e.target.response))
//             return resolve(e.target.response);
            
//         })
//     }else{
//         console.log("local");
//         return resolve(JSON.parse(localStorage.getItem('datos')))
//     }
    
// })
// let time = 1000;
// client.responseType = 'json';
// client.timeout = time;



// promise.then((res)=>{
//     console.log(res);
// })

// // client.addEventListener("readystatechange",(e)=>{
// //     if(e.target.readyState===4 && e.target.status === 200){
// //         console.log(e.target.response);
// //         console.log(e.target.responseURL);
// //         console.log(e.target.timeout);
// //         console.log(e.target.status);
// //         console.log(e.target.statusText);
// //         console.log(e.target.withCredentials);
// //     } 
// // })
// client.addEventListener("timeout", (e)=>{
//     console.log(e.target);
// })



