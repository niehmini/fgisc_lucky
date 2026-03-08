function drawName() {
  let text = document.getElementById("names").value;
  let list = text.split("\n");
  let r = Math.floor(Math.random() * list.length);
  document.getElementById("text-result").innerText = list[r];
}

function drawNumber(){
    let m = parseInt(document.getElementById("down").value);
    let M = parseInt(document.getElementById("up").value);
    let r = Math.floor(Math.random()*(M - m + 1)) + m;
    document.getElementById("num-result").innerText = r;
}