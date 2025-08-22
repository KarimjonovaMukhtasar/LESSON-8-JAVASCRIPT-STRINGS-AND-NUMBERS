/*1. Misol: Parolni Kuchliligi Tekshiruvi
Vazifa: Foydalanuvchi kiritgan parolning kuchliligi tekshiriladi. Agar parol 8 belgidan uzun bo‘lsa, unda kamida bitta katta harf, bitta kichik harf va bitta raqam bo‘lsa, "Kuchli parol" deb chiqarish; aks holda "Kuchsiz parol" deb chiqarish.
Talablar:
Parol string ko‘rinishida kiritiladi.
Parol uzunligi 8 belgidan kam bo‘lmasligi kerak.
Parolda katta harf (A-Z), kichik harf (a-z) va raqam (0-9) mavjudligini tekshirish.
Agar shartlardan biri bajarilmasa, sababini ko‘rsatgan holda xabar chiqarish.
Kirish ma‘lumotlari:
Bitta qatorda parol (string).
Chiqish ma‘lumotlari:
"Kuchli parol" yoki "Kuchsiz parol" xabari, agar kuchsiz bo‘lsa sababi bilan.
Misol:
Kirish: Sal0mDuny0
Chiqish: Kuchli parol
Kirish: salom123
Chiqish: Kuchsiz parol: Katta harf yo‘q
Kirish: SalDun
Chiqish: Kuchsiz parol: 8 belgidan kam
*/
function checkPassword(str){
    let digit = false
    let capital = false
    let common = false
    let char = false
    let size = false
    if(str.length >= 8)
        size = true
        if(/\d/g.test(str) || /[0-9]/.test(str))
        digit = true
        if(/[a-z]/.test(str))
        common = true
        if(/[!@#$%^&*]/.test(str))
        char = true
        if(/[A-Z]/.test(str))
        capital = true
    if(digit && capital && common && char && size)
         return "KUCHLI PAROL" 
    else
          return "PAROLDA BELGI, RAQAM, KATTA VA KICHIK HARFLAR VA KAMIDA 8 TA BELGI QATNASHISHI KERAK!"
}
let password = prompt("PAROLNI KIRITING")
if(confirm("PAROLNI TASDIQLAYSIZMI?")){
    alert(checkPassword(password))
}
else{
   let password = prompt("PAROLNI KIRITING")
   alert(checkPassword(password))
}