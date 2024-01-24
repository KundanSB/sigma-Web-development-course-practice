function getRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Create and return the color string
    return `rgb(${r}, ${g}, ${b})`;
  }

  function color(boxId){
    box = document.getElementById(boxId);
    box.style.backgroundColor = getRandomColor();
  }

  color('box1');
  color('box2');