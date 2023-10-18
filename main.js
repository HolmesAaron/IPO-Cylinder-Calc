// Cylinder Calculator

document.getElementById("btn").addEventListener("click", calculate);
let volumeOut = document.getElementById("volume-out");
let areaOut = document.getElementById("area-out");

function calculate() {
  // INPUT
  let height = +document.getElementById("height-in").value;
  let radius = +document.getElementById("radius-in").value;

  // PROCCESS
  let volume = Math.PI * radius ** 2 * height;
  let surfaceArea = 2 * Math.PI * radius ** 2 + 2 * Math.PI * radius * height;

  // OUTPUT
  volumeOut.innerHTML = Math.round(volume);
  areaOut.innerHTML = Math.round(surfaceArea);
}
