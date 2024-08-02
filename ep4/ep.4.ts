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

const x : number =2
const y : number =5

console.log(x+y)

function fixedDecimal(n: number, digit: number){
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(40.67676,20))

function fixedDecimal(n: number){
    return n.toLocaleString()
}
console.log(fixedDecimal(1000000))


const str :string = "Hello"

console.log(str.charAt(0))

const str :string = "Hello"

console.log(str.trimStart   ())

const str :string = "Hello"

console.log(str.trimEnd   ())

const str :string = "Hello"

console.log(str.trim())

const str :string = "Sunisa"

console.log(str.toUpperCase())

const str :string = "Sunisa"

console.log(str.toLowerCase())


function checkStringLength(str: string){
    
    console.log(str.length)
}
checkStringLength("sunisa")


function getChar (d : string, k : number){
    return d.charAt(k)
}
console.log(getChar('ช่วยด้วย', 3))



const str : string = 'อยากกลับบ้าน'

console.log(str.indexOf('ก'))



const str : string = 'ฉันรักเธอ'

console.log(str.includes('รัก'))




function falling (str : string,rts : string){
    if (str.includes(rts)){
        console.log(str.indexOf(rts))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }

}
falling('อยากกลับบ้าน','h')

