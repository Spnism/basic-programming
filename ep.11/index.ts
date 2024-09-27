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
        if (atob(user[0].password)=== password){
            console.log('เข้าสู้ระบบเเล้ว')
        }else{
            console.log('รหัสผ่านไม่ถูกต้อง')
        }
    }else{
        console.log('ไม่มีผู้ใช้งานนี้ในระบบ')
    }
}

login('maw@utk.ac.th','maxi@utk1234')

//เข้าสู่ระบบที่มีอีเมลล์