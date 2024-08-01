function bb(weight : number, height : number){ //ช่องว่าง
    let mbi : number=(weight/(height * height)) //ใส่สูตร
    if (mbi < 18.5){ //ใส่คำตอบ
        return 'ผอม'
    }else if(mbi >= 18.5 && mbi <=22.9){
        return 'ปกติ'
    }else if(mbi >=23 && mbi <=24.9){
        return 'ท้วม'
    }else if(mbi >=25 && mbi <=29.9){
        return 'อ้วน'
    }else if(mbi >30){
        return 'อ้วนมาก'
    }
}
console.log(bb(30,1.63)) //เฉลย
console.log(bb(60,1.63))
console.log(bb(65,1.63))
console.log(bb(70,1.63))
console.log(bb(80,1.63))