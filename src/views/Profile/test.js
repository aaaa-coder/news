function add(num) {
    if (num > 0 && num <= 100) {
        return num + add(num - 1);
    } else {
        return num
    }
}
add(100);
console.log(add(100));

let str = "123456789"
console.log(str[3]);