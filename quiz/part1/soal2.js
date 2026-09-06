let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    let var1 = input.splice(1,1,"Roman Alamsyah Elsharawy ");
    var1 = input.splice(2,1,"Provinsi Bandar Lampung ");
    var1 = input.splice(4,1,"Pria ");
    var1 = input.push("SMA Internasional Metro");
    console.log(input);
    console.log("=========================================");
    console.log();
}

function dataHandling3(arr){
    let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let mei = arr[3].slice(3,5);
    let parsInt = parseInt(mei);
    console.log(bulan[parsInt-1]);
}
// console.log(input);

dataHandling2(input);
dataHandling3(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * 1.   ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * 2.   Mei
 * 3.   ["1989", "21", "05"]
 * 4.   21-05-1989
 * 5.   Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
