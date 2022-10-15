const in1 = document.querySelector(".in1");
const in2 = document.querySelector(".in2");
const but1 = document.querySelector(".but1");
const but2 = document.querySelector(".but2");
const tex1 = document.querySelector(".tex1");
const tex2 = document.querySelector(".tex2");

but1.addEventListener("click",()=>{
    tex1.innerHTML=""
    let a= +in1.value
    let b= +in2.value
    for(let i=a;i<=b;i++){

        let x=i.toString().split("").reverse().join("")
        // console.log(x);
        if(x==i){
            tex1.innerHTML += x+ "\n"
            
        }
    }
});
let i;
but2.addEventListener("click",()=>{
    tex2.innerHTML=""
    let a= +in1.value
    let b= +in2.value
    
    for(i=a;i<=b;i++){
        if (perfetNumber(i)){
            tex2.innerHTML += i +"\n"
        }

    }
    
})

const perfetNumber=(num)=>{
    count=0
    for( i=0;i<num;i++){
        if(num % i==0){
            count += i
        }
    }
    if(count==num){
        return count;
    }
    // return count ==num
}