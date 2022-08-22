let count = 0;

function createMatrix() 
{
  let audio0 = document.getElementById("Audio0");
  let audio1 = document.getElementById("Audio1");
  let audio2 = document.getElementById("Audio2");
  let audio3 = document.getElementById("Audio3");
  let audio4 = document.getElementById("Audio4");
  let audio5 = document.getElementById("Audio5");
  let audio6 = document.getElementById("Audio6");
  let mySongs = [audio0, audio1, audio2, audio3, audio4, audio5, audio6];
  let nTile = document.getElementById("input-el").value;
  for (let r = 0; r < nTile; r++) {
    let rows = document.getElementById("myTable").insertRow(r);
    for (let c = 0; c < nTile; c++) {
      let columns = rows.insertCell(c);
      columns.classList.add("tile");
      count++;
      columns.setAttribute("id", "t" + count);

      columns.innerHTML = count;
    }
  }
  let musicTiles = document.getElementsByClassName("tile");
  for (const tile of musicTiles) {
    tile.addEventListener("mouseover", function () {
      let randomIndex = Math.floor(Math.random() * 7);
      let audio = mySongs[randomIndex];
      audio.play();
    });
  }
}

let goMusic = document.querySelectorAll(".tile");
goMusic.forEach(
  (tile) =>
    function () {
      tile.addEventListener("mouseover", function playMusic() {
        let randomIndex = Math.floor(Math.random() * 7);
        let audio = mySongs[randomIndex];
        audio.play();
      });
    }
);