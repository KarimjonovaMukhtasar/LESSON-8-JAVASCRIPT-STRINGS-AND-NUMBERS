/*
Loyiha Nomi: Kontakt/Telefon Kitobi (Phone Book)
Loyiha Shartlari:
1. Komandalarni Ko'rsatish (Display Commands)
Ta'rif:
Foydalanuvchi tizim bilan qanday komandalar orqali o'zaro aloqada bo'lishini bilishi uchun mavjud komandalarni chiqarish.
Talablar:
Dastur ishga tushganda yoki ma'lum bir komandani kiritganda, barcha mavjud komandalar ro'yxatini ko'rsatishi kerak.
Har bir komandani qisqacha tavsiflash.
Mavjud Komandalar:
Mavjud komandalar:
- add: Yangi kontakt qo'shish
- search: Kontaktni qidirish
- delete: Kontaktni o'chirish
- list: Barcha kontaktlarni ko'rsatish
- help: Mavjud komandalarni ko'rsatish
- exit: Dasturdan chiqish
2. Kontakt Qo'shish (Add Contact)
Ta'rif:
Foydalanuvchi ism va telefon raqamini tizimga qo'shishi kerak.
Talablar:
Foydalanuvchi dan kontaktning ismi va telefon raqami so'ralishi.
Kiritilgan ma'lumotlar to'g'ri formatda ekanligini tekshirish (masalan, telefon raqami faqat raqamlardan iborat bo'lishi).
Yangi kontaktni mavjud kontaktlar ro'yxatiga qo'shish.
Misol:
Komanda: add
Ism: Alice
Telefon: 1234567890
Kontakt muvaffaqiyatli qo'shildi!
3. Kontakt Qidirish (Search Contact)
Ta'rif:
Foydalanuvchi berilgan 3 yoki 4 raqam bilan mos keladigan barcha telefon raqamlarini qidirishi va ularning tegishli kontaktlarini ko'rsatishi kerak.
Talablar:
Foydalanuvchi dan qidiruv uchun qisqa telefon raqami (3 yoki 4 raqam) so'ralishi.
Tizimda kiritilgan raqam bilan mos keladigan barcha kontaktlarni qidirish.
Topilgan kontaktlarni konsolga chiqarish.
Agar hech qanday kontakt topilmasa, mos keladigan kontakt yo'qligini bildirish.
Misol:
Komanda: search
Qidirilayotgan raqam (3-4 raqam): 123
Topilgan kontaktlar:
- Alice: 1234567890
- Bob: 9123456789
4. Kontakt O'chirish (Delete Contact)
Ta'rif:
Foydalanuvchi mavjud kontaktni telefon raqami yoki ismi orqali o'chirishi kerak.
Talablar:
Foydalanuvchi dan o'chiriladigan kontaktning ismi yoki telefon raqami so'ralishi.
Tizimda kiritilgan ma'lumotga mos keladigan kontaktni qidirish.
Topilgan kontaktni ro'yxatdan o'chirish.
Agar hech qanday kontakt topilmasa, mos keladigan kontakt yo'qligini bildirish.
Misol:
Komanda: delete
O'chiriladigan kontakt ismi yoki raqami: Alice
Kontakt muvaffaqiyatli o'chirildi!
5. Barcha Kontaktlarni Ko'rsatish (List Contacts)
Ta'rif:
Foydalanuvchi barcha mavjud kontaktlarni ko'rishi kerak.
Talablar:
Mavjud kontaktlar ro'yxatini tartibli tarzda konsolga chiqarish.
Agar telefon kitobi bo'sh bo'lsa, bunga tegishli xabar ko'rsatish.
Misol:
Komanda: list
Barcha kontaktlar:
- Alice: 1234567890
- Bob: 0987654321
- Charlie: 5551234567
6. Mavjud Komandalarni Ko'rsatish (Help)
Ta'rif:
Foydalanuvchi help komandasi orqali mavjud komandalarni ko'rishi mumkin.
Talablar:
Mavjud komandalar ro'yxatini va ularning qisqacha tavsifini ko'rsatish.
Misol:
Komanda: help
Mavjud komandalar:
- add: Yangi kontakt qo'shish
- search: Kontaktni qidirish
- delete: Kontaktni o'chirish
- list: Barcha kontaktlarni ko'rsatish
- help: Mavjud komandalarni ko'rsatish
- exit: Dasturdan chiqish
7. Dasturdan Chiqish (Exit)
Ta'rif:
Foydalanuvchi exit komandasi orqali dasturdan chiqishi mumkin.
Talablar:
Dasturdan chiqishda foydalanuvchiga xabar ko'rsatish va dastur ish faoliyatini to'xtatish.
Misol:
Komanda: exit
Dasturdan chiqish...
Qo'shimcha Talablar:
Ma'lumotlarni Saqlash:
Kontaktlar ob'ektlar orqali saqlanadi.
Barcha kontaktlar bitta ob'ektda yoki massivda saqlanishi mumkin.
Foydalanuvchi Interfeysi:
Dastur browser (prompt, console) orqali ishlaydi.
Foydalanuvchi qulayligi uchun komandalar va ularning tavsiflari ko'rsatiladi.
Xatoliklarni Boshqarish:
Noto'g'ri komandalarni kiritishda foydalanuvchiga xato haqida ma'lumot berish.
Telefon raqami formatini tekshirish va xato bo'lsa, qayta so'rash.
+998941234567
      yoki
941234567
*/