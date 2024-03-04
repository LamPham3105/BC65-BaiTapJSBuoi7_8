/**
* hàm này nhận vào 1 mảng và trả về tổng các số  trong mảng
* @param {*} arr mảng được truyền vào để tính tổng số
* @return tổng số trong mảng
*/

function sumNumber(arr) {
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

/**
* hàm này nhận vào 1 mảng và trả về mảng các số dương
* @param {*} arr mảng được truyền vào để mảng các số dương
* @return mảng các số dương
*/

function findArrPositiveNumber(arr) {
    var arrPositiveNumber = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arrPositiveNumber.push(arr[i]);
        }
    }

    return arrPositiveNumber;
}

/**
* hàm này nhận vào 1 mảng và trả về chỉ số index của số nhỏ nhất
* @param {*} arr mảng được truyền vào để lấy vị trí của số nhỏ nhất
* @return index của số nhỏ nhất trong mảng
*/

function findIndexMin(arr) {
    var indexMin = 0;
    var min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            indexMin = i;
        }
    }

    return indexMin;
}

/**
* hàm này nhận vào 2 số và đổi vị trí 2 số
* @param {*} numberOne 
* @param {*} numberTwo 
* @return đổi vị trí 2 số
*/
function swap(numberOne, numberTwo) {
    var num = numberOne;
    numberOne = numberTwo;
    numberTwo = num;
    return [numberOne, numberTwo];
}

/**
* hàm này nhận vào 1 số và kiểm tra số có phải số nguyên số
* @param {*} n số được truyền vào để kiểm tra số nguyên tố
* @return true nếu là số nguyên tố, false nếu không phải số nguyên tố
*/
function isPrime(n) {
    if (n < 2) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    }
    
    for (var i = 3; i < Math.sqrt(n); i += 2)
    {
        if (n % i == 0){
            return false;
        }
    }

    return true;
}
