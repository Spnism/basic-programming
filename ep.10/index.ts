console.log('1')
console.log('2')
console.log('3')
setTimeout(() => {
    console.log('4')
})
console.log('5')



function register(email: string, password: string) {
    if (email.includes("@") && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกเเล้ว ยินดีต้อนรับคุณ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว เเละไม่เกิน 16 ตัว')
        }
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}

const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    }
]
/////เขียนฟังชั่นสมัครเข้าใช้ด้วยจีเมลเเละพาสเวิด///////
////validationข้อมูล(emailถูกต้องเเละรหัสผ่านมากกว่า8ตัวเเละไม่เกิน16ตัว)/////////////////
////////เมื่อผ่านเซพข้อมูลเป็นobjectเข้าarray(สมมติว่าเป็นdatabase)/////////////////////
////เรียกใช้ฟังชั่น /// register('email','password')///////////////////////

const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYo+3^^^'
    },
    {
        email:'max@gmail.com',
        password:'12345*7เเปด'
    }
]
function decryPassword(password: string){
    return password.replace('+','u').replaceAll('*','6').replaceAll('^','0')
}



function login(email: string,password: string){
    const user = database.filter(function(element,index){
        return element.email === email
    })
    if (user.length > 0){
        const realPassword = decryPassword(user[0].password)

        if (realPassword === password){
            alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
        }else{
            alert('รหัสผ่านไม่ถูกต้อง  โปรดตรวจสอบ')
        }
    }else{
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('max@gmail.com','1234567เเปด')       
/////////เข้าใช้เว็บไซด์โดยตรวจสอบจีเมลเเละพาสเวิดที่มีในdatabaseอยู่เเล้ว////////////
/////วิธีเรียนfunction////////login('max@gmail.com','1234567เเปด') /////////
///จะเข้าได้ก็ต่อเมื่อมีจีเมลในdatdbase//////////////////////////