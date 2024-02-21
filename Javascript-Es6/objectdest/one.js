let state ={
    product:{
        pid:"p101",
        pname:"Iphone 18",
        price:45000,
        colors:["white","black","red"]
    },
    status:true,
    count:100,
}
let {count,status,product}=state
let {pid}=product
console.log(count)
console.log(status)
console.log(pid)