function dfw(dayofWeek: number){
    if (dayofWeek === 1) {
        console.log ('สวัสดีวันอาทิตย์')
    }
    else if (dayofWeek === 2) {
        console.log ('สวัสดีวันจัทร์')
    }
    else if (dayofWeek === 2) {
        console.log ('สวัสดีวันอังคาร')
    }
    else if (dayofWeek === 2) {
        console.log ('สวัสดีวันพุธ')
    }
    else if (dayofWeek === 2) {
        console.log ('สวัสดีวันพฤหัสบดี')
    }
    else if (dayofWeek === 2) {
        console.log ('สวัสดีวันศุกร์')
    }
    else if (dayofWeek === 2) {
        console.log ('สวัสดีวันเสาร์')
    }
}
 console.log (ddfw(6))

function sayHi(dayofweek: number){
    switch (dayofweek){
        case 1 :
        console.log('สวัสดีวันอาทิตย์')
        break
        case 2 :
        console.log('สวัสดีวันจันทร์')
        break
        case 3 :
        console.log('สวัสดีวันอังคาร')
        break
        case 4 :
        console.log('สวัสดีวันพุธ')
        break
        case 5 :
        console.log('สวัสดีวันพฤหัส')
        break
        case 6 :
        console.log('สวัสดีวันศุกร์')
        break
        case 7 :
        console.log('สวัสดีวันเสาร์')
        break
    }
}
sayHi(5)

function shirt(size:string){
    switch(size){
        case 's':
        console.log('ผอม')
        break
        case 'm':
        console.log('ผอม')
        break
        case 'l':
        console.log('ท้วม')
        break
        case 'xl':
        console.log('อ้วน')
        break
        case '2xl':
        console.log('อ้วน')
        break
    }
} 
shirt('s')