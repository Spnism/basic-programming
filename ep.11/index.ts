const database = [
    {
        email: 'max@uyk.ac.th',
        password: 'max@utk1234'
    }
]

function login(email:string,password: string){
    const user = database.filter(function(element,index){
        return element. email === email
    }) 
    if(user.length > 0){
        if (user[0].password=== password){
            console.log('เข้าสู้ระบบเเล้ว')
        }else{
            console.log('รหัสผ่านไม่ถูกต้อง')
        }
    }else{
        console.log('ไม่มีผู้ใช้งานนี้ในระบบ')
    }
}
login('max@uyk.ac.th','max@utk1234')
/////เข้าสู่ระบบที่มีจีเมลอยู่ในระบบอยู่เเล้ว////////
////////////////////////////////////////

function login(email:string,password: string){
    const user = database.filter(function(element,index){
        return element.email === email
    }) 
    if (email.includes("@") && email.lastIndexOf('@') !== email.length - 1) {
        if (user.length > 0) {
            if (atob(user[0].password) === password){
                alert('เข้าสู้ระบบเเล้ว')
            }else{
                alert('รหัสผ่านไม่ถูกต้อง')
            } 
        } else {
            alert('ไม่มีผู้ใช้งานในระบบ')
        }
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}
//////////////อีกเเบบ//////////////////////////

function login(email:string,passwoed:string){
    const user = database.filter(function(element,index){
        return element.email === email
    })
if (!(email.includes("@") && email.lastIndexOf('@') !== email.length - 1)) {
    alert('Mail ไมม่ถูกต้อง')
    return
}
if (user.length === 0){
    alert('ไม่มีผู้ใช้งานในระบบ')
    return
}
if(!(atob(user[0].password) === passwoed)){
    alert('รหัสผ่านไม่ถูกต้อง')
    return
}

alert('เข้าสู่ระบบเเล้ว')

}
login('max@utk.ac.th','maxi@utk1234')

//////////////เข้าสู่ระบบเเบบไม่มีelse////////////////////////
////////ตรวจสอบหลายขั้น////////////////////////////////

///atob=การเเปลงรหัส //////////////////////////////////
////encode=เข้ารหัส//// decode=ถอดรหัส////////////////////

availability: function (){
    return this.data.filter(function (element, index){

    })
}
}
console.log(products.availability())
///////////////////////////////////////////
availability: function (){
    const availableProducts = []
    for (let i = 0; i < this.data.length; i++){
        if (this.data[i].availability === 'Y'){
            availableProducts.push(this.data[i])
        }
    }
    return availableProducts
}
}
console.log(products.availability())
////////////////////////////////////////
SalePrice: function(){
    return this.data.filter(function(element,index){
        return element.availability === 'Y'
    }).map(function(element, index) {
        return ({
            product_name: element.product_name,
            sku: element.sku,
            salePrice: Number(element.price) - element.discount
        })
    })
}
}
console.log(products.availability())
//////////////////////////////////////////