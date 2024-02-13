class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){//using constructor we can passing varaiables r properties arguments to parameter
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
        console.log("Account class constructor")
    }
    get_Details(){
        console.log("GM")
    }
}
let a1= new Account(101,"Rahul",1500)
console.log(a1)
var a2=new Account(102,"sonia,6000")
console.log(a2)
//Account class constructor
//Account { acc_Id: 101, acc_Name: 'Rahul', acc_Bal: 1500 }
//Account class constructor
//Account { acc_Id: 102, acc_Name: 'sonia,6000', acc_Bal: undefined }
