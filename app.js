// Bài 1: Viết chương trình cộng hai số
/* 
function sum(){
    let a = Number(prompt("Nhập vào số đầu tiên:"))
    let b = Number(prompt("Nhập vào số thứ hai:"))
    let c = a + b
    return console.log(c);
    
}sum()
 */
// Bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return
/* 
function tongCacSoLe(){
    let array = [1,2,3,4,5,6,7]
    let c = 0
    for (i=0; i<array.length; i++){
        if (Number(array[i]) % 2 === 1){
            c = c + Number(array[i])
        }
    }console.log(c);
}tongCacSoLe()
*/

// Ex 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.
/* 
function binhPhuong() {
    let userInput = prompt("Nhập vào một số bất kì");
    let c = Math.pow(userInput, 2);
    console.log(c);
}binhPhuong()
*/

// EX 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.
/* 
function tinhHinhTron (){
    let r = Number(prompt("Nhập bán kính của hình tròn:"))
    let cv = 2 * r * Math.PI
    let dt = r * r * Math.PI
    console.log(`Diện tích hình tròn là: ${dt} 
Chu vi hình tròn là: ${cv} `);
}tinhHinhTron ()
*/

// EX 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.
/* 
function tinhGiaiThua(){
    let userInput = Number(prompt("Nhập vào một số muốn tính giai thừa"));
    let a = 1
    for (let i = 1; i <= userInput; i++){
        a = a * i
    }console.log(a);
}tinhGiaiThua()
*/

// EX 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không.
/* 
function checkNumber(){
    let userInput = 100
    if (typeof userInput == 'number'){
        alert(`${userInput} is a number`)
    }else {alert("False")}
}checkNumber(userInput)
 */

// EX 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
/* 
function min (){
    let a = Number(prompt("nhập số nguyên a"));
    let b = Number(prompt("nhập số nguyên b"));
    let c = Number(prompt("nhập số nguyên c"));
    condition=Number.isInteger(a) && Number.isInteger && Number.isInteger(c)
    if (a <= b && a <= c && condition ) {
        alert(" a là số nhỏ nhất")
    }else if (b<= a && b<= c && condition){
        alert("b là số nhỏ nhất")
    }else if (c <= a && c <= b &&condition) {
        alert("c là số nhỏ nhất")
    }else{
        alert("số nhập ko hợp lệ")
    }
}min()
*/

// EX 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không.
/* 
function checkInt (){
    let a = prompt("nhập số :");
    if (Number(a) > 0 && Number.isInteger(Number(a))){
        alert ("a là số nguyên dương")
    }else{
        alert (" False ")
    }
}checkInt ()
*/
// EX 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
/* let a = 5, b = 7;
function swap(a,b){
    temp = a
    a = b
    b = temp
    alert(`a = ${a} b = ${b}`)
    return
} 
swap(a,b)
 */

// EX 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
/* 
function reverse(){
    let arr = prompt("Nhập vào các số nguyên cách nhau bởi dấu cách").split(" ")
    let newArr = []
    for (i = arr.length -1 ; i >= 0; i--){
        newArr.push(arr[i]);
    }console.log(newArr);
}reverse() */

// EX 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ
// đó có nằm trong mảng không.
/* 
function mangKyTu (){
    let stt = 0
    let array = prompt("Nhập vào mảng kí tự ").split("");
    let miniArray = prompt("Nhập vào kí tự cần kiểm tra");
    if ( array.indexOf(miniArray) == -1){
        alert("từ này chưa có")
    } else {
        for (let i=0; i<array.length; i++){
            if((array[i] == miniArray)){
                stt = stt +1
            }
        }
    } console.log(`Từ này xuất hiện ${stt} lần `);

}mangKyTu ()
*/

