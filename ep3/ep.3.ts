function helloWorld() {
        console.log("สวัสดี");
}

helloWorld()// ไม่มี input ไม่มี output

function helloName (name:string){
        console.log(name)
}

helloName('Max')//มี input ไม่มี output

function getPi() {
    return 3.14
}
console.log(getPi())//ไม่มี input มี output

function st(fname: string, sname: string) {
    if (fname === 'mix' || sname === 'zane'){ //@@ และ || หรือ
        console.log('เริ่มสอน')
    }else{
        console.log('ไม่สอน')
    }
}
st('mix', 'zane')

function st(fname: string, sname: string, lname: string) {
    if (fname === 'mix' && sname === 'zane' || lname === 'forth'){ //@@ และ || หรือ
        console.log('พร้อมเรียน')
    }else{
        console.log('ยังไม่พร้อม')
    }
} 
st('mix', 'zane','forth')function st(fname: string, sname: string, lname: string) {
    if (fname === 'mix' && sname === 'zane' || lname === 'forth'){ //@@ และ || หรือ
        console.log('พร้อมเรียน')
    }else{
        console.log('ยังไม่พร้อม')
    }
} 
st('mix', 'zane','forth')

function st(fname: string, sname: string, lname: string) {
    if (fname === 'mix' || sname === 'zane' && lname === 'forth'){ //@@ และ || หรือ
        console.log('พร้อมเรียน')
    }else{
        console.log('ยังไม่พร้อม')
    }
} 
st('mix', 'zane','forth')

function st(sex: string, height: number, weight: number) {
    if ((sex === 'man' && (height > 170) || weight >50 && weight <=110)){
        console.log('จับใบดำใบแดง')
    }else{
        console.log('ไม่เข้าเกณฑ์')
    }
} 
st('man', 170,90

)

function officail(age: number, salary: number, totle: number) {
    if ((age >= 16 && (salary < 70000) && totle <500000)){
        console.log('รับ 10000 บาท')
    }else{
        console.log('อด...')
    }
} 
officail(19, 50000,90000)