// Đề bài 1: Cho người dùng nhập vào số nguyên và lưu trữ vào mảng

var arr1 = [];
var arrNew = []; // mảng cho bài 6

function themSo() {
    var soN = document.getElementById('soN').value * 1;
    arr1.push(soN);
    arrNew.push(soN);
    document.getElementById('mangNguoiDungNhap').innerHTML = arr1;
}
// console.log(arr1);

// Bài tập 1: Tổng số dương
function tongSoDuong() {
    var tongSoDuong = 0;
    arr1.forEach(function (item) {
        if (item > 0) {
            tongSoDuong += item;
        }
    });
    document.getElementById('tongSoDuong').innerHTML = tongSoDuong;
}

// Bài tập 2: Đếm số dương
function demSoDuong() {
    var demDuong = 0;
    arr1.forEach(function (item) {
        if (item > 0) {
            demDuong++;
        }
    });
    document.getElementById('demCacSoDuong').innerHTML = demDuong;
}

// Bài tập 3: Tìm số nhỏ nhất
function timSoNhoNhat() {
    var bienMin = arr1[0] * 1;
    var index = 0;
    for (var i = 1; i < arr1.length; i++) {
        var soNhoNhat = arr1[i] * 1;
        if (soNhoNhat < bienMin) {
            bienMin = soNhoNhat;
            index = i;
        }
    };
    document.getElementById('soNhoNhat').innerHTML = bienMin;
}

// Bài tập 4: Tìm số dương nhỏ nhất

function timSoDuongNN() {

    var arrSoDuong = [];
    arr1.forEach(function (item) {
        if (item > 0) {
            console.log(item);
            arrSoDuong.push(item);
        }
    });

    var bienMin = arrSoDuong[0] * 1;
    var index = 0;
    if (bienMin > 0) {
        for (var i = 1; i < arrSoDuong.length; i++) {
            var soDuongNN = arrSoDuong[i] * 1;
            if (soDuongNN < bienMin) {
                bienMin = soDuongNN;
                index = i;
            }
        };
    }
    document.getElementById('soDuongNN').innerHTML = bienMin;
}

// Bài tập 5: Tìm số chẵn cuối cùng
function timSoChanCuoi() {
    var arrSoChan = [];
    arr1.forEach(function (item) {
        arrSoChan[0] = -1;
        if (item % 2 == 0) {
            arrSoChan.push(item);
        } 
    });
    // console.log(arrSoChan);
    for (var i = 0; i < arrSoChan.length; i++) {
        var last = arrSoChan[i];
        // if (arrSoChan[i])
    }
    document.getElementById('soChanCuoi').innerHTML = last;
}

// Bài tập 6: Đổi chỗ

function swap(input, vt1, vt2) {
    var bienTam = input[vt1];
    input[vt1] = input[vt2];
    input[vt2] = bienTam;
}

function doiViTri() {
    // var arrNew = [];
    var viTri1 = document.getElementById('viTri1').value * 1;
    var viTri2 = document.getElementById('viTri2').value * 1;
    // console.log(viTri1, viTri2);

    swap(arrNew, viTri1, viTri2);
    console.log(arrNew);
    document.getElementById('doiViTri').innerHTML = "Mảng sau khi đổi là: " + arrNew;
}

// Bài tập 7: Sắp xếp tăng dần
function sapXepTang() {
    var arrSapXep = [];
    arr1.forEach(function (item) {
        arrSapXep.push(item*1);
    });

    document.getElementById('tangDan').innerHTML = arrSapXep.sort(function(a, b){return a - b});
}

// Bài tập 8: Tìm số nguyên tố đầu tiên
function kiem_tra_snt(n) {
    var soNuyenTo = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        soNuyenTo = false;
    }
    else if (n == 2) {
        soNuyenTo = true;
    }
    else if (n % 2 == 0) {
        soNuyenTo = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                soNuyenTo = false;
                break;
            }
        }
    }
 
    return soNuyenTo;
}

function timSoNTDau() {
    // var soNTDauTien = 0;
    for (var i = 0; i < arr1.length; i++) {
        var soNTDauTien = 0;
        if (kiem_tra_snt(arr1[i]*1)) {
            soNTDauTien = arr1[i]*1;
            break;
        } else {
            soNTDauTien = -1;
        }
    }
    document.getElementById('soNTDauTien').innerHTML = soNTDauTien;
}

// Bài tập 9: Đếm số nguyên
var arrSoThuc = [];

function themSoThuc() {
    var soThuc = document.getElementById('soThuc').value * 1;
    arrSoThuc.push(soThuc);
    document.getElementById('mangSoThuc').innerHTML = arrSoThuc;
}
console.log(arrSoThuc);

function demSoNguyen() {
    var demSoN = 0;
    for (var i = 0; i < arrSoThuc.length; i++) {
        if(Number.isInteger(arrSoThuc[i]*1) == true) {
            demSoN++;
            console.log(Number.isInteger(arrSoThuc[i]*1));
        }
    }
    document.getElementById('demCacSoNguyen').innerHTML = demSoN;
}

// Bài tập 10: So sánh số lượng số âm và số dương
function soSanhAmDuong() {
    var demDuong = 0;
    arr1.forEach(function (item) {
        if (item > 0) {
            demDuong++;
        }
    });
    // console.log(demDuong);
    var demAm = 0;
    arr1.forEach(function (item) {
        if (item < 0) {
            demAm++;
        }
    });
    // console.log(demAm);

    if (demDuong > demAm) {
        document.getElementById('soSanhSoLuong').innerHTML = "Số dương > Số âm"
    } else if (demDuong < demAm) {
        document.getElementById('soSanhSoLuong').innerHTML = "Số dương < Số âm"
    } else if (demDuong = demAm) {
        document.getElementById('soSanhSoLuong').innerHTML = "Số dương = Số âm"
    }

}



