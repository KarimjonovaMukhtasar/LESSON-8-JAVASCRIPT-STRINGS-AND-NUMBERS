/*
2. Misol: Xarid Chekini Hisoblash
Vazifa: Foydalanuvchi kiritgan mahsulot narxi va miqdoridan umumiy summasini hisoblash. Agar umumiy summa 100,000 so‘mdan oshsa, 10% chegirma qo‘llaniladi.
Talablar:
Narx va miqdor son ko‘rinishida kiritiladi.
Umumiy summa = narx × miqdor.
Agar umumiy summa 100,000 so‘mdan oshsa, chegirma hisoblanadi: chegirmadan keyingi summa = umumiy summa × 0.9.
Natija butun son sifatida chiqariladi.
Agar kiritilgan ma‘lumot son bo‘lmasa, xato xabarini chiqarish.
Kirish ma‘lumotlari:
Ikkita qatorda: birinchisida narx, ikkinchisida miqdor (string yoki number).
Chiqish ma‘lumotlari:
Umumiy summa yoki chegirmadan keyingi summa, yoki xato xabari.
Misol:
Kirish:
50000
3
Chiqish: 150000
Kirish:
60000
2
Chiqish: 108000 (Chegirma qo‘llandi: 120000 × 0.9)
Kirish:
abc
5
Chiqish: Noto‘g‘ri ma‘lumot
*/
function CalcPrice(price,quantity){
    let sum = 0
    if(isNaN(price) || isNaN(quantity)){
        console.log("NOTO'G'RI MA'LUMOT")
    }
    else{
        sum = sum + price * quantity
        if(sum > 100_000){
            let total = sum * 0.9
            console.log(`${total} (Chegirma qo'llandi: ${sum} * 0.9)`)
        }
        else{
            console.log(`${sum}`)
        }
    }
}
let price = Number(prompt("NARXNI KIRITING"))
let quantity = Number(prompt("MIQDORNI KIRITING"))
CalcPrice(price,quantity)