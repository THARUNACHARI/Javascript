class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
}
let a1=new Account(101,"sonia",50)//constructor def passing the varaiables
let a2=new Account(102,"Rahul",20)
let a3=new Account(103,"tharun",30)
console.log(a1)//50
console.log(a2)
console.log(a3)///30/102
a1.deposit_Amount(1000)
a2.deposit_Amount(2000)
a3.deposit_Amount(3000)
console.log("********")
console.log(a1)//1050
console.log(a2)
console.log(a3)//2020