let list = [21,32,16,4,6]
let tam =[]
let asilarr=[]
list.map(x => {

  for (i = 1; i <= x; i++) {
    if (x % i == 0) {
      tam.push(i);
    }
  }
  asilarr.push(tam)
  tam=[]
})  
console.log(asilarr)
console.log(list.length)


let sonlist=[]
for (i = 0; i <list.length; i++) {
  
// console.log(asilarr[0])
    // console.log(asilarr[i].reduce((a,b) => a+b ,0))
    // console.log(asilarr[i].length)
    if (asilarr[i].length == 4) {
       özkan =asilarr[i].reduce((a,b) => a+b ,0)
       sonlist.push(özkan)
    //    console.log(özkan)
    }
  }
console.log(sonlist)
// console.log(özkan)