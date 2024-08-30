const score = [10,23,26,30,33]

let sum:number = 0

for(let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}
let avg = sum / score.length 
console.log("Total",sum)
console.log("Avg",avg)
//ผลรวม ค่าเฉลี่ย



const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,ศร"
//เปลี่ยน str เป็น Array
const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)



const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,ศร"
//เปลี่ยน str เป็น Array
const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray[3])
//ดึงตัวที่ต้องการออกมา



const myStudentsArray: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,ศร"

console.log(myStudentsArray.toString()) //เปลี่ยนเป็น string



const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[1])//ข้อสอบเก่าดึงนามสกุลออกมา
console.log(fullName.slice(0,fullName.indexOf(' ')))//ข้อสอบเก่าดึงชื่อจริงออกมา



const sas: string = "แมว*หนูแฮมเตอร์*แรคคูน*หนูไจแอน"

const sasArray: string[] = sas.split('*')

console.log(sas)
console.log(sasArray)//เปลี่ยน str เป็น Array



const sas: string = "แมว*หนูแฮมเตอร์*แรคคูน*หนูไจแอน"

const sasArray: string[] = sas.split('*')

console.log("ตั้งต้น",sasArray)

sasArray.pop()//เอาตัวสุดท้ายออก
console.log("เอาตัวสุดท้ายออก :",sasArray)

sasArray.push('ยีราฟ')//ใส่ต่อท้าย
console.log("เอาตัวสุดท้ายออก: ",sasArray)

sasArray.shift()//เอาตัวหน้าออก
console.log("เอาตัวหน้าออก: ",sasArray)

sasArray.unshift('คาปิบาร่า')//ใส่ตัวหน้า
console.log("ใส่ตัวหน้า: ",sasArray)



const fruits = ["banana","Orange","Apple","Mango"]

fruits.sort() //เรียง A - Z 
console.log("เรียง A-Z:", fruits)

fruits.reverse()//เรียงZ-A
console.log("เรียงZ-A",fruits)

const fruitsSlice = fruits.slice(0,2)
console.log("ตัด:", fruitsSlice)



const friends: string = "viwe,ink,elle,pim"
const friendsArray: string[] = friends.split(',')
console.log(friendsArray)
friendsArray.sort() //เรียง A - Z 
console.log("เรียง A-Z:", friendsArray)

friendsArray.reverse()//เรียงZ-A
console.log("เรียงZ-A",friendsArray)

