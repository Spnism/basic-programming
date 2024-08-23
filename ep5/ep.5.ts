// let sum: number = 0
// let i:  number = 1

// do {
//     sum = sum + i 
//     i++
// }while (i <=31)

// console.log('Total:',sum)

// let sum: number = 0
// for (let i = 1; i <= 31; i++){
//     sum = sum + i
// }
// console.log('Total:',sum)

// let sum: number = 0
// let i: number = 1
// while ( i <= 31){
//     sum = sum + i
//     i++
// }
// console.log('Total:',sum)

// let count:number = 0 

// while(true) {
//     console.log ('โสดว้อย')
//     count++
//     if (count === 10){
        
//     }
// }

// //for (let i = 1; i<= 20; i++) {
// //    console.log('ฉันอายุ'+i+'ปี')
// //}

// //let i : number =1
// //while(i <= 20){
// //    console.log('ฉันอายุ'+i+'ปี')
// //    i++
// //}while (i <= 20)

// let i : number = 1
// while (i <= 20) {
//     console.log('ฉันอายุ'+i+'ปี')
//     i++
// }

// let car1: string = 'Toyota'
// let car2: string = 'Honda'
// let car3: string = 'Susuki'
// let car4: string = 'Yamaha'
// let car5: string = 'Masda'
// const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']
// const num: number[] = [1,2,3,4,5]
// const bool: boolean[] =[true,true,true,true,true,] 

// const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']

// const str: string = 'ชอบก็จัด ประหยัดทำไม'

// console.log(str.charAt(2))

// // const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']

// const str: string = 'ชอบก็จัด ประหยัดทำไม'

// console.log(str[2])

// const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']
// cars[2]= 'Isuzu'
// console.log(cars[2])

// const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']

// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])
// console.log(cars[4])

// const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']

// for (let i = 0; i < 5; i++){
//     console.log(cars[i])
// }

// const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']

// for (let i = 0; 1 < cars.length; i++){
//     if (cars[i] === 'Yamaha') {
//         console.log('รถซื้อแกงจะแรงได้ยังไง')
//     }
// }
// console.log(cars.includes('toyota'))

// const str: string = 'Forth'

// console.log(str.indexOf('X'))


const cars: string[] = ['Toyota','Honda','Susuki','Yamaha','Masda']

for (let i =0; i < cars.length; i++){
    if (cars[i]=== 'Yamaha'){
        console.log('รถซื้อแกงจะแรงได้ยังไง')
    }
}


const bbf: string[] = ['Viwe','L','Pim','ink']

for (let i =0; i < bbf.length; i++){
    if (bbf[i]=== 'Pim'){
        console.log('ไปกินหมูกระทะกัน')
    }
}



 
const num: number[] = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i <=10; i++){
    if (num[i]=== 3 || num[i]=== 5 || num[i]=== 7){
     console.log(0)    
    }else{
        console.log(num[i])  
    }
    
}


const num: number[] = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i < num.length; i++){
    if (num[i]=== 3 || num[i]=== 5 || num[i]=== 7){
    num[i]=0
          
    }
    
}
console.log(num)