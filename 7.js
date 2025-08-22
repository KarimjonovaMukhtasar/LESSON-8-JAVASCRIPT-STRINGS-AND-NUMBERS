/*
7. Misol: Pulni Valyutaga Konvertatsiya Qilish
Vazifa: Foydalanuvchi kiritgan so‘m miqdorini dollarga konvertatsiya qilish. Kurs: 1 USD = 12,500 UZS.
Talablar:
Pul miqdori butun son bo‘lishi kerak.
Natija o‘nlik son sifatida 2 kasrgacha yaxlitlanadi.
Agar kiritilgan ma‘lumot son bo‘lmasa yoki manfiy bo‘lsa, xato xabarini chiqarish.
Kirish ma‘lumotlari:
Bitta qatorda so‘m miqdori (string yoki number).
Chiqish ma‘lumotlari:
Dollar miqdori yoki xato xabari.
Misol:
Kirish: 125000
Chiqish: 10.00 USD
Kirish: 50000
Chiqish: 4.00 USD
Kirish: abc
Chiqish: Noto‘g‘ri ma‘lumot
*/
function convertcurrency(amount){
    if(isNaN(amount)){
       console.log("Noto‘g‘ri ma‘lumot")
    }
    else{
        let res = amount / 12_500
        console.log(`${(res.toFixed(2))} USD`)
    }
}
let amount = Number(prompt("Enter the amount of Currency"))
convertcurrency(amount)

