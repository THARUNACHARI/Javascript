class Parent{
    constructor(){
        console.log("parent class constructor")
    }
}
    class Child extends Parent{
        constructor(){
            super()
            console.log("child class Constructor")
        }
    }

new Child()