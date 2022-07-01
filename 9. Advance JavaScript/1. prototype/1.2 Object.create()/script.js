// cara membuat object pada JavaScript
// 1. Object Literal
// problemnya tidak efektif untuk objet yang banyak
// let mahasiswa1 = {
// 	nama : "Alfian Yulianto",
// 	energi : 10,
// 	makan : function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Hallo ${this.nama}, selamat makan!`);
// 	}
// };
// let mahasiswa2 = {
// 	nama : "Dodi",
// 	energi : 20,
// 	makan : function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Hallo ${this.nama}, selamat makan!`);
// 	}
// };


// 2. Function Declaration
// dalam menginstansiasi sebuah function declaration 
// sebenarnya kita menjalankan ketiga properti makan, main, dan tidur
// sehingga ini tidak baik dalam memanajemen memori
// untuk mengatasi hal tersebut kita membutuhkan object baru untuk menyimpan method makan, main, dan tidur
// ini dilakukan agar method-nya disimpan dulu kedalam memori baru jika function diinstansiasi 
// maka yang di ambil hanyalah method yang dibutuhkan saja
// sehingga akan lebih baik dalam memanajemen memori
const methodMahasiswa = {
	coba: function(){
		console.log(this);		// this mengembalikan isi dari object Mahasiswa
	},
	makan :function(porsi) {
		this.energi += porsi;
		// console.log(`Hallo ${this.nama}, selamat makan!`);
		return `Hallo ${this.nama}, selamat makan!`;
	},
	main : function(jam) {
		this.energi -= jam;
		// console.log(`Hallo ${this.nama}, selamat bermian!`);
		return `Hallo ${this.nama}, selamat bermian!`;
	},
	tidur: function(jam) {
		this.energi  += jam * 2 ;
		// console.log(`Halo ${this.nama}, selamat tidur!`);
		return  `Halo ${this.nama}, selamat tidur!`;
	}
};
// problemnya kita harus mengelola 2 obj sekaligus, jika kitaingin memanbahkan method di obj literal maka kita harus menulisnkannya di function deklaration agar bisa digunakan
function Mahasiswa(nama, energi){
	let mahasiswa = {};
	mahasiswa.nama = nama;
	mahasiswa.energi = energi;
	mahasiswa.makan = methodMahasiswa.makan;		// membuat method makan yang memamngil obj lain yg menthodnya makan
	mahasiswa.main = methodMahasiswa.main;			// membuat method main yang memamngil obj lain yg menthodnya main
	mahasiswa.tidur = methodMahasiswa.tidur;		// membuat method tidur yang memamngil obj lain yg menthodnya tidur

	return mahasiswa;
}

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa); // membuat object sekaligus mengambil properti / method dari object lain untuk dijadikan sebagai parent kelas
// 	// 	poperti        = parameter
// 		mahasiswa.nama = nama;
// 		mahasiswa.energi = energi;
// 		return mahasiswa;
// }
let alfian = Mahasiswa("Alfian", 10);
let dodi = Mahasiswa("Dodi", 20);


// 3. Constuctor Function
// keyword new
// function Mahasiswa(nama, energi) {
// 	// 	poperti        = parameter
// 		this.nama = nama;
// 		this.energi = energi;
// 		this.makan = function(porsi) {
// 			this.energi += porsi;
// 			console.log(`Hallo ${this.nama}, selamat makan!`);
// 		}
// 		this.main = function(jam) {
// 			this.energi -= jam;
// 			console.log(`Hallo ${this.nama}, selamat bermian!`);
// 		}
// }
// let alfian = new Mahasiswa("alfian", 20);




// 4. Object.create

