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
//todo //BİLİNMESİ GEREKEN 15 JS ARRAY METODU//
​
01; find();
02; includes();
03; filter();
04; concat();
05; push();
06; join();
07; sort();
08; slice();
09; splice();
10; every();
11; some();
12; reduce();
13; findIndex();
14; entries();
15; map();
