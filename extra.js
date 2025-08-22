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
//MAIN PAGE TO DISPLAY COMMANDS
function displayCommands(){
    let request = Number(prompt(```CHOOSE THE NUMBER WHAT DO YOU WANT TO DO>>>> 
      \n 1. ADD: adding a new contact
      \n 2. SEARCH: searching for a contact   
      \n 3. DELETE: deleting a contact       
      \n 4. LIST: observing all contacts
      \n 5. HELP: Seeing the existed commands
      \n 6. EXIT: Exiting the program```))
      if(isNaN(request)){
            console.log("You chose incorrectly, select only numbers")
            displayCommands()
      }
      switch(request) {
      case 1:
            addcontact(contacts)
             break;
      case 2:
            search(contacts)
            break;
      case 3:
            deletecontact(contacts)
            break;

      case 4:
            list(contacts)
            break;
      case 5:
            displayCommands()
            break;
      case 6:
            help()
            break;
      default:
            exit()
}
}
//ADDING A NEW CONTACT
function addcontact(contacts){
      let contact = {}
      name = prompt("ENTER THE NAME OF A CONTACT")
      if(!isNaN(name)){
            name = prompt("ENTER THE NAME CORRECTLY WITH LETTERS")
      }
      else{
            contact.name = name
      }
      number = prompt("ENTER THE PHONE NUMBER OF A CONTACT")
      if(number.length < 13 || !number.startsWith("+")){
            number = prompt("ENTER THE NUMBER CORRECTLY WITH PLUS AT THE BEGINNING AND AT LEAST 13 DIGITS")
      }
      else{
            contact.number = number
      }
      contacts.push(contact)
      console.log("KONTAKT MUVAFFAQIYATLI QO'SHILDI")
      if(confirm("DO YOU WANT TO ADD ANOTHER NEW CONTACT")){
            addcontact(contacts)
      }
      else{
            console.log("CONTACT ADDED SUCCESFULLY!")
            displayCommands()
      }      
}
//SEARCHING A CONTACT
function search(contacts){
      let info = prompt("Enter the searched contact phone number's portion>>>>")
      let check = false
      let res = []
      for(let key of contacts){
            if(key.number.includes(info)){
                  res.push(key)
                  check = true
            }
            else{
                  continue
            }
      }
      if(check === false){
            console.log("NOT FOUND SUCH A CONTACT MATCH")
            displayCommands()
      }
      else{
            console.log(`FOUNDED CONTACTS: ${res}`)
            displayCommands()
      }
}

//DELETING A CONTACT
function deletecontact(contacts){
      let searchname = prompt("ENTER THE NAME TO BE DELETED")
      let phonenumber = prompt("ENTER THE NUMBER TO BE DELETED")
      for(let key of contacts){
            if(key.name === searchname || key.number === phonenumber){
                  let index = contacts.indexOf(key);
                  contacts.splice(index, 1);
                  console.log("CONTACT SUCCESSFULLY DELETED")
                  displayCommands()
            }
            else{
                  console.log("NOT FOUND SUCH A CONTACT, CHECK THE SPELLING")
                  displayCommands()

            }
            
      }
}
//SHOWING THE CONTACT LIST
function list(contacts){
      if(contacts.length === 0){
            console.log("YOU DON'T HAVE ANY CONTACTS YET")
            displayCommands()
      }
      else{
            console.table(contacts)
            console.log(contacts)
            displayCommands()          
      }
}
// HELPING TO FIND THE COMMANDS
function help(){
      let rqst = prompt('ENTER WHICH COMMAND DO YOU WANT TO SEE')
      rqst = rqst.toUpperCase()
      switch(rqst){
            case "ADD":
                  console.log("THIS 'ADD' COMMAND HELPS YOU TO ADD A NEW OR EXISTING CONTACT")
                  displayCommands()
                  break;
            case "SEARCH":
                  console.log("THIS 'SEARCH' COMMAND HELPS YOU TO SEARCH FOR AN EXISTING CONTACT")
                  displayCommands()
                  break;
            case "DELETE":
                  console.log("THIS 'DELETE' COMMAND HELPS YOU TO DEELETE AN EXISTING CONTACT RENEW")
                  displayCommands()
                  break;
            case "LIST":
                  console.log("THIS 'LIST' COMMAND HELPS YOU TO SEE ALL THE CONTACTS")
                  displayCommands()
                  break;
            case "HELP":
                  console.log("THIS 'HELP' COMMAND HELPS YOU TO FIND ALL THE COMMANDS' FUNCTIONS ")
                  displayCommands()
                  break;
            case "EXIT":
                  console.log("THIS 'EXIT' COMMAND HELPS YOU TO EXIT THE PROGRAM")
                  displayCommands()
                  break;
            default:
                  console.log("NOT FOUND SUCH A COMMAND, CHECK THE SPELLING")
      }
      displayCommands()
}
//EXIT 
function exit(){
      console.log("SEE YOU NEXT TIME TO SEE YOU IN OUR PROGRAM!")
      return "HAVE A NICE DAY!"
}
let contacts = []
displayCommands()