const ans = document.querySelector("#ans");
const findLogBtn = document.querySelector("#findLogBtn");
const findAntilogBtn = document.querySelector("#findAntilogBtn");

findLogBtn.addEventListener("click", findLog);
findAntilogBtn.addEventListener("click", findAntilog);

// log
function findLog() {
  const number = document.querySelector("#number").value;
  let base = document.querySelector("#baseInput").value || Math.E;

  const log = Math.log(number) / Math.log(base);

  ans.innerHTML =
    base == Math.E
      ? `log<sub>e</sub> ${number} =  ${log.toFixed(5)}`
      : `log<sub>${base}</sub> ${number} =  ${log.toFixed(5)}`;
}

// antilog
function findAntilog() {
  const number = document.querySelector("#number").value;
  const base = document.querySelector("#baseInput").value || Math.E;

  let antilog = (base ** number).toFixed(5);

  ans.innerHTML =
    base == Math.E
      ? `antilog<sub>e</sub> ${number} =  ${antilog}`
      : `antilog<sub>${base}</sub> ${number} =  ${antilog}`;
}

// toggle base input
function toggleBaseInput() {
  var customBase = document.getElementById("customBase");
  var baseInput = document.getElementById("baseInput");

  baseInput.disabled = customBase.checked ? false : true;
  baseInput.value = "";
  if (!baseInput.disabled) {
    baseInput.focus();
  }
}
