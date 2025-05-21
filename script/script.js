const textarea = document.getElementById("textarea");
const tombol = document.querySelectorAll("button");
let ekspresi = "";
tombol.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;
    if (value == "=") {
      try {
        let fixedEkspresi = ekspresi.replace("x", "*").replace("X", "*");
        const hasil = eval(fixedEkspresi);
        textarea.value = hasil;
        ekspresi = String(hasil);
      } catch (error) {
        textarea.value = "Error";
        ekspresi = "";
      }
    } else if (value == "C") {
      ekspresi = "";
      textarea.value = ekspresi;
    } else if (value == "<=") {
      ekspresi = ekspresi.slice(0, -1);
      textarea.value = ekspresi;
    } else {
      ekspresi += value;
      textarea.value = ekspresi;
    }
  });
});
