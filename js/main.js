function getElementID(id) {
  return document.getElementById(id);
}

function getElement(className) {
  return document.querySelector(className);
}

function getResult(result, textColor) {
  return `<div class="${textColor} font-weight-bold">${result}</div>`;
}

function addNumber(idInput, arrNumberInput) {
  var numberInput = getElementID(idInput).value;

  numberInput = parseFloat(numberInput);

  if (isNaN(numberInput)) {
    alert("Số bạn đang nhập không đúng format");
    numberInput.innerHTML = "";
    return;
  }

  arrNumberInput.push(numberInput);
  getElementID(idInput).value = "";
}

function addNumberInArrNumber(arrNumberInput, idResult) {
  if (arrNumberInput.length <= 0) {
    alert("Mảng đang không có giá trị");
    return;
  }

  var arrData = "";
  for (let i = 0; i < arrNumberInput.length; i++) {
    arrData += arrNumberInput[i] + " ";
  }

  getElementID(idResult).readOnly = false;
  getElementID(idResult).value = arrData;
  getElementID(idResult).readOnly = true;
}

//----------------- Thêm số vào mảng -----------------------//
var arrNumberInput = [];

getElementID("hanldeAdd").onclick = function () {
  addNumber("numberInput", arrNumberInput);
  addNumberInArrNumber(arrNumberInput, "resultData");
};

//----------------- Tổng số dương trong mảng -----------------------//
getElementID("hanldSumPositiveNumber").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    var arrPositiveNumber = findArrPositiveNumber(arrNumberInput);
    result = `Tổng các số dương trong mảng là ${sumNumber(arrPositiveNumber)}`;
    textColor = "text-success";
  }

  getElement("#sumPositiveNumber").innerHTML = getResult(result, textColor);
};

//----------------- Đếm số lượng số dương trong mảng -----------------------//
getElementID("hanldCountPositiveNumber").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    var arrPositiveNumber = findArrPositiveNumber(arrNumberInput);
    result = `Số lượng số dương trong mảng là ${arrPositiveNumber.length}`;
    textColor = "text-success";
  }

  getElement("#countPositiveNumber").innerHTML = getResult(result, textColor);
};

//----------------- Tìm số nhỏ nhất trong mảng -----------------------//
getElementID("hanldFindMinNumber").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    var minNumber = arrNumberInput[findIndexMin(arrNumberInput)];
    result = `Số nhỏ nhất trong mảng là ${minNumber}`;
    textColor = "text-success";
  }

  getElement("#minNumber").innerHTML = getResult(result, textColor);
};

//----------------- Tìm số dương nhỏ nhất trong mảng -----------------------//
getElementID("hanldFindMinPositiveNumber").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    var arrPositiveNumber = findArrPositiveNumber(arrNumberInput);

    if (arrPositiveNumber.length <= 0) {
      result = "Mảng không có giá trị dương";
    } else {
      var minPositiveNumber =
        arrPositiveNumber[findIndexMin(arrPositiveNumber)];
      result = `Số dương nhỏ nhất trong mảng là ${minPositiveNumber}`;
      textColor = "text-success";
    }
  }

  getElement("#minPositiveNumber").innerHTML = getResult(result, textColor);
};

//----------------- Tìm số chẵn cuối cùng trong mảng -----------------------//
function getLastEvenNumber(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) return arr[i];
  }

  return -1;
}

getElementID("hanldFindLastEven").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    var lastEven = getLastEvenNumber(arrNumberInput);

    if (lastEven != -1) {
      result = `Số chẵn cuối cùng trong mảng là ${lastEven}`;
      textColor = "text-success";
    } else {
      result = "Mảng không có giá trị chẵn nào";
    }
  }

  getElement("#lastEven").innerHTML = getResult(result, textColor);
};

//----------------- Đổi chỗ 2 giá trị trong mảng theo vị trí -----------------------//
function swapElements(arr, posOne, posTwo) {
  const temp = arr[posOne];
  arr[posOne] = arr[posTwo];
  arr[posTwo] = temp;
  return arr;
}

