"use strict";
// let fullName: string = 'webbrain';
// fullName = 1283   => xato
// let number: number = 128833;
// number = `bu string bo'la olmaydi.`  => xato
// let str: any = 'webbrain';
// str = 'academy';
// str = 123;
// str = [ 12, 3, 4, 4 ];
// str = {
//   name: 'webbrain',
//   status: 'academy',
// }
// console.log( str );
// let arr: any[] = [];
// let b = arr.push( 1, 'webbrain', false, function () { }, {} )
// console.log( Array.isArray( arr ) );
// console.log( arr );
// let arr: [ number, string, object, boolean ] = [ 12, 'wba', {}, false ];
// console.log( arr );
// console.log( Array.isArray( arr ) );
// let arrStr: string[] = [ 'webbrain', 'academy', 'IT Center' ];
// let arrNum: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// console.log( arrStr, arrNum );
// let str: string | number = 'webbrain';
// console.log( str );
// str = 125353
// console.log( str );
// str = false; // Xato
// console.log( str );
// let arr: [ string | number, boolean | any ] = [ 123, {} ]
// arr[ 1 ][ 'name' ] = 'academy';
// console.log( arr );
// let arr: any[ string | number ] = [ 'webbrain', 12345, true, false, {}, [] ];
// Shunda: Union
// let arr: string | number = 123;   // Ko'rinish  Union
// Bunisi: Tuple
// let tuple: [ string, number ][];
// tuple = [
//   [ 'web', 123 ],
//   [ 'aca', 234 ],
//   [ 'itc', 456 ],
// ]
// let tuple: [ string, number ];
// tuple = [ 'web', 123 ];
// Enum
// enum dir {
//   bir,
//   ikki,
//   uch,
//   tort,
// }
// let { bir, ikki, uch, tort } = dir;
// console.log( bir, ikki, uch, tort );
// enum dir {
//   bir = 'A',
//   ikki = 'B',
//   uch = 'C',
//   tort = 'D',
// }
// let { bir, ikki, uch, tort } = dir;
// console.log( bir, ikki, uch, tort );
// enum dir {
//   besh = 5,
//   olti,
//   yetti,
//   sakkiz,
// }
// let { besh, olti, yetti, sakkiz } = dir;
// console.log( besh, olti, yetti, sakkiz );
// type userObj = {
//   name: string,
//   age: number,
//   isMerrid?: any,
// }
// let obj: userObj = {
//   name: 'webbrain',
//   age: 4,
//   // isMerrid: false,
// }
// console.log( obj );
// let num: any = 123;
// let str = <string> num;
// str = 123444; // endi bu xato
// str = 'webbrain'
// console.log( str );
// let str: any = 'web';
// let num = str as number;
// // num = 'academy' --> endi xato
// num = 12345;
// console.log( num );
