function prepararPedido(){
    return new Promise((resolve, reject)=>{
        temPao = false;
setTimeout(()=>{
    if (temPao){    
    resolve("Hamburge pronto!");
    }else{
        reject(new Error("Não da para fazer o Hamburge"));
    }
},2000)
    })
}

prepararPedido().then((resultado)=>{
    console.log(resultado)
}).catch((erro) =>{
    console.error(erro.message)
});