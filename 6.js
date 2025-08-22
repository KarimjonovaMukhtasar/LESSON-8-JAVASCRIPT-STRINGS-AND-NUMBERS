/*
6. Misol: Matndagi Harfni Takrorlash Sonini Hisoblash
Vazifa: Foydalanuvchi kiritgan matn va harfdan ushbu harfning matnda nechta ekanligini hisoblash.
Talablar:
Matn va harf string ko‘rinishida kiritiladi.
Harf faqat bitta belgi bo‘lishi kerak.
Katta va kichik harflar bir xil deb hisoblanadi (masalan, "A" va "a" bir xil).
Agar harf matnda bo‘lmasa, 0 chiqariladi.
Kirish ma‘lumotlari:
Birinchi qatorda matn, ikkinchi qatorda harf (string).
Chiqish ma‘lumotlari:
Harfning matndagi soni (number).
Misol:
Kirish:
Salom Dunyo
o
Chiqish: 2
Kirish:
Hello World
L
Chiqish: 3
Kirish:
Test
x
Chiqish: 0
*/
function frequency(str, char){
    const frequencies = {}
    let arr = str.split("").map(item=>item.trim())
    arr.forEach(item => {
        frequencies[item] = (frequencies[item] || 0) + 1;
    })
    let check = false
    for(let key in frequencies){
        if(key === char){
            console.log(frequencies[key])
            check = true
            break
        }
    }
    if(check === false){
        console.log(0)
    }
}
let input = prompt("ENTER THE SENTENCE")
let char = prompt("ENTER THE ITEM BEING LOOKED UP")
frequency(input,char)