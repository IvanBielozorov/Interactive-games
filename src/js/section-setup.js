const containers = document.querySelectorAll('.container');
// console.log(containers);
containers.forEach(container => {
  if (
    // container !== containers[0] &&
    container !== containers[containers.length - 1] &&
    container !== containers[containers.length - 2]
  ) {
    const line = document.createElement('div');
    line.classList.add('line-section');
    container.after(line);
  }
});
