let conditions=true;
const greet=new Promise((reslove, reject)=>{
    setTimeout(()=>{
        if (conditions){
            reslove ("Hello")

        }else{
            reject ("This condition faild")
        }
    },2000);
});
greet.then((result)=>{
    console.log(result);
})
.catch(function(error){
    console.log(error);
});