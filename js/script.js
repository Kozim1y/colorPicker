const color = () => {
  let colorInput = document.getElementById("colorPicker").value;
  document.body.style.backgroundColor = colorInput;
  document.getElementById("colorText").value = colorInput;
  let result = document.getElementById("result");
  result.style.opacity = "0";
}

const copy = () => {
  let hexColor = document.getElementById("colorText");
  let result = document.getElementById("result");
  navigator.clipboard.writeText(hexColor.value);
  result.style.opacity = "1";
  result.innerHTML = "Copied!";
}

if("worker" in navigator) {
  window.addEventListener("load", function() {
    navigator.worker.register("/worker.js")
  })
}