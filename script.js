var start = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function move() {
  var wh = (Math.random() * 400) + 100;

  // Calculate header height dynamically (h1 + p + extra margin)
  var headerHeight = 0;
  var h1 = document.querySelector('h1');
  var p = document.querySelector('p');
  if (h1 && p) {
    headerHeight = h1.offsetHeight + p.offsetHeight + 30; // 30px padding
  } else {
    headerHeight = 150; // fallback value
  }

  var left = Math.random() * (window.innerWidth - wh);
  var top = headerHeight + Math.random() * (window.innerHeight - headerHeight - wh);

  var shape = document.getElementById("shape");
  shape.style.width = wh + "px";
  shape.style.height = wh + "px";
  shape.style.left = left + "px";
  shape.style.top = top + "px";
  shape.style.backgroundColor = getRandomColor();
  shape.style.display = "block";

  start = new Date().getTime();
}

move();

document.getElementById("shape").onclick = function () {
  this.style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  alert(timeTaken+" second");
  move();
};
