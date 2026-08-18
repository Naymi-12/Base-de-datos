/*function WriteInConsole(message){ 
    console.log(message);
 }

 WriteInConsole("Buenas buenas");

 function Sum(a,b){ 
    return a+b;//Devolver valores y cerrar funciones

 }

 const result=Sum(5,10);
 console.log(result);*/

 //funciones lamba
 /*
()=>// es lo mismo que la funcion de arriba

 (message)=>{ 
    console.log(message);
 }



 (a,b)=>{ 
    return a+b;//Devolver valores y cerrar funciones

 }*/

 //Callback (funcion que se pasa como parametro)
/*
 function SayHello(){ 
    console.log("Hello");

 }

 setTimeout(SayHello,3000);

 //O

  setTimeout(()=>  { 
    console.log("Hello");
 } , 3000);

  setTimeout((message)=>  { 
    console.log(message);
 } , 3000);


function sumar(a,b, callback){ 
    let result= a+b;
    callback(result);

 }
 function restar(a,b, callback){ 
    let result= a-b;
    callback(result);

 }

 function multiplicar(a,b, callback){ 
    let result= a*b;
    callback(result);

 }
 //No se hace
 sumar(5,3,(result)=>{
    restar(10,2,(result=>{
        multiplicar(2,3,(result)=>{
            console.log(result);
        })
    }))
 })
*/

//Arreglo de nùmeros
/*
const numbers=[1,2,3,4,5];
//for each-> Ejecuta una funciòn por cada elemento del array
numbers.forEarch((number,index)=>{
    console.log(number,index);
    console.log(number*2);

});

//Map-> Ejecuta una funciòn por cad elemento y retorna un arreglo
//Resultante con la misma longitud

const ages=[11,26,18,22]

const result=ages.map((age,index)=>{
    return age +(index*4);
});

//no es el mejor metodo
/*const result=ages.map((age,index)=>{
    if (age>=18)
        return age 
});

console.log(result);
//filtrar un arreglo

const result=ages.filter((age,index)=>{
    if (age>=18)
        return age 
});

console.log(result);

//FIND-retorna el primer elemento del arrelo que cumpla una condicion
const resultAge = ages.find((age)=>{
    return age ==7;
})
console.log(resultAge);*/
/*
//Una promesa es un objeto que representa un contrato de que algo sucedera en el futuro, ya sea que se cumpla o no
//tiene 3 estados pendiente, exitoso y fallido
                              //callback    funciòn flecha
const promise= new Promise((resolve, reject)=>{
    let condition=true;
    if(condition){
        resolve("la promesa se cumplio");

    } else{
        reject("la promesa no se cumpliò")
    }
});*/


function multiply(a,b){
    return new Promise((resolve, reject)=>{
        if (a<10){
            reject("The numbers must be greather than 10")
        }else{
            resolve(a+20);
        }
    })
}

function divide(value){
    return new Promise((resolve, reject)=>{
        if (value>10){
            reject("The numbers must be less than 10")
        }else{
            resolve(value/2);
        }
    });
}

//versiòn antigua hay una moderna 
//Versiòn moderna
async function asyncFunction() {
    try{
        const resultMultiply=await multiply(5,2);
        const resultSum=await sum(resultMultiply);
         const resultDivide=await divide(resultSum);
         console.log(resultDivide)
    }
    
}