getElementID("hanldSwapNumber").onclick = function () {
  var positionSwapOne = parseInt(getElementID("positionSwapOne").value);
  var positionSwapTwo = parseInt(getElementID("positionSwapTwo").value);
  var result = "",
    textColor = "text-danger";

  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else if (
    isNaN(positionSwapOne) ||
    isNaN(positionSwapTwo) ||
    positionSwapOne < 0 ||
    positionSwapTwo < 0
  ) {
    result = "Vị trí chỉ có thể là số dương >= 0";
  } else if (
    positionSwapOne > arrNumberInput.length - 1 ||
    positionSwapTwo > arrNumberInput.length - 1
  ) {
    result = "Vị trí nhập không nằm trong mảng";
  } else {
    var arrSwap = swapElements(
      arrNumberInput,
      positionSwapOne,
      positionSwapTwo
    );

    var arrSwapData = "";
    for (var i = 0; i < arrSwap.length; i++) {
      arrSwapData += arrSwap[i] + " ";
    }

    if (arrSwapData.length <= 0) {
      result = "Mảng không có giá trị";
    } else {
      result = `Mảng sau khi đổi vị trí ${arrSwapData}`;
      textColor = "text-success";
    }
  }

  getElement("#swapResult").innerHTML = getResult(result, textColor);
};

//----------------- Sắp xếp mảng theo thứ tự tăng dần -----------------------//
getElementID("hanldArrangeIncrease").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    arrNumberInput.sort(function (a, b) {
      return a - b;
    });

    var arrArrangeIncrease = "";
    for (var i = 0; i < arrNumberInput.length; i++) {
      arrArrangeIncrease += arrNumberInput[i] + " ";
    }

    if (arrArrangeIncrease == "") {
      result = "Mảng không có giá trị";
    } else {
      result = `Mảng sắp xếp tăng dần ${arrArrangeIncrease}`;
      textColor = "text-success";
    }
  }

  getElement("#increaseArray").innerHTML = getResult(result, textColor);
};

//----------------- Tìm số nguyên tố đầu tiên trong mảng -----------------------//
function getFirstPrime(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      return arr[i];
    }
  }

  return -1;
}

getElementID("hanldFirstPrime").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    var firstPrime = getFirstPrime(arrNumberInput);

    if (firstPrime != -1) {
      result = `Số nguyên tố đầu tiên trong mảng là ${firstPrime}`;
      textColor = "text-success";
    } else {
      result = "Mảng không có số nguyên tố";
    }
  }

  getElement("#firstPrime").innerHTML = getResult(result, textColor);
};

//----------------- Đếm số nguyên trong mảng số thực -----------------------//
var arrNumberRInput = [];

getElementID("hanldeAddReal").onclick = function () {
  addNumber("realNumberInput", arrNumberRInput);
  addNumberInArrNumber(arrNumberRInput, "resultDataReal");
};

function countNumberZ(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }

  return count;
}

getElementID("hanldCountInteger").onclick = function () {
  var result,
    textColor = "text-danger";
  if (arrNumberRInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    var countNumber = countNumberZ(arrNumberRInput);
    if (countNumber == 0) {
      result = "Mảng không có số nguyên nào";
    } else {
      result = `Số lượng số nguyên trong mảng ${countNumber}`;
      textColor = "text-success";
    }
  }

  getElement("#countIntegerResult").innerHTML = getResult(result, textColor);
};

//----------------- So sánh số lượng số dương và số âm -----------------------//
function getCountNumber(arr) {
  var countNegativeNumber = 0,
    countPositiveNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      countPositiveNumber++;
    } else {
      countNegativeNumber++;
    }
  }

  return [countNegativeNumber, countPositiveNumber];
}

getElementID("hanldCompare").onclick = function () {
  var countNegativeNumber,
    countPositiveNumber,
    result,
    textColor = "text-danger";

  if (arrNumberInput.length <= 0) {
    result = "Mảng không có giá trị";
  } else {
    [countNegativeNumber, countPositiveNumber] = getCountNumber(arrNumberInput);

    textColor = "text-success";

    if (countPositiveNumber == countNegativeNumber) {
      result = "Số lượng số dương và số âm bằng nhau";
    } else if (countPositiveNumber > countNegativeNumber) {
      result = `Số lượng số dương (tổng số dương ${countPositiveNumber}) lớn hơn số âm (tổng số âm ${countNegativeNumber})`;
    } else {
      result = `Số lượng số âm (tổng số âm ${countNegativeNumber}) lớn hơn số dương (tổng số dương ${countPositiveNumber})`;
    }
  }

  getElement("#compareResult").innerHTML = getResult(result, textColor);
};
