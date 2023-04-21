const kunciJawaban = [1, 2, 3, 4];
console.log(kunciJawaban.join(""));
const jawaban = [1, 4, 3, 2];

function cekAngkaBenar() {
  let angkaBenar = 0;
  jawaban.map((angka, i) => {
    kunciJawaban.map((kunjaw) => {
      console.log(angka, kunjaw);
      if (kunjaw === angka) {
        angkaBenar += 1;
      }
    });
  });
  console.log(angkaBenar);
}

function cekPosisi() {
  let posisiBenar = 0;
  jawaban.map((angka, i) => {
    if (angka === kunciJawaban[i]) {
      posisiBenar += 1;
    }
  });
  console.log(posisiBenar);
}

cekPosisi();
cekAngkaBenar();
