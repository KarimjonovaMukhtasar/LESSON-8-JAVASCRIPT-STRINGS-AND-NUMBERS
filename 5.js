/*
5. Misol: Vaqtni Soat va Daqiqaga Ajratish
Vazifa: Foydalanuvchi kiritgan daqiqa miqdorini soat va daqiqaga ajratib chiqarish. Masalan, 135 daqiqa kiritilsa, "2 soat 15 daqiqa" deb chiqariladi.
Talablar:
Daqiqa miqdori butun son bo‘lishi kerak.
Soat = daqiqa ÷ 60 (butun qism), qoldiq daqiqa = daqiqa % 60.
Agar kiritilgan ma‘lumot son bo‘lmasa yoki manfiy bo‘lsa, xato xabarini chiqarish.
Kirish ma‘lumotlari:
Bitta qatorda daqiqa miqdori (string yoki number).
Chiqish ma‘lumotlari:
Soat va daqiqa ko‘rinishidagi natija yoki xato xabari.
Misol:
Kirish: 135
Chiqish: 2 soat 15 daqiqa
Kirish: 45
Chiqish: 0 soat 45 daqiqa
Kirish: -10
Chiqish: Noto‘g‘ri ma‘lumot: Daqiqa manfiy bo‘lmasligi kerak
*/
function timealloc(minutes){
    if (minutes < 0){
        console.log("Chiqish: Noto‘g‘ri ma‘lumot: Daqiqa manfiy bo‘lmasligi kerak")
    }
    else{
        let hour = parseInt(minutes / 60)
        minutes = Math.floor(minutes % 60)
        console.log(`${hour} soat ${minutes} daqiqa`)
    }
}
let minutes = Number(prompt("Enter the time in minutes"))
console.log(timealloc(minutes))