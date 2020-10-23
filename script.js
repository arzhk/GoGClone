function dimTheBG() {
  const dimBGDiv = document.querySelector("#bg-dim");
  dimBGDiv.style.display = "block";
  setTimeout(function () {
    dimBGDiv.classList.add("fade");
  }, 200);
}

function hideTheBG() {
  const dimBGDiv = document.querySelector("#bg-dim");
  dimBGDiv.classList.remove("fade");
  dimBGDiv.style.display = "none";
}
