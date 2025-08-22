/*
4. Misol: Ism va Familiyani Qisqartirish
Vazifa: Foydalanuvchi kiritgan ism va familiyadan qisqartma yasash. Masalan, "Ahmad Rahimov" kiritilsa, "A. Rahimov" chiqariladi.
Talablar:
Matn ikkita so‘zdan iborat bo‘lishi kerak (ism va familiya).
Ismning birinchi harfi olinadi va nuqta qo‘yiladi, familiya o‘zgarmasdan qoladi.
Agar matn ikkita so‘zdan iborat bo‘lmasa, xato xabarini chiqarish.
Kirish ma‘lumotlari:
Bitta qatorda ism va familiya (string).
Chiqish ma‘lumotlari:
Qisqartirilgan ism va familiya yoki xato xabari.
Misol:
Kirish: Ahmad Rahimov
Chiqish: A. Rahimov
Kirish: Zilola Sobirova
Chiqish: Z. Sobirova
Kirish: Jasur
Chiqish: Noto‘g‘ri format: Ism va familiya kiritilishi kerak
*/
function fish(str){
    let check = str.split(" ").map(item=> item.trim())
    if(str.length === 0 || str === null || str === undefined|| check.length < 2){
        return "Noto‘g‘ri format: Ism va familiya kiritilishi kerak"
    }
    else{
    let res = ""
    let both = str.split(" ").map(item => item.trim())
    let name = both[0].slice(0,1)
    let surname = both[1]    
    res = name.concat(".  ", surname)
    return res
}
}
let bio = prompt("Enter the name and surname")
console.log(fish(bio))
