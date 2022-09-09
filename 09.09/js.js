const myCar = {
    make : 'ford',
    model : 'Mustang',
    year : 1965,
    color : 'Black'
}
myCar.age= function(year) {
    console.log(year-myCar.year)
}
myCar.age(2030)
for(let key in myCar){
    console.log(key)
}