const submit = document.getElementById("submit");
const input = document.getElementById("jawaban");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("enter");
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
  console.log(jawaban);
});
