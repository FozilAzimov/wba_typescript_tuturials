// TypeScript - nima ?
// TypeScript - JavaScript code larining type ni aytuvchi, aniqlab beruvchi script hisoblanadi.

// biz TypeScript ni o'rnatish uchun terminalga quyidagicha code yozamiz.
// ' npm install typescript -g '

// Birinchi bo'lib terminalga ' tsc -v ' deb typescript versiyasini tekshiriladi. Versiyasi chiqishi typescript ning o'rnaganini bildiradi.
// Keyn ' tsc --init ' deb typescript config file ni yaratiladi. Bu config file ni ichida ' es2016 ' ni ' es6 ' ga o'zgartirib terminalga ' tsc --watch ' degan buyruq beriladi.
// Bu TypeScript da yozilgan barcha code larimizni JavaScriptga to'xtamay compiler qilib turadi. Ya'ni ' index.ts ' file imizni to'xtamay kuzatib turadi.
// Biz endi doim typescript file ga code yozadigan bo'lsak u avtomatk ravishda javascript code ga compile bo'ladi.

// biz ma'lumotlarning typeni qatiy belgilab qo'yishimiz kerak.
// agar biz veriable yaratib qiymat type nima bolishini aytmasak, u veriablega birinchi qanday qiymat biriktirilsa anashu qiymatning typeni o'zlashtiradi.
// Qolganlarida type nima ekanligini aytib ketiladi.

// Misol:
// let str: string = 'webbrain';   // String uchun
// let num: number = 12456;  // Number uchun

// Agar veriable ixtiyoriy type ni qabul qilsin deyilsa - ' any ' type orniga yoziladi.
// Misol:
// let age: any = 22;
// age = 'yigirma ikki';
// age = [ 22, 23, 24 ];
// age = {
//   name: 'webbrain',
//   age: 22,
// }
// Manashu ko'rinishda bajariladi.

// verable ga array biriktirish ikki xil usulda bo'ladi.
// 1). let arr: any[] = [];
// 2). let arr: [] = [];

// Ikkisida ham array yaratiladi.
// any kalit so'zi bilan yaratilgan arrayga barcha typedagi qiymatlarni biriktirsak bo'ladi.
// any kalit so'zi yozilmagan arrayda esa biz ikki nuqtadan keyingi kvadrat qavs ichiga arrayga biriktiriladigan qiymat typelarini yozib qo'yishimiz kerak.
// ya'ni:
// let arr: [string, number, boolean] = ['webbrain', 2019, true];
// Manashu ko'rinishda array ichidagi qiymatlar va ularning sonini birinchi kvadrat qavs belgilab beradi.

// Agar biz array ichidagi qiymatlarning hammasi faqat string yoki number bo'lsin deydigan bo'lsak:
// let arr: string[] = [];
// let arr: number[] = [];
// deb array yaratishimiz kerak bo'ladi.


// Union

// Bu yerda biz array ichidagi qiymatni boshqacha ko'rinishda cheklab qo'yishimiz mumkin. Soni ni ham va typeni ham.
// Misol:
// let arr: [string|number] = ['web', 'academy', 123, 1333]

// Lekin any deb kalit so'z qo'shsak bu ixtiyoriy data type ni qabul qiladi va uning soni cheklanmagan.
// Misol:
// let arr: any[string, number] = [1,2,3,4,5,6,7,8,9,'web','academy',true,false,[],{}];


// Tuple
// let tuple: [ string, number ][];
// tuple = [
//   [ 'web', 123 ],
//   [ 'aca', 234 ],
//   [ 'itc', 456 ],
// ]
// Ichma ich joylashgan array kabi joylashadi.

// Enum
// Bizga enum har doim default ' 0 ' noldan boshlanadigan qiymat yasab beradi.

// biz ma'lumotlarni ko'proq biriktiradigan bo'lsak ularning typelari ko'p bo'ladigan bo'lsa quyidagicha bajarsak bo'ladi.

// type userObj{
//   name: string,
//   age: number,
//   isMerred: boolean,
// }

// let obj: userObj = {
//   name: 'webbrain',
//   age: 4,
//   isMerred: false,
// }
// Shu holatda ma'lumot biriktirsak bo'ladi.

// agar mavjud bo'lmagan qiymatni ham type ni aytgan bo'lsak biz optional chaining('?') belgidan foydalanamiz.

// type userObj{
//   name: string,
//   age: number,
//   isMerred: boolean,
//   year?: any,
// }

// let obj: userObj = {
//   name: 'webbrain',
//   age: 4,
//   isMerred: false,
// }
// Manashu holatda

// Bir data typeni meros qilib olish uchun quyidagicha code yoziladi.
// let num: any = 2001;

// let str = <string>num;

// console.log( str );

// str = 'webbrain';

// console.log( str );