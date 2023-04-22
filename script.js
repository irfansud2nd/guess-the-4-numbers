// const kunciJawaban = [1, 2, 3, 4];
const submit = document.getElementById("submit");
const input = document.getElementById("jawaban");
const kunciJawaban = [];

generateKunciJawaban();

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
  }
});

submit.addEventListener("click", () => {
  jawabanStr = input.value.split("");
  input.value = "";
  let jawaban = [];
  if (jawabanStr.length < 4) {
    alert("Anda memasukan kurang dari 4 karakter");
    throw new Error("Error");
  }
  jawabanStr.map((angka) => {
    if (isNaN(Number(angka))) {
      alert("Anda memasukan selain angka!");
      throw new Error("Error");
    }
    jawaban.push(Number(angka));
  });
  //   console.log("jawaban", jawaban.join(""));
  //   console.log("kunciJawaban", kunciJawaban.join(""));
  //   console.log("posisiBenar", cekPosisi(jawaban));
  //   console.log("angkaBenar", cekAngkaBenar(jawaban));
  addRow(jawaban.join(""), cekPosisi(jawaban), cekAngkaBenar(jawaban));
  if (cekPosisi(jawaban) === 4) alert("Selamat Jawaban Anda Benar");
});

function generateKunciJawaban() {
  while (kunciJawaban.length < 4) {
    const angkaMasuk = Math.floor(Math.random() * 10);
    if (!kunciJawaban.includes(angkaMasuk)) {
      kunciJawaban.push(angkaMasuk);
    }
  }
  //   console.log(kunciJawaban.join(""));
}

function cekAngkaBenar(jawaban) {
  let angkaBenar = 0;
  jawaban = [...new Set(jawaban)];
  jawaban.map((angka, i) => {
    kunciJawaban.map((kunjaw) => {
      //   console.log(angka, kunjaw);
      if (kunjaw === angka) {
        angkaBenar += 1;
      }
    });
  });
  return angkaBenar;
}

function cekPosisi(jawaban) {
  let posisiBenar = 0;
  jawaban.map((angka, i) => {
    if (angka === kunciJawaban[i]) {
      posisiBenar += 1;
    }
  });
  return posisiBenar;
}

function addRow(jawaban, posisiBenar, angkaBenar) {
  const tbodyRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  // Insert a row at the end of table
  const newRow = tbodyRef.insertRow();

  // Insert a cell at the end of the row
  let newCell = newRow.insertCell();

  // Append a text node to the cell
  newCell.innerHTML = jawaban;

  newCell = newRow.insertCell();
  newCell.innerHTML = `Posisi Benar ${posisiBenar} <br> Angka Benar ${angkaBenar}`;
}

function menyerah() {
  document.getElementById(
    "modal-body-menyerah"
  ).innerHTML = `Jawabannya adalah <strong>${kunciJawaban.join("")}</strong>`;
  document.getElementById("modal-button-menyerah").innerHTML =
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="window.location.reload();">Close</button>';
  document
    .getElementById("close-menyerah")
    .setAttribute("onclick", "window.location.reload();");
}
