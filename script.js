document.getElementById("container")
  .addEventListener('mousemove', (e) => {
    const {clientX: x, clientY: y} = e;

    document.getElementById('box').style = `
      left: calc(${x}px - 5em);
      top: calc(${y}px - 5em);
      filter: blur(0);
      background: rgba(0, 0, 0, 0.5);
      border-radius: 100%;
    `
  });